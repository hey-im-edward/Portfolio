"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import type { SiteSettings } from "@/lib/content/schemas";
import type { Locale } from "@/lib/i18n";
import { getLocalizedSiteHeadline } from "@/lib/localized-content";

type SiteFrameProps = {
  locale: Locale;
  site: SiteSettings;
  children: ReactNode;
};

function SiteFrame({ locale, site, children }: SiteFrameProps) {
  const pathname = usePathname() ?? undefined;

  return (
    <div className="min-h-screen">
      <SiteHeader brandName={site.name} locale={locale} pathname={pathname} />
      <main>{children}</main>
      <SiteFooter
        brandName={site.name}
        headline={getLocalizedSiteHeadline(site.headline, locale)}
        email={site.email}
        github={site.github}
        linkedin={site.linkedin}
        locale={locale}
        pathname={pathname}
      />
    </div>
  );
}

export { SiteFrame };
