"use client";

import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";


const HeroSlide = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseonHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: "/sabunBatang.webp",
      title: "Sabun Batang",
      mainTitle: "Sabun Batang Bervariasi ",
      price: "Rp.10",
    },
    {
      id: 1,
      img: "/hero1.webp",
      title: "Sabun Terpopular",
      mainTitle: "Sabun  Cuci  Serba Guna",
      price: "Rp.55",
    },
    {
      id: 2,
      img: "/makanan.webp",
      title: "Trending Item",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "Rp.20",
    },
  ];

  return (
    <div className="px-6 md:px-20 lg:px-36 ">
      <div className="container pt-6 lg:pt-0  md:h-[350px] h-[200] ">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide key={item.id} img={item.img} title={item.title} mainTitle={item.mainTitle} price={item.price} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSlide;
