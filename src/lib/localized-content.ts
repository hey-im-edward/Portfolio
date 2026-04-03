import type { Author } from "@/lib/content/schemas";
import type { Locale } from "@/lib/i18n";

const localizedAuthorCopy = {
  vi: {
    role: "Senior / Lead Developer",
    headline: "Kỹ sư thiên về sản phẩm, tập trung vào hiệu năng, độ rõ ràng và khả năng bảo trì.",
    bio: "Tôi xây các sản phẩm cho developer, site editorial và content system với trọng tâm là bằng chứng, cấu trúc và chất lượng bàn giao.",
    location: "Remote / Toàn cầu",
    availability: "Mở cho các vai trò senior IC, lead hoặc collaboration phù hợp.",
    focusAreas: ["Kiến trúc frontend", "Hệ thống nội dung", "Viết kỹ thuật", "Hiệu năng và SEO"],
    siteHeadline: "Senior / Lead Developer xây sản phẩm web nhanh, rõ và dễ bảo trì.",
  },
} as const;

export function getLocalizedAuthorProfile(author: Author, locale: Locale): Author {
  if (locale !== "vi") {
    return author;
  }

  const localized = localizedAuthorCopy.vi;

  return {
    ...author,
    role: localized.role,
    headline: localized.headline,
    bio: localized.bio,
    location: localized.location,
    availability: localized.availability,
    focusAreas: [...localized.focusAreas],
  };
}

export function getLocalizedSiteHeadline(defaultHeadline: string, locale: Locale) {
  return locale === "vi" ? localizedAuthorCopy.vi.siteHeadline : defaultHeadline;
}

export function getLocalizedProjectStatus(status: string, locale: Locale) {
  const normalized = status.trim().toLowerCase();

  if (locale === "vi") {
    if (normalized === "shipped") {
      return "Đã phát hành";
    }

    if (normalized === "draft") {
      return "Bản nháp";
    }
  }

  if (locale === "en" && normalized === "draft") {
    return "Draft";
  }

  if (locale === "en" && normalized === "shipped") {
    return "Shipped";
  }

  return status;
}

export function getReadingTimeLabel(minutes: number, locale: Locale) {
  return locale === "vi" ? `${minutes} phút đọc` : `${minutes} min read`;
}

export function getFallbackBadgeLabel(locale: Locale) {
  return locale === "vi" ? "Nội dung tiếng Anh" : "EN fallback";
}
