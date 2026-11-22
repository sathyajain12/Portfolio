import type { Metadata } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ChatWidget from "@/components/ChatWidget";
import Providers from "@/components/Providers";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  axes: ["opsz"],
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const description =
  "Full-stack developer in Jaipur building the internal systems an examinations office runs on: React, Next.js, TypeScript and Cloudflare Workers.";

export const metadata: Metadata = {
  title: "Sai Sathya Jain, Full-Stack Developer",
  description,
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Cloudflare Workers",
    "Hono",
    "Jaipur Developer",
    "Sai Sathya Jain",
  ],
  authors: [{ name: "Sai Sathya Jain", url: "https://github.com/sathyajain12" }],
  creator: "Sai Sathya Jain",
  openGraph: {
    title: "Sai Sathya Jain, Full-Stack Developer",
    description,
    siteName: "Sai Sathya Jain",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Sathya Jain, Full-Stack Developer",
    description,
    creator: "@sathyajain",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="font-sans bg-paper text-ink antialiased">
        <Providers>
          <CustomCursor />
          {children}
          <ChatWidget />
        </Providers>
      </body>
    </html>
  );
}
