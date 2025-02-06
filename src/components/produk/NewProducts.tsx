"use client";

import React from "react";
import ProductCard from "../ProductCard";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";

const productsData = [
  {
    img: "/sabun-sunfia-b.webp",
    title: "Jeruk Nipis Segar Australia 1KG",
    desc: "nipis -1",
    rating: 4,
    stok: 4,
    price: "55.000",
  },
  {
    img: "/sabun-sunfia-a.webp",
    title: "Jeruk Nipis Segar Australia 1KG",
    desc: "nipis -1",
    rating: 3,
    stok: 4,
    price: "55.000",
  },
  {
    img: "/sabun-sunfia-c.webp",
    title: "Jeruk Nipis Segar Australia 1KG",
    desc: "nipis -1",
    rating: 2,
    stok: 4,
    price: "55.000",
  },
  {
    img: "/nipis_bg.webp",
    title: "Jeruk Nipis seger 1KG",
    desc: "nipis -1",
    rating: 5,
    stok: 4,
    price: "55.000",
  },
  {
    img: "/nipis_bg.webp",
    title: "Jeruk Nipis Segar Australia 1KG",
    desc: "nipis -1",
    rating: 1,
    stok: 4,
    price: "55.000",
  },
  {
    img: "/nipis_bg.webp",
    title: "Jeruk Nipis Segar Australia 1KG",
    desc: "nipis -1",
    rating: 1,
    stok: 4,
    price: "55.000",
  },
];

const NewProducts = () => {

  return (
    <div className="h-auto">
      <div className="container pt-16 py-10  px-6 md:px-20 lg:px-36">
        <div className="flex justify-between items-center pb-4">
          <h2 className="font-medium text-2xl  uppercase">Produk Terlaris</h2>
          <Link href={"/kategori"}>
            <h2 className="font-medium text-lg   underline text-blue-600">
              Lihat Lainnya
            </h2>
          </Link>
        </div>
        <div className="grid grid-cols-2    md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4   ">
          {productsData.map((item, index) => (
            <ProductCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              stok={item.stok}
              rating={item.rating}
            />
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
