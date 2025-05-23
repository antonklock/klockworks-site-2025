import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NoiseBackground from "@/components/Styling/NoiseBackground";

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
      <body className={`${baijamjuree.className} antialiased`}>
        <NoiseBackground className="opacity-[0.5]" />
        {children}
      </body>
    </html>
  );
}
