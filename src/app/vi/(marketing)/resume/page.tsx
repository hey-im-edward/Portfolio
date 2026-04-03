import type { Metadata } from "next";
import { ResumeView, getResumeMetadata } from "@/app/_views/resume-view";

export async function generateMetadata(): Promise<Metadata> {
  return getResumeMetadata("vi");
}

export default async function VietnameseResumePage() {
  return <ResumeView locale="vi" />;
}
