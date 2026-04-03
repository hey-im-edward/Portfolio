import type { Metadata } from "next";
import { ContactView, getContactMetadata } from "@/app/_views/contact-view";

export async function generateMetadata(): Promise<Metadata> {
  return getContactMetadata("vi");
}

export default async function VietnameseContactPage() {
  return <ContactView locale="vi" />;
}
