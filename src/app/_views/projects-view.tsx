import { notFound } from "next/navigation";
import { JsonLdScript } from "@/app/_components/json-ld-script";
import { TagFilterNav } from "@/app/_components/tag-filter-nav";
import { getUiCopy } from "@/app/_lib/copy";
import { buildPageMetadata } from "@/app/_views/metadata";
import { RichContent } from "@/app/_views/shared";
import { ContactPanel } from "@/components/marketing/contact-panel";
import { Hero } from "@/components/marketing/hero";
import { ProjectList } from "@/components/marketing/project-list";
import { Container } from "@/components/layout/container";
import {
  getLocalizedProjects,
  getPageBySlug,
  getPrimaryAuthor,
  getSiteConfig,
} from "@/lib/content/loaders";
import { buildWebsiteJsonLd, serializeJsonLd } from "@/lib/json-ld";
import { localizePath, type Locale } from "@/lib/i18n";
import { getLocalizedAuthorProfile } from "@/lib/localized-content";

export async function getProjectsMetadata(locale: Locale) {
  const page = await getPageBySlug(locale, "/projects");

  if (!page) {
    notFound();
  }

  return buildPageMetadata(page, locale, "/projects");
}

export async function ProjectsView({ locale, activeTag }: { locale: Locale; activeTag?: string }) {
  const [page, projects, site, author] = await Promise.all([
    getPageBySlug(locale, "/projects"),
    getLocalizedProjects(locale),
    getSiteConfig(),
    getPrimaryAuthor(),
  ]);

  if (!page) {
    notFound();
  }

  const copy = getUiCopy(locale);
  const profile = getLocalizedAuthorProfile(author, locale);
  const tags = [...new Set(projects.flatMap((project) => project.tags))].sort((left, right) =>
    left.localeCompare(right),
  );
  const filteredProjects = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag))
    : projects;
  const basePath = localizePath(locale, "/projects");

  return (
    <>
      <JsonLdScript payload={serializeJsonLd(buildWebsiteJsonLd(site))} />

      <Hero
        eyebrow={copy.projectIndexEyebrow}
        title={page.title}
        summary={page.summary}
        actions={[
          { label: copy.ctaContact, href: localizePath(locale, "/contact"), variant: "primary" },
          {
            label: copy.ctaResume,
            href: localizePath(locale, site.resumeUrl),
            variant: "secondary",
          },
        ]}
        facts={[
          {
            label: copy.proofProjects,
            value: `${projects.length} ${copy.labelFeaturedProjectsCount}`,
          },
          { label: copy.proofFocus, value: profile.focusAreas.join(" · ") },
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
          {filteredProjects.length ? (
            <ProjectList projects={filteredProjects} locale={locale} />
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
        availability={profile.availability}
        location={profile.location}
      />
    </>
  );
}
