import type { Metadata } from "next";
import { getSingleSearchParam, type RouteSearchParams } from "@/app/_lib/search-params";
import { ProjectsView, getProjectsMetadata } from "@/app/_views/projects-view";

export async function generateMetadata(): Promise<Metadata> {
  return getProjectsMetadata("en");
}

export default async function ProjectsPage({ searchParams }: { searchParams: RouteSearchParams }) {
  const activeTag = await getSingleSearchParam(searchParams, "tag");

  return <ProjectsView locale="en" activeTag={activeTag} />;
}
