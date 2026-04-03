import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { normalizeContactValue } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";

type ContactPanelProps = {
  locale: Locale;
  title: ReactNode;
  summary: ReactNode;
  email?: string;
  github?: string;
  linkedin?: string;
  resumeHref?: string;
  availability?: string;
  location?: string;
  children?: ReactNode;
  className?: string;
};

function actionClassName() {
  return "inline-flex h-8 items-center justify-center rounded-full border border-foreground bg-foreground px-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90";
}

function secondaryActionClassName() {
  return "inline-flex h-8 items-center justify-center rounded-full border border-border px-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30 hover:bg-muted";
}

function ContactPanel({
  locale,
  title,
  summary,
  email,
  github,
  linkedin,
  resumeHref,
  availability,
  location,
  children,
  className,
}: ContactPanelProps) {
  const resolvedEmail = normalizeContactValue(email);
  const resolvedGithub = normalizeContactValue(github);
  const resolvedLinkedin = normalizeContactValue(linkedin);
  const hasEmail = Boolean(resolvedEmail);

  const copy =
    locale === "vi"
      ? {
          location: "Địa điểm",
          directLinks: "Liên kết trực tiếp",
          emailMe: "Gửi email",
          resume: "CV",
          bestFor: "Phù hợp nhất cho vai trò senior IC, lead, và engineering thiên về sản phẩm.",
          response: "Thời gian phản hồi thường: trong 1-2 ngày làm việc.",
          remote: "Remote / linh hoạt",
        }
      : {
          location: "Location",
          directLinks: "Direct links",
          emailMe: "Email me",
          resume: "Resume",
          bestFor: "Best for senior IC, lead, and product-minded engineering roles.",
          response: "Typical response: within 1-2 business days.",
          remote: "Remote / flexible",
        };

  return (
    <section className={cn("py-6", className)}>
      <Container>
        <Card className="overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <CardHeader className="gap-3">
                {availability ? <Badge variant="secondary">{availability}</Badge> : null}
                <h2 className="font-heading text-foreground text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                  {title}
                </h2>
                <CardDescription className="text-muted-foreground max-w-2xl text-base leading-7">
                  {summary}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  {hasEmail ? (
                    <div className="border-border/80 bg-background rounded-2xl border p-4">
                      <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
                        Email
                      </p>
                      <a
                        className="text-foreground mt-1 block text-sm font-medium underline-offset-4 hover:underline"
                        href={`mailto:${email}`}
                      >
                        {resolvedEmail}
                      </a>
                    </div>
                  ) : null}

                  <div className="border-border/80 bg-background rounded-2xl border p-4">
                    <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
                      {copy.location}
                    </p>
                    <p className="text-foreground mt-1 text-sm">{location ?? copy.remote}</p>
                  </div>
                </div>

                {children ? (
                  <>
                    <Separator />
                    {children}
                  </>
                ) : null}
              </CardContent>
            </div>

            <div className="border-border/80 bg-muted/20 border-t lg:border-t-0 lg:border-l">
              <CardHeader className="gap-3">
                <p className="text-muted-foreground text-xs font-medium tracking-[0.24em] uppercase">
                  {copy.directLinks}
                </p>
              </CardHeader>

              <CardContent className="flex flex-col gap-3">
                {hasEmail ? (
                  <a href={`mailto:${resolvedEmail}`} className={actionClassName()}>
                    {copy.emailMe}
                  </a>
                ) : null}

                {resumeHref ? (
                  <Link href={resumeHref} className={secondaryActionClassName()}>
                    {copy.resume}
                  </Link>
                ) : null}

                {resolvedGithub ? (
                  <a
                    href={resolvedGithub}
                    target="_blank"
                    rel="noreferrer"
                    className={secondaryActionClassName()}
                  >
                    GitHub
                  </a>
                ) : null}

                {resolvedLinkedin ? (
                  <a
                    href={resolvedLinkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={secondaryActionClassName()}
                  >
                    LinkedIn
                  </a>
                ) : null}
              </CardContent>

              <CardFooter className="flex-col items-start gap-2">
                <p className="text-muted-foreground text-sm leading-6">{copy.bestFor}</p>
                <p className="text-muted-foreground text-sm leading-6">{copy.response}</p>
              </CardFooter>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export { ContactPanel };
