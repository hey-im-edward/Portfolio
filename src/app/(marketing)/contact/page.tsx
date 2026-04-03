import type { Metadata } from "next";
import { ContactView, getContactMetadata } from "@/app/_views/contact-view";

export async function generateMetadata(): Promise<Metadata> {
  return getContactMetadata("en");
}

export default async function ContactPage() {
  return <ContactView locale="en" />;
}
