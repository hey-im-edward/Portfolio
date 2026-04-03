import type { Metadata } from "next";
import { getSingleSearchParam, type RouteSearchParams } from "@/app/_lib/search-params";
import { BlogView, getBlogMetadata } from "@/app/_views/blog-view";

export async function generateMetadata(): Promise<Metadata> {
  return getBlogMetadata("en");
}

export default async function BlogPage({ searchParams }: { searchParams: RouteSearchParams }) {
  const activeTag = await getSingleSearchParam(searchParams, "tag");

  return <BlogView locale="en" activeTag={activeTag} />;
}
