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
          {/* <p className="text-gray-500 text-justify text-sm md:text-base ">{deskripsi_produk}</p> */}
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

// "use client";
// import React from "react";
// import Image from "next/image";

// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { ShoppingCartIcon } from "@heroicons/react/16/solid";

// interface propsType {
//   img: string;
//   title: string;
//   desc: string;
//   price: string;
//   stok: number;
//   rating: number;
// }

// const generateRating = (rating: number) => {
//   switch (rating) {
//     case 1:
//       return (
//         <div className="flex gap-1 text-[20px] text-[#ff9529]">
//           <AiFillStar />
//           <AiOutlineStar />
//           <AiOutlineStar />
//           <AiOutlineStar />
//           <AiOutlineStar />
//         </div>
//       );
//     case 2:
//       return (
//         <div className="flex gap-1 text-[20px] text-[#ff9529]">
//           <AiFillStar />
//           <AiFillStar />
//           <AiOutlineStar />
//           <AiOutlineStar />
//           <AiOutlineStar />
//         </div>
//       );
//     case 3:
//       return (
//         <div className="flex gap-1 text-[20px] text-[#ff9529]">
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//           <AiOutlineStar />
//           <AiOutlineStar />
//         </div>
//       );
//     case 4:
//       return (
//         <div className="flex gap-1 text-[20px] text-[#ff9529]">
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//           <AiOutlineStar />
//         </div>
//       );
//     case 5:
//       return (
//         <div className="flex gap-1 text-[20px] text-[#ff9529]">
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//           <AiFillStar />
//         </div>
//       );

//     default:
//       break;
//   }
// };

// const ProductCard: React.FC<propsType> = ({
//   img,
//   title,
//   desc,
//   price,
//   stok,
//   rating,
// }) => {
//   return (
//     <div className="border border-gray-200 rounded-lg w-full max-w-[440px] h-auto shadow-md flex flex-col items-center overflow-hidden">
//       <div className="flex items-center justify-center h-[200px] bg-gray-100 overflow-hidden">
//         <Image
//           className="object-cover w-full h-full"
//           src={img}
//           width={300}
//           height={300}
//           alt={title}
//         />
//       </div>

//       <div className="px-4 py-2 flex flex-col justify-start items-start gap-4 w-full">
//         <div>
//           <h2 className="text-blackish text-sm md:text-lg font-bold">
//             {title}
//           </h2>
//           <div className="font-bold flex flex-row gap-3 items-center text-blackish">
//             Rp.{price}
//             <del className="text-gray-400 font-semibold text-sm">
//               Rp.{parseInt(price) + 50}
//             </del>
//           </div>
//         </div>
//         <div className="flex items-center gap-2">
//           <div>{generateRating(rating)}</div>
//           <div className="text-[14px] text-gray-600">({rating})</div>
//         </div>
//         <div className="flex gap-2 justify-between items-center w-full">
//           <div className="flex justify-between items-center bg-accent py-2 px-3 rounded-lg w-1/2">
//             <p className="text-[12px] md:text-base text-white">Stok</p>
//             <p className="text-[12px] md:text-base text-white">({stok})</p>
//           </div>
//           <div className="flex justify-between items-center bg-blue-500 py-2 px-3 rounded-lg w-1/2">
//             <p className="text-[12px] md:text-base text-white">Checkout</p>
//             <ShoppingCartIcon height={20} width={20} color="white" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// "use client";

// import React from "react";
// import ProductCard from "./ProductCard";

// const productsData = [
//   {
//     img: "/sabun-sunfia-b.png",
//     title: "Jeruk Nipis Segar Australia 1KG",
//     desc: "nipis -1",
//     rating: 4,
//     stok: 4,
//     price: "45.00",
//   },
//   {
//     img: "/sabun-sunfia-a.png",
//     title: "Jeruk Nipis Segar Australia 1KG",
//     desc: "nipis -1",
//     rating: 3,
//     stok: 4,
//     price: "45.00",
//   },
//   {
//     img: "/sabun-sunfia-c.png",
//     title: "Jeruk Nipis Segar Australia 1KG",
//     desc: "nipis -1",
//     rating: 2,
//     stok: 4,
//     price: "45.00",
//   },
//   {
//     img: "/nipis_bg.png",
//     title: "Jeruk Nipis Segar Tes 1KG",
//     desc: "nipis -1",
//     rating: 5,
//     stok: 4,
//     price: "45.00",
//   },
//   {
//     img: "/nipis_bg.png",
//     title: "Jeruk Nipis Segar Australia 1KG",
//     desc: "nipis -1",
//     rating: 1,
//     stok: 4,
//     price: "45.00",
//   },
// ];

// const NewProducts = () => {
//   return (
//     <div className="h-auto">
//       <div className=" pt-16 py-10 px-4 sm:px-6 md:px-10 lg:px-16">
//         <h2 className="font-medium text-2xl pb-4">New Products</h2>
//         <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {productsData.map((item, index) => (
//             <ProductCard
//               key={index}
//               img={item.img}
//               title={item.title}
//               desc={item.desc}
//               price={item.price}
//               stok={item.stok}
//               rating={item.rating}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewProducts;
