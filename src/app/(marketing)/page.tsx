import type { Metadata } from "next";
import { HomeView, getHomeMetadata } from "@/app/_views/home-view";

export async function generateMetadata(): Promise<Metadata> {
  return getHomeMetadata("en");
}

export default async function HomePage() {
  return <HomeView locale="en" />;
}
