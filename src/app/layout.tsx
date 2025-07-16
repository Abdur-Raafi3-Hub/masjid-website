import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SCMA | Sutton Coldfield Masjid",
  description: "Modern masjid website for Sutton Coldfield Masjid (SCMA), UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Sticky navbar shared across all pages */}
        <nav className="bg-[#353535] text-[#e3d7a3] px-4 py-3 shadow flex justify-between items-center border-b border-[#d6c48c]/30 sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="SCMA Logo" width={60} height={60} className="h-12 w-auto" priority />
            <span className="font-bold text-xl tracking-wide uppercase">Sutton Coldfield Masjid</span>
          </div>
          <ul className="flex gap-8 font-semibold text-base items-center">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/prayer-times" className="hover:text-white transition">Prayer Times</Link></li>
            <li><Link href="/events" className="hover:text-white transition">Events</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            <li><Link href="/donate" className="bg-[#4a4a4a] px-4 py-2 rounded text-[#e3d7a3] border border-[#e3d7a3] hover:bg-[#e3d7a3] hover:text-[#353535] transition">Donate</Link></li>
          </ul>
        </nav>
        {/* Main content area with background color */}
        <div className="min-h-screen bg-[#353535] flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
