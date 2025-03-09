"use client";
import Link from "next/link";
import HeroSlide from "../components/Hero";
import Hero from "../components/Beranda/Hero";
import NewProducts from "../components/produk/NewProducts";
import ReviewSlider from "../components/testimoni/Testimonial";

import { motion, useSpring, useScroll } from "motion/react";
import GoogleTagManager from "@/components/GoogleTagManager";

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <section className="">
      <GoogleTagManager></GoogleTagManager>
      
      <motion.div
        className="z-[1000] "
        id="scroll-indicator"
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
        animate={{
          background: [
            "linear-gradient(90deg, #ff0088, #ffcc00)",
            "linear-gradient(90deg, #ffcc00, #00ffcc)",
            "linear-gradient(90deg, #00ffcc, #0099ff)",
            "linear-gradient(90deg, #0099ff, #ff0088)",
            "linear-gradient(90deg, #ff0088, #ffcc00)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "linear",
        }}
      />
      <Hero />
      <HeroSlide />
      <NewProducts />
      <ReviewSlider />
      <div className="h-full py-20 px-6 md:px-20 lg:px-36">
        <div className="flex justify-center items-center flex-col ">
          <header className="text-primary text-[24px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2] text-center ">
            Selamat Datang Di Upik Shop!
          </header>
          <br />
          <h3 className="text-gray-800 text-[12px]  md:text-[18px] max-w-xl md:max-w-3xl text-center pb-4 ">
            Dapatkan sabun yang sesuai dengan kebutuhan anda.pilih berbagai
            variant sabun kami
          </h3>
          <Link href={"/kategori"}>
            <button className=" px-6 py-1 md:py-3 md:rounded-full rounded-md bg-accent hover:bg-green-700 transition-all duration-300 flex justify-center items-center">
              <p className="text-white md:text-lg flex justify-between gap-5  items-center text-center ">
                Lihat Sekarang
              </p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
