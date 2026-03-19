import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ChatWidget from "@/components/ChatWidget";
import PageLoader from "@/components/PageLoader";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Sai Sathya Jain | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, TypeScript, and Cloudflare. Builds and ships production web products end-to-end with full ownership from concept to deployment.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Cloudflare Workers",
    "Serverless",
    "Hono",
    "Web Developer India",
    "Jaipur Developer",
    "Sai Sathya Jain",
  ],
  authors: [{ name: "Sai Sathya Jain", url: "https://github.com/sathyajain12" }],
  creator: "Sai Sathya Jain",
  openGraph: {
    title: "Sai Sathya Jain | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js & Cloudflare. Building serverless products end-to-end with full ownership.",
    siteName: "Sai Sathya Jain Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Sathya Jain | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js & Cloudflare. Building serverless products end-to-end.",
    creator: "@sathyajain",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-white dark:bg-zinc-950 text-zinc-900 dark:text-slate-50 antialiased selection:bg-violet-500/30 cursor-none">
        <Providers>
          <PageLoader />
          <CustomCursor />
          {children}
          <ChatWidget />
        </Providers>
      </body>
    </html>
  );
}
