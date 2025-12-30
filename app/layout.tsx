import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PawWalk - Find Trusted Dog Walkers Near You",
  description: "Connect with vetted, local dog walkers in your neighborhood. Easy booking, trusted professionals, happy pups.",
  keywords: ["dog walking", "pet care", "dog walkers", "pet services", "local dog walkers"],
  openGraph: {
    title: "PawWalk - Find Trusted Dog Walkers Near You",
    description: "Connect with vetted, local dog walkers in your neighborhood.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
