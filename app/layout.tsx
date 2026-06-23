import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Al-Huda Online Quran Academy | Learn Quran Online with Expert Teachers",
  description:
    "Join 5,000+ students worldwide learning Quran online with certified teachers. One-on-one live classes, flexible scheduling, all ages and levels. Start your free trial class today!",
  keywords: [
    "online quran academy",
    "learn quran online",
    "quran classes",
    "tajweed course",
    "hifz program",
    "arabic language",
    "islamic studies",
  ],
  openGraph: {
    title: "Al-Huda Online Quran Academy",
    description: "Premium online Quran education with certified teachers. Students in 50+ countries.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-body antialiased bg-beige">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              borderRadius: "12px",
              fontFamily: "var(--font-inter)",
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
