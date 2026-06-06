import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ashfak KP | MERN Stack Developer & Software Engineer",
  description: "Portfolio of Ashfak KP, a skilled MERN Stack Developer specializing in React.js, Node.js, Express.js, MongoDB, and Next.js. Designing robust system architectures and seamless user experiences.",
  keywords: [
    "Ashfak KP", 
    "MERN Stack Developer", 
    "Full Stack Developer", 
    "Software Engineer", 
    "React.js Developer", 
    "Node.js Developer", 
    "Web Developer Calicut", 
    "Bridgeon MERN Stack", 
    "Kodlarr Innovations LMS"
  ],
  authors: [{ name: "Ashfak KP", url: "mailto:ashfakkp323@gmail.com" }],
  creator: "Ashfak KP",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Ashfak KP | MERN Stack Developer & Software Engineer",
    description: "Explore the portfolio of Ashfak KP, MERN Stack Developer. Check out SaaS platforms, LMS systems, and high-performance Web3/Three.js interactive web apps.",
    url: "https://ashfak.dev",
    siteName: "Ashfak KP Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashfak KP | MERN Stack Developer & Software Engineer",
    description: "Explore the portfolio of Ashfak KP, MERN Stack Developer specializing in modular architectures and React/NextJS.",
  },
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
