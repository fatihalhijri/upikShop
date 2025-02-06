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
    <div className="bg-gray-100  md:py-12 py-5  -z-10">
      <div className="px-6 md:px-20 lg:px-36">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 px-6 md:px-20 lg:px-36">
          Testimoni
        </h2>
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={3000}
          arrows
          itemClass="md:px-4"
        >
          <ClientReviewCard
            img="/1_2.jpg"
            user="Fatih Al Hijri"
            role="Web Developer"
          />
          <ClientReviewCard
            img="/1_2.jpg"
            user="Ariiq Maazin Hibatullah"
            role="FullStack Developer"
          />
          <ClientReviewCard
            img="/1_2.jpg"
            user="Abdul Aziz"
            role="Graphic Designer"
          />
          <ClientReviewCard
            img="/1_2.jpg"
            user="Muhammad Fiqri"
            role="React Developer"
          />
          <ClientReviewCard
            img="/1_2.jpg"
            user="Fathir Anafi"
            role="UI/UX Designer"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewSlider;
