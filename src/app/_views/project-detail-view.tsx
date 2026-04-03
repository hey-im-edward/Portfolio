import { notFound } from "next/navigation";
import { JsonLdScript } from "@/app/_components/json-ld-script";
import { getUiCopy } from "@/app/_lib/copy";
import { buildProjectMetadata } from "@/app/_views/metadata";
import { LocaleFallbackNotice, RichContent } from "@/app/_views/shared";
import { ContactPanel } from "@/components/marketing/contact-panel";
import { Hero } from "@/components/marketing/hero";
import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { getLocalizedProjectBySlug, getPrimaryAuthor, getSiteConfig } from "@/lib/content/loaders";
import { buildBreadcrumbJsonLd, buildProjectJsonLd, serializeJsonLd } from "@/lib/json-ld";
import { localizePath, type Locale } from "@/lib/i18n";

export async function getProjectDetailMetadata(locale: Locale, slug: string) {
  const project = await getLocalizedProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  return buildProjectMetadata(project, locale, `/projects/${slug}`);
}

export async function ProjectDetailView({ locale, slug }: { locale: Locale; slug: string }) {
  const [project, site, author] = await Promise.all([
    getLocalizedProjectBySlug(locale, slug),
    getSiteConfig(),
    getPrimaryAuthor(),
  ]);

  if (!project) {
    notFound();
  }

  const copy = getUiCopy(locale);
  const projectPath = `/projects/${project.slug}`;
  const breadcrumbs = [
    { name: site.name, url: localizePath(locale, "/") },
    { name: copy.selectedProjects, url: localizePath(locale, "/projects") },
    { name: project.title, url: localizePath(locale, projectPath) },
  ];

  return (
    <>
      <JsonLdScript
        payload={serializeJsonLd([
          buildProjectJsonLd({
            project,
            locale,
            pathname: localizePath(locale, projectPath),
          }),
          buildBreadcrumbJsonLd(breadcrumbs),
        ])}
      />

      <Hero
        eyebrow={project.role}
        title={project.title}
        summary={project.summary}
        actions={[
          ...(project.demoUrl
            ? [
                {
                  label: copy.labelLiveDemo,
                  href: project.demoUrl,
                  external: true,
                  variant: "primary" as const,
                },
              ]
            : []),
          ...(project.repoUrl
            ? [
                {
                  label: copy.labelSource,
                  href: project.repoUrl,
                  external: true,
                  variant: "secondary" as const,
                },
              ]
            : []),
          {
            label: copy.backToProjects,
            href: localizePath(locale, "/projects"),
            variant: "secondary",
          },
        ]}
        facts={[
          { label: copy.labelPeriod, value: project.period },
          { label: copy.labelTeam, value: project.teamSize },
          { label: copy.stack, value: project.stack.join(" · ") },
        ]}
      >
        <div className="flex flex-col gap-4">
          <Badge variant="secondary">{project.status}</Badge>
          <p className="text-muted-foreground text-base leading-7">
            {locale !== project.locale ? copy.projectFallback : author.headline}
          </p>
        </div>
      </Hero>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-8">
            {locale !== project.locale ? (
              <LocaleFallbackNotice locale={locale}>{copy.projectFallback}</LocaleFallbackNotice>
            ) : null}
            <div className="surface-outline rounded-3xl p-6">
              <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
                {copy.results}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {project.results.map((result) => (
                  <li key={result} className="flex gap-3 text-sm leading-6">
                    <span
                      className="bg-foreground/60 mt-2 size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <RichContent source={project.body} />
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
