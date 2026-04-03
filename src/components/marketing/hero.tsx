import Link from "next/link";
import type { ReactNode } from "react";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type HeroAction = {
  label: string;
  href: string;
  external?: boolean;
  variant?: "primary" | "secondary";
};

type HeroFact = {
  label: string;
  value: string;
};

type HeroProps = {
  eyebrow?: string;
  title: ReactNode;
  summary: ReactNode;
  actions?: HeroAction[];
  facts?: HeroFact[];
  children?: ReactNode;
  className?: string;
};

function actionClassName(variant: HeroAction["variant"] = "primary") {
  return cn(
    "inline-flex h-9 items-center justify-center rounded-full border px-4 text-sm font-medium transition-colors",
    variant === "primary"
      ? "border-foreground bg-foreground text-background hover:bg-foreground/90"
      : "border-border bg-background text-foreground hover:border-foreground/30 hover:bg-muted",
  );
}

function Hero({
  eyebrow,
  title,
  summary,
  actions = [],
  facts = [],
  children,
  className,
}: HeroProps) {
  const hasAside = Boolean(children);

  return (
    <section className={cn("relative overflow-hidden", className)}>
      <Container className="py-16 sm:py-20 lg:py-24">
        <div
          className={cn(
            "grid items-start gap-10",
            hasAside ? "lg:grid-cols-[1.15fr_0.85fr]" : "max-w-4xl",
          )}
        >
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              {eyebrow ? (
                <p className="text-muted-foreground text-xs font-medium tracking-[0.28em] uppercase">
                  {eyebrow}
                </p>
              ) : null}
              <h1 className="font-heading text-foreground text-4xl leading-[0.95] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground max-w-2xl text-base leading-7 text-pretty sm:text-lg">
                {summary}
              </p>
            </div>

            {actions.length ? (
              <div className="flex flex-wrap gap-3">
                {actions.map((action) => (
                  <Link
                    key={`${action.label}-${action.href}`}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noreferrer" : undefined}
                    className={actionClassName(action.variant)}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            ) : null}

            {facts.length ? (
              <dl className="grid gap-4 pt-2 sm:grid-cols-2 lg:grid-cols-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="border-border/70 border-t pt-4">
                    <dt className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
                      {fact.label}
                    </dt>
                    <dd className="text-foreground mt-1 text-sm leading-6">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          {hasAside ? (
            <div className="border-border/80 bg-card rounded-3xl border p-6 shadow-sm">
              {children}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export { Hero };
