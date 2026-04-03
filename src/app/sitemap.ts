import type { MetadataRoute } from "next";
import { getPages, getPosts, getProjects } from "@/lib/content/loaders";
import { defaultLocale, locales, localizePath } from "@/lib/i18n";
import { resolveSiteUrl } from "./api/_lib";

type SitemapEntry = MetadataRoute.Sitemap[number];

function toEntry(
  pathname: string,
  priority: number,
  changeFrequency: SitemapEntry["changeFrequency"] = "monthly",
): SitemapEntry {
  return {
    url: resolveSiteUrl(pathname).toString(),
    priority,
    changeFrequency,
  };
}

function withLocale(pathname: string, locale: (typeof locales)[number]) {
  return localizePath(locale, pathname);
}

async function safeLoad<T>(loader: () => Promise<T>, fallback: T) {
  try {
    return await loader();
  } catch {
    return fallback;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    toEntry("/", 1, "weekly"),
    toEntry("/about", 0.8),
    toEntry("/projects", 0.9),
    toEntry("/blog", 0.9),
    toEntry("/contact", 0.7),
    toEntry("/resume", 0.7),
    toEntry("/vi", 0.8, "weekly"),
    toEntry("/vi/about", 0.7),
    toEntry("/vi/projects", 0.8),
    toEntry("/vi/blog", 0.8),
    toEntry("/vi/contact", 0.6),
  ];

  const [enPages, viPages, enProjects, viProjects, enPosts, viPosts] = await Promise.all([
    safeLoad(() => getPages(defaultLocale), []),
    safeLoad(() => getPages("vi"), []),
    safeLoad(() => getProjects(defaultLocale), []),
    safeLoad(() => getProjects("vi"), []),
    safeLoad(() => getPosts(defaultLocale), []),
    safeLoad(() => getPosts("vi"), []),
  ]);

  const pageRoutes = [...enPages, ...viPages].map((page) =>
    toEntry(withLocale(page.slug, page.locale), 0.6),
  );

  const projectRoutes = [...enProjects, ...viProjects].map((project) =>
    toEntry(withLocale(`/projects/${project.slug}`, project.locale), 0.7, "monthly"),
  );

  const postRoutes = [...enPosts, ...viPosts].map((post) =>
    toEntry(withLocale(`/blog/${post.slug}`, post.locale), 0.5, "monthly"),
  );

  const seen = new Set<string>();

  return [...staticRoutes, ...pageRoutes, ...projectRoutes, ...postRoutes].filter((entry) => {
    if (seen.has(entry.url)) {
      return false;
    }

    seen.add(entry.url);
    return true;
  });
}
