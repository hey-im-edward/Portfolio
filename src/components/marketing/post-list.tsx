import Image from "next/image";
import Link from "next/link";

import type { PostDocument } from "@/lib/content/loaders";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { localizePath, type Locale } from "@/lib/i18n";
import { getReadingTimeLabel } from "@/lib/localized-content";

type PostListProps = {
  posts: PostDocument[];
  locale: Locale;
  className?: string;
};

function formatDate(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function PostList({ posts, locale, className }: PostListProps) {
  const copy =
    locale === "vi"
      ? {
          draft: "Bản nháp",
          readArticle: "Đọc bài viết",
        }
      : {
          draft: "Draft",
          readArticle: "Read article",
        };

  return (
    <div className={cn("grid gap-5", className)}>
      {posts.map((post) => (
        <Card key={post.slug} className="overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-muted relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 32rem, 100vw"
              />
            </div>

            <div>
              <CardHeader className="gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{formatDate(post.publishedAt, locale)}</Badge>
                  <Badge variant="outline">
                    {getReadingTimeLabel(post.readingMinutes, locale)}
                  </Badge>
                  {post.draft ? <Badge variant="destructive">{copy.draft}</Badge> : null}
                </div>

                <Link
                  href={localizePath(locale, `/blog/${post.slug}`)}
                  className="group inline-flex w-fit"
                >
                  <h3 className="font-heading text-foreground group-hover:text-foreground/80 text-2xl font-semibold tracking-tight text-pretty transition-colors">
                    {post.title}
                  </h3>
                </Link>

                <CardDescription className="text-muted-foreground max-w-2xl text-base leading-7">
                  {post.summary}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col gap-4 pb-5">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Link
                  href={localizePath(locale, `/blog/${post.slug}`)}
                  className="text-foreground inline-flex w-fit text-sm font-medium underline-offset-4 transition-colors hover:underline"
                >
                  {copy.readArticle}
                </Link>
              </CardContent>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export { PostList };
