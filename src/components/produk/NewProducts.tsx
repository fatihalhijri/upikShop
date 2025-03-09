"use client";

import React, { useMemo } from "react";
import ProductCard from "../ProductCard";
import Link from "next/link";
import UseProdukModule from "../lib";

const productsData = [
  {
    img: "/sabun-sunfia-b.webp",
    title: "Sabun Serbaguna Harum Jeruk Nipis",
    desc: "Sabun untuk cuci",
    rating: 5,
    stok: 12,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/sabun-sunfia-a.webp",
    title: "Sabun Pel Harum Sereh Original",
    desc: "Sabun untuk lantai",
    rating: 4,
    stok: 15,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/sabun-sunfia-c.webp",
    title: "Sabun Cuci Baju Harum TutiFruty",
    desc: "Pemutih baju",
    rating: 5,
    stok: 4,
    price: "55000",
    category: "Sabun Serbaguna",
  },
  {
    img: "/detergent.webp",
    title: "Pemutih Pakaian Original Pembersih Noda",
    desc: "Pemutih baju",
    rating: 4,
    stok: 10,
    price: "55000",
    category: "Pemutih",
  },
  {
    img: "/sabun/sabun-1.webp",
    title: "Sabun Batang Daun Kelor Original",
    desc: "testing testing testing",
    rating: 5,
    stok: 21,
    price: "10000",
    category: "Sabun Batang",
  },
];

const NewProducts = () => {
  const { useProdukList } = UseProdukModule();
  const {
    data,
    isFetching,
    // filterParams,
    // params,
    // handlePage,
    // handlePageSize,
    // setParams,
    // handleFilter,
    // handleClear,
  } = useProdukList();
  const randomProducts = useMemo(() => {
    if (!data?.data) return [];
    return [...data.data]
      .sort(() => Math.random() - 0.4) // Acak data
      .slice(0, 4); // Ambil 5 produk
  }, [data]); // Akan berubah saat `data` berubah
  return (
    <div className="h-auto">
      <div className=" pt-16 py-10 px-6 md:px-20 lg:px-36">
        <div className="flex justify-between items-end pb-4">
          <h2 className="font-medium md:text-2xl uppercase">Produk Terlaris</h2>
          <div className="font-medium md:text-lg underline text-blue-600">
            <Link href={"/kategori"}>
              <h2 className="">Lihat Lainnya</h2>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2    md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 lg:gap-4 md:gap-3 gap-2   ">
          {/* {JSON.stringify(data)} */}

          {randomProducts?.map((item, index) => (
            <ProductCard
              key={index}
              img={item.foto}
              title={item.nama_produk}
              desc={item.deskripsi_produk}
              price={item.harga}
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
