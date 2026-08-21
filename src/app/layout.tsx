import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ampera — Jembatan Energi untuk Nusantara",
  description: "Platform crowd-equity & tokenisasi aset dunia nyata (RWA) untuk elektrifikasi 10.068 desa 3T.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
