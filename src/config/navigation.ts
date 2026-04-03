import { localizePath, type Locale } from "@/lib/i18n";

export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

type RouteLabelMap = Record<Locale, string>;

const routeLabels: Record<
  "home" | "projects" | "blog" | "about" | "contact" | "resume",
  RouteLabelMap
> = {
  home: { en: "Home", vi: "Trang chủ" },
  projects: { en: "Projects", vi: "Dự án" },
  blog: { en: "Blog", vi: "Bài viết" },
  about: { en: "About", vi: "Giới thiệu" },
  contact: { en: "Contact", vi: "Liên hệ" },
  resume: { en: "Resume", vi: "Hồ sơ" },
};

const routeDescriptions: Partial<Record<keyof typeof routeLabels, string>> = {
  projects: "Selected product and engineering case studies",
  blog: "Technical writing and portfolio craft",
  about: "Background, working style, and focus areas",
  contact: "Get in touch for roles or collaborations",
  resume: "Download a concise career summary",
};

const routes = {
  home: "/",
  projects: "/projects",
  blog: "/blog",
  about: "/about",
  contact: "/contact",
  resume: "/resume",
} as const;

export const languageOptions = [
  { locale: "en" as const, label: "EN" },
  { locale: "vi" as const, label: "VI" },
] as const;

function makeItem(locale: Locale, key: keyof typeof routes): NavigationItem {
  return {
    label: routeLabels[key][locale],
    href: localizePath(locale, routes[key]),
    description: routeDescriptions[key],
  };
}

export function getHeaderNavigation(locale: Locale): NavigationItem[] {
  return [
    makeItem(locale, "home"),
    makeItem(locale, "projects"),
    makeItem(locale, "blog"),
    makeItem(locale, "about"),
  ];
}

export function getFooterNavigation(locale: Locale): NavigationItem[] {
  return [
    makeItem(locale, "home"),
    makeItem(locale, "projects"),
    makeItem(locale, "blog"),
    makeItem(locale, "about"),
    makeItem(locale, "contact"),
    makeItem(locale, "resume"),
  ];
}

export function getUtilityNavigation(locale: Locale): NavigationItem[] {
  return [makeItem(locale, "contact"), makeItem(locale, "resume")];
}

export function isActivePath(pathname: string | undefined, href: string) {
  if (!pathname) {
    return false;
  }

  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
