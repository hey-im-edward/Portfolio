import Link from "next/link";

import { languageOptions } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { swapLocale, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  pathname: string;
  className?: string;
};

function languagePillClass(active: boolean) {
  return cn(
    "inline-flex h-8 items-center justify-center rounded-full border px-3 text-xs font-medium tracking-[0.18em] transition-colors",
    active
      ? "border-foreground bg-foreground text-background"
      : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground",
  );
}

function LanguageSwitcher({ locale, pathname, className }: LanguageSwitcherProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} aria-label="Language switcher">
      {languageOptions.map((option) => {
        const active = option.locale === locale;
        const href = active ? pathname : swapLocale(pathname, option.locale);

        return (
          <Link
            key={option.locale}
            href={href}
            aria-current={active ? "page" : undefined}
            className={languagePillClass(active)}
          >
            {option.label}
          </Link>
        );
      })}
    </div>
  );
}

export { LanguageSwitcher };
