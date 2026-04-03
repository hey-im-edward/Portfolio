import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  summary?: ReactNode;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
};

function SectionHeading({
  eyebrow,
  title,
  summary,
  align = "left",
  action,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-2", align === "center" && "items-center")}>
        {eyebrow ? (
          <p className="text-muted-foreground text-xs font-medium tracking-[0.28em] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <div className="max-w-3xl">
          <h2 className="font-heading text-foreground text-3xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-4xl">
            {title}
          </h2>
        </div>
      </div>

      {summary ? (
        <p className="text-muted-foreground max-w-2xl text-base leading-7 text-pretty">{summary}</p>
      ) : null}

      {action ? (
        <div className={cn("pt-1", align === "center" && "flex justify-center")}>{action}</div>
      ) : null}
    </div>
  );
}

export { SectionHeading };
