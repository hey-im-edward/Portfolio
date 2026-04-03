import { cache } from "react";
import { readFile } from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";
import matter from "gray-matter";
import readingTime from "reading-time";
import {
  authorSchema,
  postSchema,
  projectSchema,
  siteSettingsSchema,
  staticPageSchema,
  type Author,
  type PostFrontmatter,
  type ProjectFrontmatter,
  type SiteSettings,
  type StaticPageFrontmatter,
} from "@/lib/content/schemas";
import { defaultLocale, type Locale } from "@/lib/i18n";

type MdxDocument<TFrontmatter> = TFrontmatter & {
  body: string;
  readingMinutes: number;
  filePath: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "content");

async function readJsonFile<T>(filePath: string, parser: { parse: (value: unknown) => T }) {
  const raw = await readFile(filePath, "utf8");
  return parser.parse(JSON.parse(raw));
}

async function readMdxFile<T>(
  filePath: string,
  parser: { parse: (value: unknown) => T },
): Promise<MdxDocument<T>> {
  const raw = await readFile(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = parser.parse(data);

  return {
    ...frontmatter,
    body: content.trim(),
    readingMinutes: Math.max(1, Math.ceil(readingTime(content).minutes)),
    filePath,
  };
}

async function readCollection<T>(
  collection: "pages" | "projects" | "blog",
  locale: Locale,
  parser: { parse: (value: unknown) => T },
) {
  const cwd = path.join(CONTENT_ROOT, collection, locale);
  const files = await fg("*.mdx", {
    absolute: true,
    cwd,
  });

  return Promise.all(files.map((filePath) => readMdxFile(filePath, parser)));
}

function mergeLocalizedDocuments<T extends { slug: string }>(
  primary: T[],
  fallback: T[],
  sortExtras: (left: T, right: T) => number,
) {
  const bySlug = new Map(primary.map((item) => [item.slug, item]));
  const merged = fallback.map((item) => bySlug.get(item.slug) ?? item);
  const missing = [
    ...primary.filter((item) => !fallback.some((fallbackItem) => fallbackItem.slug === item.slug)),
  ].sort(sortExtras);

  return [...merged, ...missing];
}

export const getSiteConfig = cache(async (): Promise<SiteSettings> => {
  return readJsonFile(path.join(CONTENT_ROOT, "global", "site.json"), siteSettingsSchema);
});

export const getPrimaryAuthor = cache(async (): Promise<Author> => {
  return readJsonFile(path.join(CONTENT_ROOT, "authors", "edward.json"), authorSchema);
});

export const getPages = cache(async (locale: Locale) => {
  return readCollection("pages", locale, staticPageSchema);
});

export const getPageBySlug = cache(async (locale: Locale, slug: string) => {
  const pages = await getPages(locale);
  return pages.find((page) => page.slug === slug) ?? null;
});

export const getLocalizedPageBySlug = cache(async (locale: Locale, slug: string) => {
  const page = await getPageBySlug(locale, slug);

  if (page || locale === defaultLocale) {
    return page;
  }

  return getPageBySlug(defaultLocale, slug);
});

export const getProjects = cache(async (locale: Locale) => {
  const projects = await readCollection("projects", locale, projectSchema);

  return projects
    .filter((project) => !project.draft)
    .sort((left, right) => left.order - right.order);
});

export const getProjectBySlug = cache(async (locale: Locale, slug: string) => {
  const projects = await getProjects(locale);
  return projects.find((project) => project.slug === slug) ?? null;
});

export const getFeaturedProjects = cache(async (locale: Locale) => {
  const projects = await getProjects(locale);
  return projects.filter((project) => project.featured);
});

export const getLocalizedProjects = cache(async (locale: Locale) => {
  if (locale === defaultLocale) {
    return getProjects(locale);
  }

  const [localized, fallback] = await Promise.all([
    getProjects(locale),
    getProjects(defaultLocale),
  ]);

  return mergeLocalizedDocuments(localized, fallback, (left, right) => left.order - right.order);
});

export const getLocalizedProjectBySlug = cache(async (locale: Locale, slug: string) => {
  const project = await getProjectBySlug(locale, slug);

  if (project || locale === defaultLocale) {
    return project;
  }

  return getProjectBySlug(defaultLocale, slug);
});

export const getPosts = cache(async (locale: Locale) => {
  const posts = await readCollection("blog", locale, postSchema);

  return posts
    .filter((post) => !post.draft)
    .sort((left, right) => right.publishedAt.getTime() - left.publishedAt.getTime());
});

export const getPostBySlug = cache(async (locale: Locale, slug: string) => {
  const posts = await getPosts(locale);
  return posts.find((post) => post.slug === slug) ?? null;
});

export const getPostTags = cache(async (locale: Locale) => {
  const posts = await getPosts(locale);
  const counts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((left, right) => right.count - left.count || left.name.localeCompare(right.name));
});

export const getLocalizedPosts = cache(async (locale: Locale) => {
  if (locale === defaultLocale) {
    return getPosts(locale);
  }

  const [localized, fallback] = await Promise.all([getPosts(locale), getPosts(defaultLocale)]);

  return mergeLocalizedDocuments(
    localized,
    fallback,
    (left, right) => right.publishedAt.getTime() - left.publishedAt.getTime(),
  );
});

export const getLocalizedPostBySlug = cache(async (locale: Locale, slug: string) => {
  const post = await getPostBySlug(locale, slug);

  if (post || locale === defaultLocale) {
    return post;
  }

  return getPostBySlug(defaultLocale, slug);
});

export type PageDocument = MdxDocument<StaticPageFrontmatter>;
export type ProjectDocument = MdxDocument<ProjectFrontmatter>;
export type PostDocument = MdxDocument<PostFrontmatter>;
