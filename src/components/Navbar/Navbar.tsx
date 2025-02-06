"use client";
import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeaderTop from "../HeaderTop";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

interface Props {
  open: () => void;
}

const Nav = ({ open }: Props) => {
  const [navSticky, setNavSticky] = useState(false);
  const [darkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 30) {
        setNavSticky(true);
      }
      if (window.scrollY <= 30) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  const stickyStyle = navSticky
    ? "backdrop-blur-sm  bg-white/95 shadow-black/20 shadow-sm"
    : "";
  return (
    <div
      className={`fixed w-[100%]  ${stickyStyle} transition-all duration-0 z-[1000] 
       `}
    >
      <HeaderTop />
      <div className="flex items-center h-[8vh] justify-between mx-auto   w-[100%] px-6 md:px-20 lg:px-40 ">
        <div className=" text-center ">
          <h2 className="text-accent cursor-pointer font-bold md:text-4xl text-2xl ">
            {" "}
            <Link href={"/"}>SUNFIA</Link>{" "}
          </h2>
        </div>
        <div className="hidden lg:block">
          <div className="container">
            <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
              <div className="relative group ">
                <Link href="/" className="navbar__link cursor-pointer">
                  BERANDA
                </Link>
              </div>

              <Link href={"/tentang"} className="navbar__link cursor-pointer relative">
                TENTANG
              </Link>
              {/* <div className="relative group">
                <Link href="/kategori" className="navbar__link cursor-pointer">
                  KATEGORI
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-md rounded-md p-2 min-w-[150px] z-10">
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Sabun Batang
                  </Link>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Accessories
                  </Link>
                </div>
              </div> */}
              <Link href={"/kategori"} className="navbar__link cursor-pointer relative">
                KATEGORI
              </Link>
              <Link href={"/kontak"} className="navbar__link cursor-pointer relative">
                KONTAK
              </Link>
              
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
          <BiUser />
          {/* untuk hit API
          <UserActionButton/> */}
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

        <Bars3CenterLeftIcon
          onClick={open}
          className="w-[2.3rem] lg:hidden h-[2.3rem] text-black rotate-180"
        ></Bars3CenterLeftIcon>
      </div>
    </div>
  );
};

export default Nav;
