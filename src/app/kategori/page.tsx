"use client";

import AllProduk from "@/components/produk/allProduk";
import React, { useState } from "react";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
  const [isFiltered,setIsFiltered] = useState(false)

  const handleCategoryClick = (category: any) => {
    setSelectedCategory(category);
    setIsFiltered(category !== 'Semua Kategori')
  };

  const dataImage = [
    { img: "/allkategori.jpg", kategori: "Semua Kategori" },
    { img: "/sabun-sunfia-a.webp", kategori: "Sabun Serbaguna" },
    { img: "/buahbg.png", kategori: "Buah-Buahan" },
    { img: "/sabun-b.jpg", kategori: "Sabun Batang" },
  ];
  return (
    <div className="h-full w-full pt-20 px-6 md:px-20 lg:px-36">
      <div className="">
        <div className="">
          <div className=" grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 py-10">
            {dataImage.map((category, index) => (
              <div
                key={index}
                className={`relative px-2  border rounded-lg shadow-md cursor-pointer overflow-hidden hover:shadow-lg transition-shadow duration-300 text-xl font-serif text-center h-16 flex justify-center items-center bg-cover  bg-no-repeat ${
                  selectedCategory === category.kategori
                    ? "ring-2 ring-blue-400"
                    : ""
                }`}
                style={ { backgroundImage: `url(${category.img})` }}

                onClick={() => handleCategoryClick(category.kategori)}
              >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 text-white  md:text-lg text-base">
                  {category.kategori}
                </div>
              </div>
            ))}
          </div>
        </div>

        <AllProduk selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
