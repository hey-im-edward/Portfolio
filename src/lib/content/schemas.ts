import { z } from "zod";

export const localeSchema = z.enum(["en", "vi"]);

const localizedPageSlugSchema = z
  .string()
  .min(1)
  .refine((value) => value === "/" || value.startsWith("/"), {
    message: "Page slugs must start with / or be /.",
  });

const projectTeamSizeSchema = z
  .union([z.number().int().positive(), z.string().min(1)])
  .transform((value) => String(value));

export const siteSettingsSchema = z.object({
  name: z.string().min(1),
  headline: z.string().min(1),
  location: z.string().min(1),
  email: z.email(),
  github: z.url(),
  linkedin: z.url(),
  resumeUrl: z.string().min(1),
  domain: z.url(),
  defaultLocale: localeSchema,
  alternateLocales: z.array(localeSchema).min(1),
});

export const authorSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  headline: z.string().min(1),
  bio: z.string().min(1),
  location: z.string().min(1),
  email: z.email(),
  github: z.url(),
  linkedin: z.url(),
  focusAreas: z.array(z.string().min(1)).min(1),
  availability: z.string().min(1).optional(),
});

const contentBaseSchema = z.object({
  title: z.string().min(1),
  slug: z.string().min(1),
  locale: localeSchema,
  summary: z.string().min(1),
});

export const staticPageSchema = contentBaseSchema.extend({
  slug: localizedPageSlugSchema,
  seoTitle: z.string().min(1).optional(),
  seoDescription: z.string().min(1).optional(),
});

export const projectSchema = contentBaseSchema.extend({
  role: z.string().min(1),
  period: z.string().min(1),
  status: z.string().min(1),
  teamSize: projectTeamSizeSchema,
  stack: z.array(z.string().min(1)).min(1),
  repoUrl: z.string().url().or(z.literal("")).default(""),
  demoUrl: z.string().url().or(z.literal("")).default(""),
  featured: z.boolean().default(false),
  coverImage: z.string().min(1),
  ogImage: z.string().min(1),
  results: z.array(z.string().min(1)).min(1),
  order: z.number().int().nonnegative(),
  draft: z.boolean().default(false),
  tags: z.array(z.string().min(1)).default([]),
});

export const postSchema = contentBaseSchema.extend({
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  tags: z.array(z.string().min(1)).min(1),
  coverImage: z.string().min(1),
  draft: z.boolean().default(false),
  readingTimeOverride: z.number().positive().optional(),
});

export type SiteSettings = z.infer<typeof siteSettingsSchema>;
export type Author = z.infer<typeof authorSchema>;
export type StaticPageFrontmatter = z.infer<typeof staticPageSchema>;
export type ProjectFrontmatter = z.infer<typeof projectSchema>;
export type PostFrontmatter = z.infer<typeof postSchema>;
