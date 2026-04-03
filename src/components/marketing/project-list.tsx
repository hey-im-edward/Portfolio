import Image from "next/image";
import Link from "next/link";

import type { ProjectDocument } from "@/lib/content/loaders";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { localizePath, type Locale } from "@/lib/i18n";
import { getLocalizedProjectStatus } from "@/lib/localized-content";

type ProjectListProps = {
  projects: ProjectDocument[];
  locale: Locale;
  className?: string;
};

function ProjectList({ projects, locale, className }: ProjectListProps) {
  const copy =
    locale === "vi"
      ? {
          featured: "Nổi bật",
          draft: "Bản nháp",
          role: "Vai trò",
          period: "Thời gian",
          team: "Nhóm",
          stack: "Stack",
          outcomes: "Kết quả",
          caseStudy: "Xem case study",
          liveDemo: "Bản chạy thử",
          source: "Mã nguồn",
        }
      : {
          featured: "Featured",
          draft: "Draft",
          role: "Role",
          period: "Period",
          team: "Team",
          stack: "Stack",
          outcomes: "Outcomes",
          caseStudy: "View case study",
          liveDemo: "Live demo",
          source: "Source",
        };

  return (
    <div className={cn("grid gap-6", className)}>
      {projects.map((project) => (
        <Card key={project.slug} className="overflow-hidden">
          <div className="bg-muted relative aspect-[16/9] overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 64rem, 100vw"
            />
          </div>

          <CardHeader className="gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {project.featured ? <Badge variant="secondary">{copy.featured}</Badge> : null}
              <Badge variant="outline">{getLocalizedProjectStatus(project.status, locale)}</Badge>
              {project.draft ? <Badge variant="destructive">{copy.draft}</Badge> : null}
            </div>

            <Link
              href={localizePath(locale, `/projects/${project.slug}`)}
              className="group inline-flex w-fit"
            >
              <h3 className="font-heading text-foreground group-hover:text-foreground/80 text-2xl font-semibold tracking-tight text-pretty transition-colors">
                {project.title}
              </h3>
            </Link>

            <CardDescription className="text-muted-foreground max-w-3xl text-base leading-7">
              {project.summary}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-5">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <div>
                <p className="text-muted-foreground text-xs font-medium tracking-[0.22em] uppercase">
                  {copy.role}
                </p>
                <p className="text-foreground mt-1 text-sm leading-6">{project.role}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium tracking-[0.22em] uppercase">
                  {copy.period}
                </p>
                <p className="text-foreground mt-1 text-sm leading-6">{project.period}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium tracking-[0.22em] uppercase">
                  {copy.team}
                </p>
                <p className="text-foreground mt-1 text-sm leading-6">{project.teamSize}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-medium tracking-[0.22em] uppercase">
                  {copy.stack}
                </p>
                <p className="text-foreground mt-1 text-sm leading-6">
                  {project.stack.join(" · ")}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-muted-foreground text-xs font-medium tracking-[0.22em] uppercase">
                {copy.outcomes}
              </p>
              <ul className="text-foreground grid gap-2 text-sm leading-6 sm:grid-cols-2">
                {project.results.slice(0, 4).map((result) => (
                  <li key={result} className="flex gap-2">
                    <span
                      className="bg-foreground/60 mt-2 size-1.5 rounded-full"
                      aria-hidden="true"
                    />
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.tags.length ? (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}
          </CardContent>

          <CardFooter className="flex flex-wrap items-center gap-3">
            <Link
              href={localizePath(locale, `/projects/${project.slug}`)}
              className="border-foreground bg-foreground text-background hover:bg-foreground/90 inline-flex h-8 items-center justify-center rounded-full border px-3 text-sm font-medium transition-colors"
            >
              {copy.caseStudy}
            </Link>

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="border-border text-foreground hover:border-foreground/30 hover:bg-muted inline-flex h-8 items-center justify-center rounded-full border px-3 text-sm font-medium transition-colors"
              >
                {copy.liveDemo}
              </a>
            ) : null}

            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="border-border text-foreground hover:border-foreground/30 hover:bg-muted inline-flex h-8 items-center justify-center rounded-full border px-3 text-sm font-medium transition-colors"
              >
                {copy.source}
              </a>
            ) : null}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export { ProjectList };
