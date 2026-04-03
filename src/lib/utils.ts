import { clsx, type ClassValue } from "clsx";
import type { Locale } from "@/lib/i18n";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(value: Date | string, locale: Locale) {
  const date = value instanceof Date ? value : new Date(value);

  return new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function formatList(items: string[], locale: Locale = "en") {
  return new Intl.ListFormat(locale === "vi" ? "vi-VN" : "en-US", {
    style: "long",
    type: "conjunction",
  }).format(items);
}

export function isPlaceholderValue(value?: string | null) {
  if (!value) {
    return true;
  }

  const normalized = value.toLowerCase();

  return (
    normalized.includes("replace-with") ||
    normalized.includes("example.com") ||
    normalized.includes("your-handle") ||
    normalized.includes("portfolio.example.com")
  );
}

export function normalizeContactValue(value?: string | null) {
  return isPlaceholderValue(value) ? "" : (value ?? "");
}
