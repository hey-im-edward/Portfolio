import type { Metadata } from "next";
import { PostDetailView, getPostDetailMetadata } from "@/app/_views/post-detail-view";
import { getPosts } from "@/lib/content/loaders";

export async function generateStaticParams() {
  const posts = await getPosts("en");
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return getPostDetailMetadata("en", slug);
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return <PostDetailView locale="en" slug={slug} />;
}
