"use client";

import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { usePathname } from "next/navigation";
import Loader from "./items/Loader";
import { useState, useEffect } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

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
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <title>UpTodo</title>
        <meta name="description" content="by T0SHKA" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>{loading ? <Loader /> : children}</Provider>
      </body>
    </html>
  );
}
