import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aye Mack | Official Artist Website",
  description: "Official site for music, videos, booking, features, and the latest from Aye Mack. Saginaw pressure, real life music.",
  keywords: ["Aye Mack", "Aye Mack Music", "Aye Mack1k", "Aye Mack rapper", "Aye Mack Saginaw", "Saginaw United", "booking", "features"],
  openGraph: {
    title: "Aye Mack | Official Artist Website",
    description: "Saginaw pressure. Real life music.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    "name": "Aye Mack",
    "url": "https://ayemack.com",
    "sameAs": [
      "https://www.instagram.com/aye_mack1k",
      "https://www.facebook.com/aye.mack.720377",
      "https://www.youtube.com/@ayemack1k806",
      "https://open.spotify.com/artist/2gNnWtSL0RYqeQ1k9FID6u",
      "https://music.apple.com/ca/artist/aye-mack/1530997764"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)] pt-20">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
