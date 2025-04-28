import type { Metadata } from "next";
import { Roboto, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import NavbarWrapper from "./NavbarWrapper";

const RobotoSans = Roboto({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michael Agonsi - Fullstack Developer Portfolio Website",
  description: "Portfolio website of Michael Agonsi, a fullstack developer. Showcasing projects, skills, and contact information. Built with Next.js and Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  }
  ,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RobotoSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <NavbarWrapper />
        {children}
      </body>
    </html>
  );
}
