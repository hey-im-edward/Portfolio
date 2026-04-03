import { notFound } from "next/navigation";
import { ContactForm } from "@/app/_components/contact-form";
import { JsonLdScript } from "@/app/_components/json-ld-script";
import { getUiCopy } from "@/app/_lib/copy";
import { buildPageMetadata } from "@/app/_views/metadata";
import { RichContent } from "@/app/_views/shared";
import { ContactPanel } from "@/components/marketing/contact-panel";
import { Hero } from "@/components/marketing/hero";
import { Container } from "@/components/layout/container";
import { getPageBySlug, getPrimaryAuthor, getSiteConfig } from "@/lib/content/loaders";
import { buildPersonJsonLd, serializeJsonLd } from "@/lib/json-ld";
import { localizePath, type Locale } from "@/lib/i18n";
import { normalizeContactValue } from "@/lib/utils";

export async function getContactMetadata(locale: Locale) {
  const page = await getPageBySlug(locale, "/contact");

  if (!page) {
    notFound();
  }

  return buildPageMetadata(page, locale, "/contact");
}

export async function ContactView({ locale }: { locale: Locale }) {
  const [page, site, author] = await Promise.all([
    getPageBySlug(locale, "/contact"),
    getSiteConfig(),
    getPrimaryAuthor(),
  ]);

  if (!page) {
    notFound();
  }

  const copy = getUiCopy(locale);
  const email = normalizeContactValue(site.email);
  const github = normalizeContactValue(site.github);
  const linkedin = normalizeContactValue(site.linkedin);
  const actions = [
    ...(github
      ? [{ label: "GitHub", href: github, external: true, variant: "secondary" as const }]
      : []),
    ...(linkedin
      ? [{ label: "LinkedIn", href: linkedin, external: true, variant: "secondary" as const }]
      : []),
  ];

  return (
    <>
      <JsonLdScript payload={serializeJsonLd(buildPersonJsonLd(site, author))} />

      <Hero
        eyebrow={copy.contactEyebrow}
        title={page.title}
        summary={page.summary}
        actions={actions}
        facts={[
          ...(email ? [{ label: copy.labelEmail, value: email }] : []),
          { label: copy.labelLocation, value: author.location },
          { label: copy.labelRole, value: author.role },
        ]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <RichContent source={page.body} />
        </Container>
      </section>

      <ContactPanel
        locale={locale}
        title={copy.contactFormTitle}
        summary={copy.contactFormSummary}
        email={email}
        github={github}
        linkedin={linkedin}
        resumeHref={localizePath(locale, site.resumeUrl)}
        availability={author.availability}
        location={author.location}
      >
        <ContactForm locale={locale} />
      </ContactPanel>
    </>
  );
}
