
"use client";
import React, { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const HeaderTop = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDateTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      // hour: "2-digit",
      // minute: "2-digit",
      // second: "2-digit",
    };
    return date.toLocaleDateString("id-ID", options);
  };

  return (
    <div className=" border-b border-gray-200 ">
      <div className=" mx-auto   py-4 px-6 md:px-20 lg:px-36 ">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <div className="header_top___icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_top___icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_top___icon_wrapper">
              <BsLinkedin />
            </div>
            <div className="header_top___icon_wrapper">
              <BsInstagram />
            </div>
          </div>
          
          <div className="text-gray-500 md:text-[16px] text-sm">
            {formatDateTime(dateTime)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
