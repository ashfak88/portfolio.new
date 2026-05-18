import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashfak KP | MERN Stack Developer",
  description: "Portfolio of Ashfak KP, MERN Stack Developer specializing in React.js, Node.js, and MongoDB.",
};

import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LoadingScreen />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
