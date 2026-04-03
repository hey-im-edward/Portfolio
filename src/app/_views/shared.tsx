import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { renderMdx } from "@/lib/mdx";

type RichContentProps = {
  source: string;
  className?: string;
};

async function RichContent({ source, className }: RichContentProps) {
  const content = await renderMdx(source);

  return <div className={["prose-editorial", className].filter(Boolean).join(" ")}>{content}</div>;
}

function LocaleFallbackNotice({ children }: { children: ReactNode }) {
  return (
    <div className="surface-outline rounded-3xl p-5">
      <Badge variant="secondary">EN fallback</Badge>
      <p className="text-muted-foreground mt-3 text-sm leading-6">{children}</p>
    </div>
  );
}

export { LocaleFallbackNotice, RichContent };
