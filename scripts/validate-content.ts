import {
  getPageBySlug,
  getPages,
  getPosts,
  getProjects,
  getSiteConfig,
} from "@/lib/content/loaders";

function getMissingLocalizedSlugs(
  source: Array<{ slug: string }>,
  localized: Array<{ slug: string }>,
  label: string,
) {
  const localizedSlugs = new Set(localized.map((item) => item.slug));
  const missing = source.map((item) => item.slug).filter((slug) => !localizedSlugs.has(slug));

  if (missing.length > 0) {
    throw new Error(`Missing Vietnamese ${label}: ${missing.join(", ")}`);
  }
}

async function main() {
  const site = await getSiteConfig();
  const requiredPages = await Promise.all([
    getPageBySlug("en", "/"),
    getPageBySlug("en", "/about"),
    getPageBySlug("en", "/projects"),
    getPageBySlug("en", "/blog"),
    getPageBySlug("en", "/contact"),
    getPageBySlug("en", "/resume"),
    getPageBySlug("vi", "/"),
    getPageBySlug("vi", "/about"),
    getPageBySlug("vi", "/projects"),
    getPageBySlug("vi", "/blog"),
    getPageBySlug("vi", "/contact"),
    getPageBySlug("vi", "/resume"),
  ]);

  const missingPages = requiredPages.filter((page) => page === null).length;

  if (missingPages > 0) {
    throw new Error(`Missing ${missingPages} required static page documents.`);
  }

  const [enPages, viPages, enProjects, viProjects, enPosts, viPosts] = await Promise.all([
    getPages("en"),
    getPages("vi"),
    getProjects("en"),
    getProjects("vi"),
    getPosts("en"),
    getPosts("vi"),
  ]);

  if (enProjects.length < 3) {
    throw new Error("Expected at least 3 English project case studies.");
  }

  if (enPosts.length < 3) {
    throw new Error("Expected at least 3 English blog posts.");
  }

  getMissingLocalizedSlugs(enPages, viPages, "static pages");
  getMissingLocalizedSlugs(enProjects, viProjects, "project case studies");
  getMissingLocalizedSlugs(enPosts, viPosts, "blog posts");

  console.log(
    JSON.stringify(
      {
        site: site.name,
        projects: enProjects.length,
        posts: enPosts.length,
        viProjects: viProjects.length,
        viPosts: viPosts.length,
      },
      null,
      2,
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
