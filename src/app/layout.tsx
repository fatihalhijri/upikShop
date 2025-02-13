
import "./globals.css";
import { Poppins } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import Nav from "../components/Navbar/Navbar";
import { Metadata } from "next";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export const metadata: Metadata = {
  title: "Upik Shop | Sunfia",
  description: "Sunfia | Usaha Jual Sabun Serba Guna berkualitas,sayur,dan buah buahan dengan harga terjangkau ",
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
        {/* <NavMobile showNav={showNav} closeNav={closeNavHandler} /> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
