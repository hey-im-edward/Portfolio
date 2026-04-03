import type { Metadata } from "next";
import { ProjectDetailView, getProjectDetailMetadata } from "@/app/_views/project-detail-view";
import { getLocalizedProjects } from "@/lib/content/loaders";

export async function generateStaticParams() {
  const projects = await getLocalizedProjects("vi");
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return getProjectDetailMetadata("vi", slug);
}

export default async function VietnameseProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <ProjectDetailView locale="vi" slug={slug} />;
}
