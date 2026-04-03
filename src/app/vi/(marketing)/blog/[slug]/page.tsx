import type { Metadata } from "next";
import { PostDetailView, getPostDetailMetadata } from "@/app/_views/post-detail-view";
import { getLocalizedPosts } from "@/lib/content/loaders";

export async function generateStaticParams() {
  const posts = await getLocalizedPosts("vi");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return getPostDetailMetadata("vi", slug);
}

export default async function VietnameseBlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <PostDetailView locale="vi" slug={slug} />;
}
