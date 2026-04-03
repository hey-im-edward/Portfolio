import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/app/_components/json-ld-script";
import { getUiCopy } from "@/app/_lib/copy";
import { buildPageMetadata } from "@/app/_views/metadata";
import { RichContent } from "@/app/_views/shared";
import { ContactPanel } from "@/components/marketing/contact-panel";
import { Hero } from "@/components/marketing/hero";
import { PostList } from "@/components/marketing/post-list";
import { ProjectList } from "@/components/marketing/project-list";
import { ProofStrip } from "@/components/marketing/proof-strip";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  getPrimaryAuthor,
  getFeaturedProjects,
  getLocalizedPosts,
  getPageBySlug,
  getSiteConfig,
} from "@/lib/content/loaders";
import { buildPersonJsonLd, buildWebsiteJsonLd, serializeJsonLd } from "@/lib/json-ld";
import { localizePath, type Locale } from "@/lib/i18n";
import { formatList } from "@/lib/utils";

export async function getHomeMetadata(locale: Locale) {
  const page = await getPageBySlug(locale, "/");

  if (!page) {
    notFound();
  }

  return buildPageMetadata(page, locale, "/");
}

export async function HomeView({ locale }: { locale: Locale }) {
  const [page, site, author, featuredProjects, posts] = await Promise.all([
    getPageBySlug(locale, "/"),
    getSiteConfig(),
    getPrimaryAuthor(),
    getFeaturedProjects(locale),
    getLocalizedPosts(locale),
  ]);

  if (!page) {
    notFound();
  }

  const copy = getUiCopy(locale);
  const latestPosts = posts.slice(0, 3);
  const resumeHref = localizePath(locale, site.resumeUrl);

  return (
    <>
      <JsonLdScript
        payload={serializeJsonLd([buildWebsiteJsonLd(site), buildPersonJsonLd(site, author)])}
      />

      <Hero
        eyebrow={copy.homeEyebrow}
        title={site.headline}
        summary={page.summary}
        actions={[
          { label: copy.ctaProjects, href: localizePath(locale, "/projects"), variant: "primary" },
          { label: copy.ctaContact, href: localizePath(locale, "/contact"), variant: "secondary" },
          { label: copy.ctaResume, href: resumeHref, variant: "secondary" },
        ]}
        facts={[
          { label: copy.proofFocus, value: formatList(author.focusAreas.slice(0, 3), locale) },
          {
            label: copy.proofLocale,
            value:
              locale === "vi"
                ? "Tiếng Việt với fallback tiếng Anh"
                : "English-first, bilingual-ready",
          },
          {
            label: copy.proofProjects,
            value: `${featuredProjects.length} ${copy.labelFeaturedProjectsCount}`,
          },
        ]}
      >
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
            {copy.homeSupportTitle}
          </p>
          <p className="font-heading text-foreground text-2xl leading-tight font-semibold tracking-tight text-balance">
            {page.title === "Home" ? author.role : page.title}
          </p>
          <p className="text-muted-foreground text-base leading-7">{copy.homeSupportSummary}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {author.focusAreas.map((area) => (
              <span
                key={area}
                className="border-border bg-background text-foreground inline-flex rounded-full border px-3 py-1.5 text-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </Hero>

      <ProofStrip
        items={[
          {
            label: copy.proofProjects,
            value:
              locale === "vi"
                ? `${featuredProjects.length} project và case study nổi bật`
                : `${featuredProjects.length} featured projects and case studies`,
          },
          {
            label: copy.proofWriting,
            value:
              locale === "vi"
                ? `${latestPosts.length} bài viết mới về portfolio systems và engineering communication`
                : `${latestPosts.length} recent articles on portfolio systems and engineering communication`,
          },
          {
            label: copy.proofFocus,
            value: formatList(author.focusAreas, locale),
          },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={copy.whyThisSite}
            title={copy.homeSupportTitle}
            summary={page.summary}
          />
          <RichContent source={page.body} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={copy.selectedProjects}
            title={copy.selectedProjects}
            summary={
              locale === "vi"
                ? "Những case study nên đọc đầu tiên nếu bạn muốn đánh giá cách tôi cấu trúc, triển khai và ship sản phẩm."
                : "Start here if you want to evaluate how I structure, implement, and ship product-facing work."
            }
            action={
              <Link
                href={localizePath(locale, "/projects")}
                className="text-foreground text-sm font-medium underline-offset-4 hover:underline"
              >
                {copy.allProjects}
              </Link>
            }
          />
          <ProjectList projects={featuredProjects} locale={locale} />
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={copy.latestWriting}
            title={copy.latestWriting}
            summary={
              locale === "vi"
                ? "Các bài viết ngắn, thiên về cấu trúc và ra quyết định, để người đọc hiểu cách tôi suy nghĩ."
                : "Short essays on structure, decision-making, and portfolio craft that show how I think."
            }
            action={
              <Link
                href={localizePath(locale, "/blog")}
                className="text-foreground text-sm font-medium underline-offset-4 hover:underline"
              >
                {copy.allWriting}
              </Link>
            }
          />
          <PostList posts={latestPosts} locale={locale} />
        </Container>
      </section>

      <ContactPanel
        locale={locale}
        title={copy.connectTitle}
        summary={copy.connectSummary}
        email={site.email}
        github={site.github}
        linkedin={site.linkedin}
        resumeHref={resumeHref}
        availability={author.availability}
        location={author.location}
      />
    </>
  );
}
