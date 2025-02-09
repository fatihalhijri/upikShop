"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobNavbar from "../components/Navbar/MobNavbar";
import Footer from "../components/Footer";
import { useState } from "react";
import NavMobile from "../components/Navbar/NavMobile";
import Nav from "../components/Navbar/Navbar";
import NextAuthProvider from "../components/NextAuthProvider";
import { Session } from "next-auth";
import ReactQuery from "@/components/ReactQuery";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "Upik Shop E-commerce",
  description: "Usaha Jual Sabun Serba Guna",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav open={showNavHandler} />
        <NavMobile showNav={showNav} closeNav={closeNavHandler} />

        {children}
        <Footer />
      </body>
    </html>
  );
}
