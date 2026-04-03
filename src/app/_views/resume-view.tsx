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
import { getLocalizedAuthorProfile } from "@/lib/localized-content";

export async function getResumeMetadata(locale: Locale) {
  const page = await getPageBySlug(locale, "/resume");

  if (!page) {
    notFound();
  }

  return buildPageMetadata(page, locale, "/resume");
}

export async function ResumeView({ locale }: { locale: Locale }) {
  const [page, site, author, featuredProjects] = await Promise.all([
    getPageBySlug(locale, "/resume"),
    getSiteConfig(),
    getPrimaryAuthor(),
    getFeaturedProjects(locale),
  ]);

  if (!page) {
    notFound();
  }

  const copy = getUiCopy(locale);
  const profile = getLocalizedAuthorProfile(author, locale);
  const contactHref = localizePath(locale, "/contact");

  return (
    <>
      <JsonLdScript payload={serializeJsonLd(buildPersonJsonLd(site, profile))} />

      <Hero
        eyebrow={copy.resumeEyebrow}
        title={page.title}
        summary={page.summary}
        actions={[
          { label: copy.ctaContact, href: contactHref, variant: "primary" },
          {
            label: copy.ctaProjects,
            href: localizePath(locale, "/projects"),
            variant: "secondary",
          },
        ]}
        facts={[
          { label: copy.labelRole, value: profile.role },
          { label: copy.proofFocus, value: profile.focusAreas.join(" · ") },
          { label: copy.labelLocation, value: profile.location },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <RichContent source={page.body} />
          <div className="surface-outline rounded-3xl p-6">
            <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
              {locale === "vi" ? "Tóm tắt" : "Snapshot"}
            </p>
            <p className="font-heading text-foreground mt-4 text-2xl leading-tight font-semibold tracking-tight">
              {profile.headline}
            </p>
            <p className="text-muted-foreground mt-4 text-base leading-7">{profile.bio}</p>
            <div className="mt-6 flex flex-col gap-3">
              {profile.focusAreas.map((item) => (
                <div key={item} className="border-border/70 border-t pt-3 text-sm">
                  {item}
                </div>
              ))}
            </div>
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
                ? "Những project này là phần gần nhất với bản resume ngắn: phạm vi rõ, kết quả cụ thể, dễ review."
                : "These projects are the closest thing to a concise resume section: clear scope, concrete outcomes, and easy review."
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
          <ProjectList projects={featuredProjects.slice(0, 2)} locale={locale} />
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
