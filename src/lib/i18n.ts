export const locales = ["en", "vi"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  vi: "VI",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, pathname = "/") {
  const normalized = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");

  if (locale === defaultLocale) {
    return normalized;
  }

  if (normalized === "/") {
    return `/${locale}`;
  }

  return `/${locale}${normalized}`;
}

export function stripLocalePrefix(pathname: string) {
  if (!pathname.startsWith("/vi")) {
    return pathname || "/";
  }

  const stripped = pathname.slice(3);
  return stripped || "/";
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/vi") ? "vi" : "en";
}

export function swapLocale(pathname: string, targetLocale: Locale) {
  const basePath = stripLocalePrefix(pathname);
  return localizePath(targetLocale, basePath);
}
