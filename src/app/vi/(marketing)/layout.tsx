import type { ReactNode } from "react";
import { SiteFrame } from "@/app/_components/site-frame";
import { getSiteConfig } from "@/lib/content/loaders";

export default async function VietnameseMarketingLayout({ children }: { children: ReactNode }) {
  const site = await getSiteConfig();

  return (
    <SiteFrame locale="vi" site={site}>
      {children}
    </SiteFrame>
  );
}
