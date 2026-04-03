import { notFound } from "next/navigation";
import { JsonLdScript } from "@/app/_components/json-ld-script";
import { TagFilterNav } from "@/app/_components/tag-filter-nav";
import { getUiCopy } from "@/app/_lib/copy";
import { buildPageMetadata } from "@/app/_views/metadata";
import { RichContent } from "@/app/_views/shared";
import { ContactPanel } from "@/components/marketing/contact-panel";
import { Hero } from "@/components/marketing/hero";
import { PostList } from "@/components/marketing/post-list";
import { Container } from "@/components/layout/container";
import {
  getLocalizedPosts,
  getPageBySlug,
  getPrimaryAuthor,
  getSiteConfig,
} from "@/lib/content/loaders";
import { buildWebsiteJsonLd, serializeJsonLd } from "@/lib/json-ld";
import { localizePath, type Locale } from "@/lib/i18n";

export async function getBlogMetadata(locale: Locale) {
  const page = await getPageBySlug(locale, "/blog");

  if (!page) {
    notFound();
  }

  return buildPageMetadata(page, locale, "/blog");
}

export async function BlogView({ locale, activeTag }: { locale: Locale; activeTag?: string }) {
  const [page, posts, site, author] = await Promise.all([
    getPageBySlug(locale, "/blog"),
    getLocalizedPosts(locale),
    getSiteConfig(),
    getPrimaryAuthor(),
  ]);

  if (!page) {
    notFound();
  }

  const copy = getUiCopy(locale);
  const tags = [...new Set(posts.flatMap((post) => post.tags))].sort((left, right) =>
    left.localeCompare(right),
  );
  const filteredPosts = activeTag ? posts.filter((post) => post.tags.includes(activeTag)) : posts;
  const basePath = localizePath(locale, "/blog");

  return (
    <>
      <JsonLdScript payload={serializeJsonLd(buildWebsiteJsonLd(site))} />

      <Hero
        eyebrow={copy.blogIndexEyebrow}
        title={page.title}
        summary={page.summary}
        actions={[
          { label: copy.ctaProjects, href: localizePath(locale, "/projects"), variant: "primary" },
          { label: copy.ctaContact, href: localizePath(locale, "/contact"), variant: "secondary" },
        ]}
        facts={[
          { label: copy.proofWriting, value: `${posts.length} ${copy.labelPublishedEntriesCount}` },
          { label: copy.proofFocus, value: author.focusAreas.join(" · ") },
          { label: copy.filterLabel, value: activeTag ?? copy.filterAll },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <RichContent source={page.body} />
          <TagFilterNav
            label={copy.filterLabel}
            allLabel={copy.filterAll}
            basePath={basePath}
            tags={tags}
            activeTag={activeTag}
          />
          {filteredPosts.length ? (
            <PostList posts={filteredPosts} locale={locale} />
          ) : (
            <div className="surface-outline rounded-3xl p-6">
              <p className="text-muted-foreground text-base leading-7">{copy.noMatches}</p>
            </div>
          )}
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
