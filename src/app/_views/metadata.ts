import { buildMetadata } from "@/lib/seo";
import type {
  PostFrontmatter,
  ProjectFrontmatter,
  StaticPageFrontmatter,
} from "@/lib/content/schemas";
import type { Locale } from "@/lib/i18n";

export function buildPageMetadata(page: StaticPageFrontmatter, locale: Locale, pathname: string) {
  return buildMetadata({
    title: page.seoTitle ?? page.title,
    description: page.seoDescription ?? page.summary,
    locale,
    pathname,
  });
}

export function buildProjectMetadata(
  project: ProjectFrontmatter,
  locale: Locale,
  pathname: string,
) {
  return buildMetadata({
    title: project.title,
    description: project.summary,
    locale,
    pathname,
    image: project.ogImage,
    type: "article",
  });
}

export function buildPostMetadata(post: PostFrontmatter, locale: Locale, pathname: string) {
  return buildMetadata({
    title: post.title,
    description: post.summary,
    locale,
    pathname,
    image: post.coverImage,
    type: "article",
  });
}
