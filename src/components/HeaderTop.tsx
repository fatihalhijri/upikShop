// import React from "react";
// import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

// const HeaderTop = () => {
//   return (
//     <div className="border-b border border-gray-200 hidden sm:block ">
//       <div className="container py-4">
//         <div className="flex justify-between items-center">
//           <div className="hidden lg:flex gap-1">
//             <div className="header_top___icon_wrapper">
//               <BsFacebook />
//             </div>
//             <div className="header_top___icon_wrapper">
//               <BsTwitter />
//             </div>
//             <div className="header_top___icon_wrapper">
//               <BsLinkedin />
//             </div>
//             <div className="header_top___icon_wrapper">
//               <BsInstagram />
//             </div>
//           </div>
//           <div className="text-gray-500 text-[12px] uppercase">
//             <b className="uppercase">free shopping</b> this week order over -$55
//           </div>

//           <div className="flex gap-4">
//             <select name="currency"
//               className="text-gray-500 text-[12px] w-[70px]"
//               id="currency">
//               <option value="USD $">USD $</option>
//               <option value="UER $">UER $</option>
//               <option value="INR $">INR $</option>
//             </select>
//             <select className="text-gray-500 text-[12px] w-[80px]" id="language" name="language">
//               <option value="English">English</option>
//               <option value="French ">French</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeaderTop;

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
      <div className="container mx-auto   py-4 px-6 md:px-20 lg:px-[136px]">
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
          {/* <div className="flex gap-4 text-gray-500 text-[16px] navbar__link relative">{JSON.stringify(session?.user?.role)} </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
