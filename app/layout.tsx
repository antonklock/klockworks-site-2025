import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import NoiseBackground from "@/components/Styling/NoiseBackground";
import "./globals.css";

const baijamjuree = localFont({
  src: [
    {
      path: "../public/fonts/bai-jamjuree-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/bai-jamjuree-bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Klockworks",
  description: "Klockworks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${baijamjuree.className} antialiased relative`}>
        <NoiseBackground className="opacity-50" />
        {children}
      </body>
    </html>
  );
}
