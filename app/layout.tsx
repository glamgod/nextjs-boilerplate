import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manolo Estavillo - Visual Sociology & Photography",
  description: "Portfolio of Dr. Manolo Estavillo, Professor of Sociology and visual artist exploring the intersection of social research and photographic storytelling.",
  keywords: ["photography", "sociology", "visual sociology", "documentary", "community", "social research"],
  authors: [{ name: "Manolo Estavillo" }],
  creator: "Manolo Estavillo",
  openGraph: {
    title: "Manolo Estavillo - Visual Sociology & Photography",
    description: "Portfolio of Dr. Manolo Estavillo, Professor of Sociology and visual artist exploring the intersection of social research and photographic storytelling.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manolo Estavillo - Visual Sociology & Photography",
    description: "Portfolio of Dr. Manolo Estavillo, Professor of Sociology and visual artist exploring the intersection of social research and photographic storytelling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
