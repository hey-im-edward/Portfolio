import type { Metadata } from "next";
import { ProjectDetailView, getProjectDetailMetadata } from "@/app/_views/project-detail-view";
import { getProjects } from "@/lib/content/loaders";

export async function generateStaticParams() {
  const projects = await getProjects("en");
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return getProjectDetailMetadata("en", slug);
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <ProjectDetailView locale="en" slug={slug} />;
}
