import { getServerEnv } from "@/lib/env";
import { getResolvedSiteBaseUrl } from "@/lib/seo";

export function resolveSiteUrl(pathname = "/") {
  return new URL(pathname, getResolvedSiteBaseUrl());
}

export function resolveSiteBaseUrl() {
  return resolveSiteUrl("/").origin;
}

export function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function escapeHtml(value: string) {
  return escapeXml(value);
}

export function getServerConfig() {
  try {
    return getServerEnv();
  } catch {
    return {
      CONTACT_FROM_EMAIL: undefined,
      CONTACT_TO_EMAIL: undefined,
      RESEND_API_KEY: undefined,
      TURNSTILE_SECRET_KEY: undefined,
    };
  }
}
