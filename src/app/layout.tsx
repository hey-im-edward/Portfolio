import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Manrope, Newsreader } from "next/font/google";
import { absoluteUrl } from "@/lib/seo";
import "./globals.css";

const sans = Manrope({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  metadataBase: absoluteUrl(),
  title: {
    default: "Senior / Lead Developer Portfolio",
    template: "%s | Senior / Lead Developer Portfolio",
  },
  description:
    "Recruiter-first portfolio and technical writing system for a senior full-stack developer.",
  openGraph: {
    title: "Senior / Lead Developer Portfolio",
    description:
      "Recruiter-first portfolio and technical writing system for a senior full-stack developer.",
    url: absoluteUrl("/"),
    siteName: "Senior / Lead Developer Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior / Lead Developer Portfolio",
    description:
      "Recruiter-first portfolio and technical writing system for a senior full-stack developer.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f1e8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} bg-background text-foreground min-h-full antialiased`}
    >
      <body className="bg-background text-foreground selection:bg-accent selection:text-accent-foreground min-h-full">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
