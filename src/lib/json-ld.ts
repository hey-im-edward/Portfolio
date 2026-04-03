import type {
  Author,
  PostFrontmatter,
  ProjectFrontmatter,
  SiteSettings,
} from "@/lib/content/schemas";
import type { Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import { normalizeContactValue } from "@/lib/utils";

type JsonLdValue = Record<string, unknown>;

export function buildPersonJsonLd(site: SiteSettings, author: Author) {
  const sameAs = [
    normalizeContactValue(author.github),
    normalizeContactValue(author.linkedin),
  ].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.headline,
    email: normalizeContactValue(author.email) || undefined,
    url: absoluteUrl("/").toString(),
    sameAs,
    homeLocation: {
      "@type": "Place",
      name: author.location,
    },
    knowsAbout: author.focusAreas,
  } satisfies JsonLdValue;
}

export function buildWebsiteJsonLd(site: SiteSettings) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    description: site.headline,
    url: absoluteUrl("/").toString(),
    inLanguage: ["en", "vi"],
  } satisfies JsonLdValue;
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url).toString(),
    })),
  } satisfies JsonLdValue;
}

export function buildArticleJsonLd({
  post,
  locale,
  author,
  pathname,
}: {
  post: PostFrontmatter;
  locale: Locale;
  author: Author;
  pathname: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    inLanguage: locale,
    image: absoluteUrl(post.coverImage).toString(),
    url: absoluteUrl(pathname).toString(),
    author: {
      "@type": "Person",
      name: author.name,
      url: absoluteUrl("/about").toString(),
    },
  } satisfies JsonLdValue;
}

export function buildProjectJsonLd({
  project,
  locale,
  pathname,
}: {
  project: ProjectFrontmatter;
  locale: Locale;
  pathname: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    inLanguage: locale,
    image: absoluteUrl(project.coverImage).toString(),
    url: absoluteUrl(pathname).toString(),
    keywords: project.tags,
    about: project.stack,
  } satisfies JsonLdValue;
}

export function serializeJsonLd(payload: JsonLdValue | JsonLdValue[]) {
  return JSON.stringify(payload);
}
