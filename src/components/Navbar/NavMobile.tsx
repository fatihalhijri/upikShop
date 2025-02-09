import { XMarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { BiUser } from "react-icons/bi";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";

interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ closeNav, showNav }: Props) => {
  const navOpenStyle = showNav ? "translate-x-0" : "translate-x-[-100%]";
  // Function to close nav when clicking outside of the nav menu
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeNav();
    }
  };
  return (
    <div className="">
      <div
        onClick={handleOutsideClick}
        className={`fixed ${navOpenStyle} top-0 transform transition-all duration-300 z-[10000] left-0 right-0 bottom-0 bg-black opacity-70 w-[100vw] h-[100vh]`}
      ></div>
      <ul
        className={`text-white ${navOpenStyle} fixed flex items-center justify-center flex-col h-[100%] w-[60%] transform transition-all duration-300 delay-300 bg-white/70 dark:bg-darkTua backdrop-blur space-y-14  z-[10006]  `}
      >
        <div className="">
          <div className="flex flex-col w-fit gap-10 mx-auto font-medium py-4 text-blackish">
            <Link href="/" className="navbar__link relative" >
              BERANDA
            </Link>
            <Link href={"/tentang"} className="navbar__link relative">
              TENTANG
            </Link>

           
            <Link href={"/kategori"} className="navbar__link relative">
              KATEGORI
            </Link>

            <Link href={"/kontak"} className="navbar__link relative">
              KONTAK
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
        <XMarkIcon
          onClick={closeNav}
          className="absolute top-[-1.4rem]  right-[1.4rem] h-[2.2rem] text-black dark:text-white "
        ></XMarkIcon>
      </ul>
    </div>
  );
};

export default NavMobile;
