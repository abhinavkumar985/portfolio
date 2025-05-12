"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./ui/components/Navigation";
import Footer from "./ui/components/Footer";
import { ThemeProvider, useTheme } from "./ui/components/ThemeContext";
import { useEffect } from "react";
import { trackLink } from "./tracking";
import AnalyticsProvider from "./ui/components/AnalyticsProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const { theme } = useTheme();

  return (
    <html lang="en" className={theme}>
      <head>
        <title>Abhinav Kumar | Senior Engineer @ Zalando | Scalable UX & Frontend Systems</title>
        <meta name="description" content="Welcome to my portfolio. Explore my projects, blogs, and connect with me." />
        <meta name="keywords" content="portfolio, blogs, projects, developer" />
        <meta name="author" content="Abhinav Kumar" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Abhinav Kumar | Senior Engineer @ Zalando | Scalable UX & Frontend Systems" />
        <meta property="og:description" content="Welcome to my portfolio. Explore my projects, blogs, and connect with me." />
        <meta property="og:image" content="/public/globe.svg" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnalyticsProvider gtagId={gtmId || ''}>
          <ThemeProvider>
            <Navigation />
            <main className="grid p-8 pb-20 sm:p-20 sm:mt-8 lg:mt-0">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </AnalyticsProvider>
      </body>
    </html>
  );
}
