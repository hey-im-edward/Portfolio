import type { Metadata } from "next";
import { AboutView, getAboutMetadata } from "@/app/_views/about-view";

export async function generateMetadata(): Promise<Metadata> {
  return getAboutMetadata("vi");
}

export default async function VietnameseAboutPage() {
  return <AboutView locale="vi" />;
}
