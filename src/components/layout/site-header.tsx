import Link from "next/link";

import { getHeaderNavigation, getUtilityNavigation, isActivePath } from "@/config/navigation";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { localizePath, type Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  brandName: string;
  locale: Locale;
  pathname?: string;
  className?: string;
  resumeLabel?: string;
};

function navLinkClass(active: boolean) {
  return cn(
    "inline-flex items-center rounded-full px-3 py-2 text-sm transition-colors",
    active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
  );
}

function actionLinkClass(primary = false) {
  return cn(
    "inline-flex h-8 items-center justify-center rounded-full border px-3 text-sm transition-colors",
    primary
      ? "border-foreground bg-foreground text-background hover:bg-foreground/90"
      : "border-border bg-background text-foreground hover:border-foreground/30 hover:bg-muted",
  );
}

function SiteHeader({ brandName, locale, pathname, className, resumeLabel }: SiteHeaderProps) {
  const navigation = getHeaderNavigation(locale);
  const utilityNavigation = getUtilityNavigation(locale);

  return (
    <header className={cn("border-border/70 bg-background/95 border-b backdrop-blur", className)}>
      <Container className="py-4 sm:py-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={localizePath(locale, "/")}
              className="font-heading text-foreground text-base font-semibold tracking-tight"
            >
              {brandName}
            </Link>

            <LanguageSwitcher
              locale={locale}
              pathname={pathname ?? localizePath(locale, "/")}
              className="lg:hidden"
            />
          </div>

          <nav aria-label="Primary" className="flex flex-wrap items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navLinkClass(isActivePath(pathname, item.href))}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            <LanguageSwitcher
              locale={locale}
              pathname={pathname ?? localizePath(locale, "/")}
              className="hidden lg:flex"
            />
            {utilityNavigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={actionLinkClass(index === utilityNavigation.length - 1)}
              >
                {index === utilityNavigation.length - 1 && resumeLabel ? resumeLabel : item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
}

export { SiteHeader };
