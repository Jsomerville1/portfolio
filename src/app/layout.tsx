import type { Metadata } from "next";
import { Inter, Rethink_Sans, JetBrains_Mono, Bungee_Hairline } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/layout/SocialSidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
  
const rethinkSans = Rethink_Sans({
  weight: ["400"],
  variable: "--font-rethink-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joseph Somerville — Full Stack Developer",
  description:
    "Full Stack Developer and Defense Innovation Fellow. Building mission-critical software for real-world impact.",
  keywords: [
    "full stack developer",
    "software engineer",
    "React",
    "TypeScript",
    "AWS",
    "defense innovation",
    "Joseph Somerville",
  ],
  authors: [{ name: "Joseph Somerville" }],
  openGraph: {
    title: "Joseph Somerville — Full Stack Developer",
    description:
      "Full Stack Developer and Defense Innovation Fellow. Building mission-critical software for real-world impact.",
    url: "https://josephsomerville.net",
    siteName: "Joseph Somerville",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${rethinkSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-surface text-primary antialiased">
        <Navbar />
        <SocialSidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
