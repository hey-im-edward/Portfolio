import type { Metadata } from "next";
import { ResumeView, getResumeMetadata } from "@/app/_views/resume-view";

export async function generateMetadata(): Promise<Metadata> {
  return getResumeMetadata("en");
}

export default async function ResumePage() {
  return <ResumeView locale="en" />;
}
