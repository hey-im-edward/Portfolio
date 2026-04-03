import { getPosts } from "@/lib/content/loaders";
import { getSiteConfig } from "@/lib/content/loaders";
import { defaultLocale } from "@/lib/i18n";
import { escapeXml, resolveSiteUrl } from "../api/_lib";

export const runtime = "nodejs";

type FeedItem = {
  title: string;
  description: string;
  link: string;
  guid: string;
  pubDate: string;
};

async function safeLoad<T>(loader: () => Promise<T>, fallback: T) {
  try {
    return await loader();
  } catch {
    return fallback;
  }
}

function buildRss(items: FeedItem[], siteName: string, siteDescription: string) {
  const channelLink = resolveSiteUrl("/").toString();
  const lastBuildDate = new Date().toUTCString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteName)}</title>
    <description>${escapeXml(siteDescription)}</description>
    <link>${escapeXml(channelLink)}</link>
    <language>en-US</language>
    <lastBuildDate>${escapeXml(lastBuildDate)}</lastBuildDate>
    <atom:link href="${escapeXml(resolveSiteUrl("/feed.xml").toString())}" rel="self" type="application/rss+xml" />
${items
  .map(
    (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <description>${escapeXml(item.description)}</description>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="true">${escapeXml(item.guid)}</guid>
      <pubDate>${escapeXml(item.pubDate)}</pubDate>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>`;
}

export async function GET() {
  const [site, posts] = await Promise.all([
    safeLoad(() => getSiteConfig(), {
      name: "Portfolio",
      headline: "Senior / Lead Developer portfolio",
      domain: resolveSiteUrl("/").origin,
      location: "",
      email: "",
      github: "",
      linkedin: "",
      resumeUrl: "",
      defaultLocale,
      alternateLocales: ["vi"],
    }),
    safeLoad(() => getPosts(defaultLocale), []),
  ]);

  const items: FeedItem[] = posts.slice(0, 20).map((post) => ({
    title: post.title,
    description: post.summary,
    link: resolveSiteUrl(`/blog/${post.slug}`).toString(),
    guid: resolveSiteUrl(`/blog/${post.slug}`).toString(),
    pubDate: post.publishedAt.toUTCString(),
  }));

  const xml = buildRss(items, site.name, site.headline);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600",
    },
  });
}
