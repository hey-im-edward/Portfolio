import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type ProofItem = {
  label: string;
  value: ReactNode;
  note?: ReactNode;
};

type ProofStripProps = {
  items: ProofItem[];
  className?: string;
};

function ProofStrip({ items, className }: ProofStripProps) {
  return (
    <section className={cn("border-border/70 bg-muted/20 border-y", className)}>
      <Container className="py-5 sm:py-6">
        <div className="grid gap-5 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
          {items.map((item, index) => (
            <div key={item.label} className="flex min-w-0 flex-col gap-2">
              <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
                {item.label}
              </p>
              <div className="text-foreground text-sm leading-6">{item.value}</div>
              {item.note ? (
                <p className="text-muted-foreground text-sm leading-6">{item.note}</p>
              ) : null}
              {index < items.length - 1 ? <Separator className="mt-1 lg:hidden" /> : null}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export { ProofStrip };
