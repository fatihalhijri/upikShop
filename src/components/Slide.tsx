import Image from "next/image";
import React from "react";

interface propsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle, price }) => {
  return (
    <div className="outline-none border-none relative md:rounded-2xl rounded-lg overflow-hidden ">
      <div className=" absolute left-[30px] md:left-[70px] max-w-[250px] lg:max-w-[650px] md:max-w-[350px] top-[50%] -translate-y-[50%] space-y-2 lg:space-y-4 bg-[#ffffffa2]  p-4 rounded-lg   ">
        <div className="">
          <h3 className="text-primary text-[12px] font-semibold md:text-[18px] lg:text-[26px] ">{title}</h3>
          <h2 className="text-primary text-[24px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2] uppercase">
            {mainTitle}
          </h2>
        </div>
        <h3 className="lg:text-[24px] md:text-[20px] text-[14px] text-gray-500">
          Harga mulai{" "}
          <b className="text-[20px] md:text-[24] lg:text-[30px] ">{price}</b>
          .000
        </h3>
        <div className=" bg-accent text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish ">
          Lebih Banyak
        </div>
      </div>
      <div className="w-[100%] h-auto md:h-[350px]  ">
        <Image
          className="w-[100%] h-[250px] lg:h-[480px] md:h-[300px] object-cover  "
          style={{ objectPosition: '25% 65%' }}
          src={img}
          alt="banner"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
};

export default Slide;
