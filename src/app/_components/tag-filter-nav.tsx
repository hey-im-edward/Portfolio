import Link from "next/link";
import { cn } from "@/lib/utils";

type TagFilterNavProps = {
  label: string;
  allLabel: string;
  basePath: string;
  tags: string[];
  activeTag?: string;
};

function pillClass(active: boolean) {
  return cn(
    "inline-flex h-8 items-center justify-center rounded-full border px-3 text-sm transition-colors",
    active
      ? "border-foreground bg-foreground text-background"
      : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground",
  );
}

function TagFilterNav({ label, allLabel, basePath, tags, activeTag }: TagFilterNavProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        <Link href={basePath} className={pillClass(!activeTag)}>
          {allLabel}
        </Link>
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`${basePath}?tag=${encodeURIComponent(tag)}`}
            className={pillClass(activeTag === tag)}
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}

export { TagFilterNav };
