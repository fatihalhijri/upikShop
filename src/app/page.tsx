"use client";
import Link from "next/link";
import HeroSlide from "../components/Hero";
import Hero from "../components/Beranda/Hero";
import NewProducts from "../components/produk/NewProducts";
import ReviewSlider from "../components/testimoni/Testimonial";

export default function Page() {
  return (
    <section className="">
      <Hero />
      <HeroSlide />
      <NewProducts />
      <ReviewSlider />
      <div className="h-full py-20 px-6 md:px-20 lg:px-36">
        <div className="flex justify-center items-center flex-col ">
          <h2 className="text-primary text-[24px] md:text-[30px] lg:text-[44px] font-bold leading-[1.2] ">
            Selamat Datang Di UpikShop!
          </h2>
          <h3 className="text-gray-800 text-[12px]  md:text-[18px] max-w-xl md:max-w-3xl text-center py-4 ">
            Dapatkan sabun yang sesuai dengan kebutuhan anda.pilih berbagai
            variant sabun kami
          </h3>
          <Link href={"/kategori"}>
            <button
              className=" px-6 py-1 md:py-3 md:rounded-full rounded-md bg-accent hover:bg-green-700 transition-all duration-300 flex justify-center items-center"
            >
              <p className="text-white md:text-lg flex justify-between gap-5  items-center text-center ">
                Lihat Sekarang
              </p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
