import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata: Metadata = {
  title: "Sorot — Berita Terbaru Olahraga, Tech & Viral",
  description: "Portal berita modern dengan fokus pada topik yang sedang viral dan relevan untuk Gen Z Indonesia. Dapatkan informasi terbaru dari berbagai kategori.",
  keywords: ["berita", "news", "viral", "tech", "sport", "indonesia", "terkini"],
  authors: [{ name: "Sorot" }],
  creator: "Sorot",
  publisher: "Sorot",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sorot.id",
    title: "Sorot — Berita Terbaru Olahraga, Tech & Viral",
    description: "Portal berita modern dengan fokus pada topik yang sedang viral dan relevan",
    siteName: "Sorot",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sorot — Berita Terbaru Olahraga, Tech & Viral",
    description: "Portal berita modern dengan fokus pada topik yang sedang viral dan relevan",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
