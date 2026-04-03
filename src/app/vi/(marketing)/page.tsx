import type { Metadata } from "next";
import { HomeView, getHomeMetadata } from "@/app/_views/home-view";

export async function generateMetadata(): Promise<Metadata> {
  return getHomeMetadata("vi");
}

export default async function VietnameseHomePage() {
  return <HomeView locale="vi" />;
}
