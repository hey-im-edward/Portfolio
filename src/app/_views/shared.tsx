import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import type { Locale } from "@/lib/i18n";
import { getFallbackBadgeLabel } from "@/lib/localized-content";
import { renderMdx } from "@/lib/mdx";

type RichContentProps = {
  source: string;
  className?: string;
};

async function RichContent({ source, className }: RichContentProps) {
  const content = await renderMdx(source);

  return <div className={["prose-editorial", className].filter(Boolean).join(" ")}>{content}</div>;
}

function LocaleFallbackNotice({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <div className="surface-outline rounded-3xl p-5">
      <Badge variant="secondary">{getFallbackBadgeLabel(locale)}</Badge>
      <p className="text-muted-foreground mt-3 text-sm leading-6">{children}</p>
    </div>
  );
}

export { LocaleFallbackNotice, RichContent };
