import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLdScript } from "@/app/_components/json-ld-script";
import { getUiCopy } from "@/app/_lib/copy";
import { buildPageMetadata } from "@/app/_views/metadata";
import { RichContent } from "@/app/_views/shared";
import { ContactPanel } from "@/components/marketing/contact-panel";
import { Hero } from "@/components/marketing/hero";
import { ProjectList } from "@/components/marketing/project-list";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  getFeaturedProjects,
  getPageBySlug,
  getPrimaryAuthor,
  getSiteConfig,
} from "@/lib/content/loaders";
import { buildPersonJsonLd, serializeJsonLd } from "@/lib/json-ld";
import { localizePath, type Locale } from "@/lib/i18n";

export async function getAboutMetadata(locale: Locale) {
  const page = await getPageBySlug(locale, "/about");

  if (!page) {
    notFound();
  }

  return buildPageMetadata(page, locale, "/about");
}

export async function AboutView({ locale }: { locale: Locale }) {
  const [page, site, author, featuredProjects] = await Promise.all([
    getPageBySlug(locale, "/about"),
    getSiteConfig(),
    getPrimaryAuthor(),
    getFeaturedProjects(locale),
  ]);

  if (!page) {
    notFound();
  }

  const copy = getUiCopy(locale);
  const resumeHref = localizePath(locale, site.resumeUrl);

  return (
    <>
      <JsonLdScript payload={serializeJsonLd(buildPersonJsonLd(site, author))} />

      <Hero
        eyebrow={copy.aboutEyebrow}
        title={page.title}
        summary={page.summary}
        actions={[
          { label: copy.ctaProjects, href: localizePath(locale, "/projects"), variant: "primary" },
          { label: copy.ctaContact, href: localizePath(locale, "/contact"), variant: "secondary" },
        ]}
        facts={[
          { label: copy.labelRole, value: author.role },
          { label: copy.labelLocation, value: author.location },
          { label: copy.proofFocus, value: author.focusAreas.join(" · ") },
        ]}
      >
        <div className="flex flex-col gap-4">
          <p className="font-heading text-foreground text-2xl leading-tight font-semibold tracking-tight">
            {author.headline}
          </p>
          <p className="text-muted-foreground text-base leading-7">{author.bio}</p>
        </div>
      </Hero>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <RichContent source={page.body} />
          <div className="surface-outline rounded-3xl p-6">
            <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
              {copy.proofFocus}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {author.focusAreas.map((item) => (
                <span
                  key={item}
                  className="border-border bg-background text-foreground inline-flex rounded-full border px-3 py-1.5 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground mt-5 text-sm leading-6">
              {locale === "vi"
                ? "Tôi ưu tiên các hệ thống rõ contract, dễ review và đủ bền để team tiếp tục mở rộng."
                : "I optimize for systems with explicit contracts, reviewable decisions, and enough structure for teams to extend later."}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={copy.selectedProjects}
            title={copy.selectedProjects}
            summary={
              locale === "vi"
                ? "Ba project này thể hiện rõ nhất cách tôi cân bằng giữa kỹ thuật, nội dung và product clarity."
                : "These projects show how I balance engineering, content structure, and product clarity."
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
          <ProjectList projects={featuredProjects.slice(0, 3)} locale={locale} />
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
