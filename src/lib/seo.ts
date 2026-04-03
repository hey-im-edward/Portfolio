import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/content/loaders";
import { getPublicEnv } from "@/lib/env";
import { defaultLocale, localizePath, type Locale } from "@/lib/i18n";
import { isPlaceholderValue } from "@/lib/utils";

const FALLBACK_SITE_URL = "https://replace-with-your-domain.com";

function normalizeUrl(value?: string) {
  if (!value) {
    return undefined;
  }

  return value.startsWith("http") ? value : `https://${value}`;
}

export function getResolvedSiteBaseUrl(explicitSiteUrl?: string) {
  const env = getPublicEnv();
  const candidates = [
    env.NEXT_PUBLIC_SITE_URL,
    normalizeUrl(env.VERCEL_PROJECT_PRODUCTION_URL),
    normalizeUrl(env.VERCEL_URL),
    explicitSiteUrl && !isPlaceholderValue(explicitSiteUrl) ? explicitSiteUrl : undefined,
    FALLBACK_SITE_URL,
  ];

  return candidates.find(Boolean) ?? FALLBACK_SITE_URL;
}

export function absoluteUrl(pathname = "/") {
  const base = getResolvedSiteBaseUrl();
  return new URL(pathname, base);
}

type MetadataOptions = {
  title: string;
  description: string;
  locale: Locale;
  pathname: string;
  image?: string;
  type?: "website" | "article";
};

export async function buildMetadata({
  title,
  description,
  locale,
  pathname,
  image,
  type = "website",
}: MetadataOptions): Promise<Metadata> {
  const site = await getSiteConfig();
  const canonicalPath = localizePath(locale, pathname);
  const resolvedImage = image ? absoluteUrl(image).toString() : absoluteUrl("/api/og").toString();
  const resolvedBaseUrl = getResolvedSiteBaseUrl(site.domain);

  return {
    metadataBase: new URL(resolvedBaseUrl),
    title,
    description,
    alternates: {
      canonical: canonicalPath,
      languages: {
        "en-US": localizePath(defaultLocale, pathname),
        "vi-VN": localizePath("vi", pathname),
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(canonicalPath).toString(),
      siteName: site.name,
      type,
      locale: locale === "vi" ? "vi_VN" : "en_US",
      images: [
        {
          url: resolvedImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage],
    },
  };
}
