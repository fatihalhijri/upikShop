"use client";
import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeaderTop from "../HeaderTop";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

const BefNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navSticky, setNavSticky] = useState(false);

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Pastikan elemen yang diklik bukan bagian dari navbar
      if (
        isOpen &&
        !event
          .composedPath()
          .some((el) => (el as HTMLElement).id === "navbar-menu")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  const stickyStyle = navSticky
    ? "backdrop-blur-sm  bg-white/95 shadow-black/20 shadow-sm"
    : "";

    const navOpenStyle = navSticky
    ? "translate-y-0 transition-all duration-300"
    : "translate-y-[-100%] transition-all duration-300";

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`${stickyStyle}  bg-white/95 md:bg-none  transition-all w-full
       `}
    >
      <div className="">
        {/* <div
        onClick={handleOutsideClick}
        className={`fixed ${navOpenStyle} top-0 transform transition-all duration-300 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div> */}
        <HeaderTop />
        <div className="" onClick={handleOutsideClick}>
          <div
            className={`flex items-center  h-[8vh] justify-between    z-[10006] px-6 md:px-20 lg:px-36 `}
          >
            <h2 className="text-accent cursor-pointer font-bold md:text-4xl text-2xl ">
              {" "}
              <Link href={"/"}>SUNFIA</Link>{" "}
            </h2>
            <div id="navbar-menu" className={`hidden lg:block `}>
              <div className="">
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
                  <Link
                    href="/"
                    className="navbar__link cursor-pointer relative "
                  >
                    BERANDA
                  </Link>

                  <Link
                    href={"/tentang"}
                    className="navbar__link cursor-pointer relative "
                  >
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
                  <Link
                    href={"/kategori"}
                    className="navbar__link cursor-pointer relative "
                  >
                    KATEGORI
                  </Link>
                  <Link
                    href={"/kontak"}
                    className="navbar__link cursor-pointer relative "
                  >
                    KONTAK
                  </Link>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex gap-4 text-gray-500 text-[30px] ">
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
            <div className=" flex items-center lg:hidden md:flex">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="navbar-menu"
                aria-expanded="false"
              >
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* <Bars3CenterLeftIcon
          onClick={open}
          className="w-[2.3rem] lg:hidden h-[2.3rem] text-black rotate-180"
          ></Bars3CenterLeftIcon> */}
        </div>
      </div>
      {isOpen && (
        <div
          id="navbar-menu"
          className={`lg:hidden absolute transform transition-all duration-300 delay-300  backdrop-blur`}
        >
          <div className="px-6 md:px-20 lg:px-36">
            <div className="flex flex-col w-fit gap-4  font-medium py-4 text-blackish ">
              <Link
                href="/"
                className="navbar__link relative text-accent text-base "
              >
                Beranda
              </Link>
              <Link
                href={"/tentang"}
                className="navbar__link relative text-accent text-base "
              >
                Tentang
              </Link>

              <Link
                href={"/kategori"}
                className="navbar__link relative text-accent text-base "
              >
                Kategori
              </Link>

              <Link
                href={"/kontak"}
                className="navbar__link relative text-accent text-base "
              >
                Kontak
              </Link>
            </div>
          </div>

          <div className="hidden  lg:flex gap-4 text-gray-500 text-[30px]">
            {/* <BiUser /> */}

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
      )}
    </nav>
  );
};

export default BefNavbar;
