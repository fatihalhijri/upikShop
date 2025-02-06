"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Headermain = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 py-6">
      <div className="container flex flex-wrap justify-between items-center gap-8">
        <div className="font-bold text-4xl text-center text-blackish">
          <h2 className="text-accent">SUNFIA</h2>
        </div>

        <div
          className="lg:hidden text-blackish text-3xl cursor-pointer "
          onClick={toggleMenu}
        >
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col lg:flex-row lg:items-center gap-6 text-blackish font-medium absolute lg:static top-[70px] left-0 right-0 bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none z-50`}
        >
          <div className="relative group ">
            <Link href="#" className="navbar__link">
              HOME
            </Link>
            {/* Dropdown menu */}

            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-md p-2 min-w-[150px] z-10 ">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Submenu 1
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Submenu 2
              </Link>
            </div>
          </div>

          <div className="relative group">
            <Link href="#" className="navbar__link">
              CATEGORIES
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-md p-2 min-w-[150px] z-10">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Clothing
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Accessories
              </Link>
            </div>
          </div>
          <div className="relative group">
            <Link href="#" className="navbar__link">
              MEN'S
            </Link>
          </div>
          <div className="relative group">
            <Link href="#" className="navbar__link">
              JEWELRY
            </Link>
          </div>
          <div className="relative group">
            <Link href="#" className="navbar__link">
              PERFUME
            </Link>
          </div>
          <div className="relative group">
            <Link href="#" className="navbar__link">
              BLOG
            </Link>
          </div>
          <div className="relative group">

          <Link href="#" className="navbar__link">
            HOT OFFERS
          </Link>
          </div>
        </div>

        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser />

          <div className="relative">
            <FiHeart />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
          <div className="relative">
            <HiOutlineShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headermain;
