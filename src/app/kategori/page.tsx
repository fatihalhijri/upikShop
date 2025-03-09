"use client";

import AllProduk from "@/components/produk/allProduk";
import React, { useState } from "react";

import { motion, useSpring, useScroll } from "motion/react";
import UseProdukModule from "@/components/lib";

export default function Page() {
  const { useKategoriList } = UseProdukModule();
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [isFiltered, setIsFiltered] = useState(false);

  const { data, isFetching, isLoading } = useKategoriList();

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
    setIsFiltered(category !== "semua sategori");
  };

  // const dataImage = [
  //   { img: "/allkategori.jpg", kategori: "Semua Kategori" },
  //   { img: "/sabun-sunfia-a.webp", kategori: "Sabun Serbaguna" },
  //   { img: "/buahbg.png", kategori: "Buah-Buahan" },
  //   { img: "/sabun-b.jpg", kategori: "Sabun Batang" },
  // ];

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
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
      <div className="h-full w-full  px-6 md:px-20 lg:px-36">
        <div className="">
          <div className="">
            <div className=" grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 py-5">
              {/* <button
                className={`px-4 py-2 rounded-lg shadow-md font-semibold text-white transition-all ${
                  selectedCategory === "Semua Kategori"
                    ? "bg-blue-600"
                    : "bg-gray-500 hover:bg-gray-700"
                }`}
                style={{ backgroundImage: `url(/allkategori.jpg)` }}
                onClick={() => handleCategoryClick("Semua Kategori")}
              >
                Semua Kategori
              </button> */}

              <div
                className={`relative px-2   border rounded-lg shadow-md cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300 text-xl font-serif text-center h-16 flex justify-center items-center bg-cover  bg-no-repeat ${
                  selectedCategory === "Semua Kategori"
                    ? "ring-2 ring-blue-400"
                    : ""
                }`}
                style={{ backgroundImage: `url(/allkategori.jpg)` }}
                onClick={() => handleCategoryClick("Semua Kategori")}
              >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 text-white  md:text-lg text-base">
                  Semua Kategori
                </div>
              </div>

              {data?.data.map((category, index) => (
                <div
                  key={index}
                  className={`relative px-2  border rounded-lg shadow-md cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300 text-xl font-serif text-center h-16 flex justify-center items-center bg-cover  bg-no-repeat ${
                    selectedCategory === category.nama_kategori
                      ? "ring-2 ring-blue-400"
                      : ""
                  }`}
                  style={{ backgroundImage: `url(${category.foto})` }}
                  onClick={() => handleCategoryClick(category.nama_kategori)}
                >
                  <div className="absolute inset-0 bg-black opacity-60"></div>
                  <div className="relative z-10 text-white  md:text-lg text-base">
                    {category.nama_kategori}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* {JSON.stringify(data)} */}

          <AllProduk selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  );
}
