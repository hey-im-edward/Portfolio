import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/app/_components/json-ld-script";
import { getUiCopy } from "@/app/_lib/copy";
import { buildPostMetadata } from "@/app/_views/metadata";
import { LocaleFallbackNotice, RichContent } from "@/app/_views/shared";
import { ContactPanel } from "@/components/marketing/contact-panel";
import { Hero } from "@/components/marketing/hero";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { getLocalizedPostBySlug, getPrimaryAuthor, getSiteConfig } from "@/lib/content/loaders";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, serializeJsonLd } from "@/lib/json-ld";
import { localizePath, type Locale } from "@/lib/i18n";
import { formatDate } from "@/lib/utils";

export async function getPostDetailMetadata(locale: Locale, slug: string) {
  const post = await getLocalizedPostBySlug(locale, slug);

  if (!post) {
    notFound();
  }

  return buildPostMetadata(post, locale, `/blog/${slug}`);
}

export async function PostDetailView({ locale, slug }: { locale: Locale; slug: string }) {
  const [post, site, author] = await Promise.all([
    getLocalizedPostBySlug(locale, slug),
    getSiteConfig(),
    getPrimaryAuthor(),
  ]);

  if (!post) {
    notFound();
  }

  const copy = getUiCopy(locale);
  const postPath = `/blog/${post.slug}`;
  const breadcrumbs = [
    { name: site.name, url: localizePath(locale, "/") },
    { name: copy.latestWriting, url: localizePath(locale, "/blog") },
    { name: post.title, url: localizePath(locale, postPath) },
  ];

  return (
    <>
      <JsonLdScript
        payload={serializeJsonLd([
          buildArticleJsonLd({
            post,
            locale,
            author,
            pathname: localizePath(locale, postPath),
          }),
          buildBreadcrumbJsonLd(breadcrumbs),
        ])}
      />

      <Hero
        eyebrow={copy.blogIndexEyebrow}
        title={post.title}
        summary={post.summary}
        actions={[
          { label: copy.backToBlog, href: localizePath(locale, "/blog"), variant: "secondary" },
        ]}
        facts={[
          { label: copy.publishedOn, value: formatDate(post.publishedAt, locale) },
          { label: copy.updatedOn, value: formatDate(post.updatedAt, locale) },
          { label: copy.labelReadTime, value: `${post.readingMinutes} min` },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </Hero>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          {locale !== post.locale ? (
            <LocaleFallbackNotice locale={locale}>{copy.articleFallback}</LocaleFallbackNotice>
          ) : null}
          <RichContent source={post.body} />
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={localizePath(locale, "/blog")}
              className="text-foreground text-sm font-medium underline-offset-4 hover:underline"
            >
              {copy.backToBlog}
            </Link>
          </div>
        </Container>
      </section>

      <ContactPanel
        locale={locale}
        title={copy.connectTitle}
        summary={copy.connectSummary}
        email={site.email}
        github={site.github}
        linkedin={site.linkedin}
        resumeHref={localizePath(locale, site.resumeUrl)}
        availability={author.availability}
        location={author.location}
      />
    </>
  );
}
