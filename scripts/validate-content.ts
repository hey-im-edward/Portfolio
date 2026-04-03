import { getPageBySlug, getPosts, getProjects, getSiteConfig } from "@/lib/content/loaders";

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

  const enProjects = await getProjects("en");
  const enPosts = await getPosts("en");

  if (enProjects.length < 3) {
    throw new Error("Expected at least 3 English project case studies.");
  }

  if (enPosts.length < 3) {
    throw new Error("Expected at least 3 English blog posts.");
  }

  console.log(
    JSON.stringify(
      {
        site: site.name,
        projects: enProjects.length,
        posts: enPosts.length,
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
