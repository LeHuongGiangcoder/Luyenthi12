import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = localFont({
  src: "../public/Inter,Montserrat/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

const montserrat = localFont({
  src: "../public/Inter,Montserrat/Montserrat/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Navi | Adaptive Learning for Grade 12",
  description: "Phòng thi thử và luyện tập adaptive dành cho học sinh chuẩn bị cho kỳ thi THPT Quốc gia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} ${montserrat.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
