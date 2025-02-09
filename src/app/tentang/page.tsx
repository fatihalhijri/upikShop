"use client";

import React from "react";
import Image from "next/image";
import Auto1 from "@/components/tentang/autoText-1";
import Auto2 from "@/components/tentang/autoText2";
import Auto3 from "@/components/tentang/autoText3";
import Link from "next/link";

const Page: React.FC = () => {
  const handleClick = () => {
    window.open("https://wa.me/6287878991905", "_blank");
  };
  return (
    <div className="">
      <div className="w-full h-full">
        <div className="bg-white md:h-32 h-28"></div>
        
        <div>
          <div className="outline-none border-none relative  overflow-hidden ">
            <div className=" absolute left-[30px] lg:left-[145px] md:left-[70px] lg:max-w-[650px]  md:max-w-[400px] max-w-[250px]  top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-white/90  p-4 rounded-lg   "> 
              <div className="flex flex-col justify-center items-start text-left ">
                <h2 className="text-primary text-[24px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2] ">
                  Tentang Kami
                </h2>
                <h3 className="text-gray-800 text-[12px]  md:text-[18px] text-justify  pt-2 ">
                  Kami adalah perusahaan yang berfokus pada penjualan sabun
                  berkualitas tinggi yang ramah lingkungan dan aman untuk kulit.
                </h3>
              </div>
            </div>
            <div className="w-[100%] h-auto md:h-[350px] z-10 ">
              <Image
                className="w-[100%] h-[250px] lg:h-[480px] md:h-[300px] object-cover  "
                style={{ objectPosition: "25% 65%" }}
                src={"/sabunBatang.jpeg"}
                alt="banner"
                width={2000}
                height={2000}
              />
            </div>
          </div>
        </div>
        <section className=" grid md:grid-cols-3 grid-cols-1 justify-between items-center  px-6 md:px-20 lg:px-36 w-full   py-12 gap-3 ">
          
          <Auto1 />

          <Auto2 />

          <Auto3 />
        </section>
        <div className="h-full bg-gray-100 py-20">
          <div className="flex justify-center items-center flex-col ">
            <h2 className="text-primary text-[24px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2] ">
              Tunggu Apa Lagi!
            </h2>
            <h3 className="text-gray-800 text-[12px]  md:text-[18px] max-w-xl md:max-w-3xl text-center py-4">
              Lihat berbagai macam produk buah-buahan, dan sabun yang segar dan
              berkualitas, serta mendukung kesehatan dan kebersihan Anda.
            </h3>
            <Link href={"/kategori"}>
              <button
                className=" px-6 py-1 md:py-3 md:rounded-full rounded-md bg-accent hover:bg-green-700 transition-all duration-300 flex justify-center items-center"
              >
                <p className="text-white md:text-lg flex justify-between gap-5  items-center text-center ">
                  Lihat Sekarang
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
