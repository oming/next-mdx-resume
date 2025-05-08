import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { GoogleAnalytics } from "@next/third-parties/google";

import Footer from "@/components/footer";
import Header from "@/components/header";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Mdx Resume",
  description: "next.js로 제작하는 개발자 이력서",

  // abstract: "My Website Description",
  // applicationName: "My Blog",
  // authors: [{ name: "Next.js Team", url: "https://nextjs.org" }],
  // category: "My Category",
  // creator: "Next.js Team",
  // keywords: "nextjs, react, blog",
  // other: { custom: ["meta1", "meta2"] },
  // publisher: "Vercel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="ko" suppressHydrationWarning className="dark">
    <html lang="ko" suppressHydrationWarning className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
      {process.env.NODE_ENV === "production" &&
        process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
        )}
    </html>
  );
}
