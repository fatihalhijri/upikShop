"use client";
import React from "react";
import Image from "next/image";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";

interface propsType {
  img: string;
  title: string;
  desc: string;
  price: string;
  stok: number;
  rating: number;
}

//untuk HIT API
// interface propsType {
//   img: string;
//   nama_produk: string;
//   deskripsi_produk: string;
//   harga: string;
//   stok: number;
//   barcode: string;
//   rating: number;
// }
const generateRating = (rating: number) => {
  switch (rating) {
    case 1:
      return (
        <div className="flex md:gap-1 md:text-[20px] text-[14px] text-[#ff9529]">
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    case 2:
      return (
        <div className="flex md:gap-1 md:text-[20px] text-[14px] text-[#ff9529]">
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    case 3:
      return (
        <div className="flex md:gap-1 md:text-[20px] text-[14px] text-[#ff9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      );
    case 4:
      return (
        <div className="flex md:gap-1 md:text-[20px] text-[14px] text-[#ff9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      );
    case 5:
      return (
        <div className="flex md:gap-1 md:text-[20px] text-[14px] text-[#ff9529]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      );

    default:
      break;
  }
};

const ProductCard: React.FC<propsType> = ({
  img,
  title,
  desc,
  price,
  stok,
  rating,
  // nama_produk,
  // deskripsi_produk,
  // harga,stok,barcode,rating
}) => {
  return (
    <div className="border border-gray-200 rounded-lg w-full max-w-[440px] h-[350px] shadow-md flex flex-col items-center  justify-between ">
      <div className="flex items-center justify-center  max-h-1/2  w-full overflow-hidden bg-gray-100">
        <Image
          className=" object-contain w-full h-full"
          src={img}
          width={300}
          height={300}
          alt={title}
        ></Image>
      </div>

      <div className="lg:px-4 md:px-3 px-2 py-2 flex flex-col justify-start items-start md:gap-4 sm:gap-3 gap-2 w-full ">
        <div className="">
          <h2 className="text-blackish text-base lg:text-lg md:text-base lg:font-bold md:font-semibold font-medium line-clamp-2">
            {title}
          </h2>
          <div className="font-bold flex flex-row md:gap-3 gap-1 items-center text-blackish md:text-base text-sm">
            Rp.{price}
            <del className="text-gray-400 md:font-semibold font-medium md:text-sm text-xs">
              Rp.{parseInt(price) + 10000}
            </del>
          </div>
        </div>
        <div className="flex items-center  gap-2">
          <div className="">{generateRating(rating)}</div>
          <div className="md:text-[14px] text-[11px] text-gray-600 ">({rating})</div>
        </div>
        <div className="flex md:flex-row flex-col  gap-2 justify-between items-center w-full">
          <div className="flex justify-between w-full items-center bg-accent py-2 px-3 rounded-lg ">
            <p className="lg:text-base md:text-[12px] text-[14px]  text-white">Stok </p>
            <p className="lg:text-base md:text-[12px] text-[14px]  text-white">({stok})</p>
          </div>
          <div className="flex w-full flex-row justify-between items-center bg-blue-500 py-2 px-3 rounded-lg text-center   ">
            <p className="lg:text-base md:text-[12px] text-[14px]  text-white text-center">
              simpan
            </p>
            

            <ShoppingCartIcon
              height={18}
              width={18}
              color="white"
              />
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
