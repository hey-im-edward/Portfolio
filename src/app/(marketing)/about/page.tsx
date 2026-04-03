import type { Metadata } from "next";
import { AboutView, getAboutMetadata } from "@/app/_views/about-view";

export async function generateMetadata(): Promise<Metadata> {
  return getAboutMetadata("en");
}

export default async function AboutPage() {
  return <AboutView locale="en" />;
}
