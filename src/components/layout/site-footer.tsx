import Link from "next/link";

import { Container } from "@/components/layout/container";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Separator } from "@/components/ui/separator";
import { cn, normalizeContactValue } from "@/lib/utils";
import { getFooterNavigation, isActivePath } from "@/config/navigation";
import { localizePath, type Locale } from "@/lib/i18n";

type SiteFooterProps = {
  brandName: string;
  headline?: string;
  email?: string;
  github?: string;
  linkedin?: string;
  locale: Locale;
  pathname?: string;
  className?: string;
};

function footerLinkClass(active: boolean) {
  return cn(
    "text-sm transition-colors",
    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
  );
}

function SiteFooter({
  brandName,
  headline,
  email,
  github,
  linkedin,
  locale,
  pathname,
  className,
}: SiteFooterProps) {
  const resolvedEmail = normalizeContactValue(email);
  const resolvedGithub = normalizeContactValue(github);
  const resolvedLinkedin = normalizeContactValue(linkedin);
  const navigation = getFooterNavigation(locale);
  const year = new Date().getFullYear();
  const copy =
    locale === "vi"
      ? {
          navigation: "Điều hướng",
          localeLabel: "Ngôn ngữ",
          note: "Được xây dựng để recruiter review nhanh và bảo trì dài hạn.",
        }
      : {
          navigation: "Navigation",
          localeLabel: "Locale",
          note: "Built for recruiter-first review and long-term maintenance.",
        };

  return (
    <footer className={cn("border-border/70 bg-background border-t", className)}>
      <Container className="py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-4">
            <Link
              href={localizePath(locale, "/")}
              className="font-heading text-lg font-semibold tracking-tight"
            >
              {brandName}
            </Link>
            {headline ? (
              <p className="text-muted-foreground max-w-xl text-sm leading-6 text-pretty">
                {headline}
              </p>
            ) : null}
            <div className="text-muted-foreground flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {resolvedEmail ? (
                <a
                  className="hover:text-foreground transition-colors"
                  href={`mailto:${resolvedEmail}`}
                >
                  {resolvedEmail}
                </a>
              ) : null}
              {resolvedGithub ? (
                <a
                  className="hover:text-foreground transition-colors"
                  href={resolvedGithub}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              ) : null}
              {resolvedLinkedin ? (
                <a
                  className="hover:text-foreground transition-colors"
                  href={resolvedLinkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              ) : null}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
                {copy.navigation}
              </p>
              <nav aria-label="Footer navigation" className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={footerLinkClass(isActivePath(pathname, item.href))}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
                {copy.localeLabel}
              </p>
              <LanguageSwitcher
                locale={locale}
                pathname={pathname ?? localizePath(locale, "/")}
                className="flex-wrap"
              />
              <Separator className="my-1" />
              <p className="text-muted-foreground text-sm leading-6">
                © {year} {brandName}. {copy.note}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { SiteFooter };
