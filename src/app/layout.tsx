
import "./globals.css";
import { Poppins } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import Nav from "../components/Navbar/Navbar";
import { Metadata } from "next";
import BefNavbar from "@/components/Navbar/BefNavbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata = {
  title: "Upik Shop - Sunfia",
  description: "Upik Shop adalah toko online terpercaya dengan berbagai produk terbaik.",
  keywords: "Upik Shop, Toko Online, Belanja Murah, Produk Terbaik",
  openGraph: {
    title: "Upik Shop - Toko Online Terpercaya",
    description: "Upik Shop adalah toko online terpercaya dengan berbagai produk terbaik.",
    url: "https://upikshop.com",
    type: "website"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav  />
        <BefNavbar/>
        {/* <NavMobile showNav={showNav} closeNav={closeNavHandler} /> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
