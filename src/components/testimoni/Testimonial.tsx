import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./reviewCard";

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1300 }, items: 3 },
  tablet: { breakpoint: { max: 1300, min: 764 }, items: 2 },
  mobile: { breakpoint: { max: 764, min: 0 }, items: 1 },
};

const ReviewSlider = () => {
  return (
    <div className="bg-gray-100  md:py-12 py-5 -z-10 px-6 md:px-20 lg:px-32 ">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 ">
          Testimoni
        </h2>
        <Carousel
        
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          
          itemClass="md:px-4"
          className="py-3"
        >
          <ClientReviewCard
            img="/1_2.jpg"
            user="Fatih Al Hijri"
            role="Pengusaha"
            desc="Saya sangat puas dengan kualitas sabun yang saya beli di toko ini. Sabunnya sangat lembut dan wanginya enak!"
          />
          <ClientReviewCard
            img="/1_2.jpg"
            user="Ariiq Maazin Hibatullah"
            role="Juragan"
            desc="Toko ini memiliki kualitas produk yang sangat baik, terutama sabun dan sayur-buahan.
"
          />
          <ClientReviewCard
            img="/1_2.jpg"
            user="Abdul Aziz"
            role="Pemuda "
            desc="Pelayanan di toko ini sangat ramah dan cepat, membuat pelanggan merasa puas dan nyaman.
"
          />
          <ClientReviewCard
            img="/1_2.jpg"
            user="Muhammad Fiqri"
            role="Pemuda"
            desc="Saya sangat puas dengan kualitas sabun yang saya beli di toko ini. Sabunnya sangat lembut dan wanginya enak!"
          />
          <ClientReviewCard
            img="/1_2.jpg"
            user="Fathir Anafi"
            role="Pemuda"
            desc="Harga di toko ini sangat terjangkau dan kompetitif"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewSlider;
