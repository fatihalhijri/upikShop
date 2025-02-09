import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const handleClick = () => {
    window.open("https://wa.me/6287878991905", "_blank");
  };

  return (
    <section className="md:mt-36  w-full mx-auto  md:py-5 px-6 md:px-20 lg:px-36">
      <div className="flex justify-center md:h-auto h-screen items-center">
        <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-12">
          {/* Section Text */}
          <div className="w-full lg:w-1/2 lg:text-left md:text-center text-center  flex flex-col">
            <h2 className="lg:font-bold md:font-semibold sm:font-medium  text-3xl xl:text-5xl lg:text-4xl md:text-4xl text-blackish leading-snug">
              Cuci Apa Saja dengan Sabun Serba Guna Kami. Beli Sekarang!
            </h2>
            <p className="md:text-lg text-sm pt-6 text-gray-600 lg:text-justify md:text-center text-center">
              Selamat datang di sunfia, tempat anda dapat menemukan sabun
              berkualitas,sayur,dan buah buahan dengan harga terjangkau
            </p>
            <div className="flex xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col justify-center sm:justify-start gap-3 xl:gap-5 lg:gap-3 md:gap-2">
              <button
                onClick={handleClick}
                className="mt-6 px-4 lg:px-6   py-2  rounded-md  bg-accent hover:bg-green-700 transition-all duration-300 flex justify-center items-center w-full sm:w-auto"
              >
                <p className="text-white text-sm sm:text-lg flex items-center gap-3">
                  Pesan Sekarang
                  <ArrowRightCircleIcon className="h-6 w-6 sm:h-8 sm:w-8" />
                </p>
              </button>

              <div>
                <Link href={"/kategori"}>
                  <div className="mt-6 px-4 lg:px-6 py-2 rounded-md  bg-accent hover:bg-green-700 transition-all duration-300 flex justify-center items-center w-full sm:w-auto">
                    <p className="text-white text-sm sm:text-lg flex items-center gap-3">
                      Lihat Lainnya
                      <ArrowRightCircleIcon className="h-6 w-6 sm:h-8 sm:w-8" />
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-56  lg:h-1/4  lg:w-1/4  lg:flex md:hidden sm:hidden hidden  justify-center items-end ">
            <Image
              alt="sabun"
              src={"/sabun.webp"}
              width={400}
              height={400}
              className=""
            />
          </div>
        </div>
        <section className="block md:hidden">
          <div className=" absolute left-0 right-0 w-full justify-start">
            <div className="absolute left-0 top-[170px] text-left -z-10">
              <Image
                src={"/nipis-kiri.webp"}
                width={400}
                height={400}
                className="h-[150px] w-[90px] lg:h-[200px] lg:w-[120px] md:h-[180px] md:w-[110px] "
                alt={"sallad"}
              />
            </div>
            <div className="absolute top-[170px] right-0 -z-10">
              <Image
                src={"/nipis-kanan.webp"}
                width={400}
                className="h-[150px] w-[90px]  lg:h-[200px] lg:w-[120px] md:h-[180px] md:w-[110px] "
                height={400}
                alt={"sallad"}
              />
            </div>
          </div>
        </section>
      </div>
      <section className="md:block hidden">
        <div className=" absolute left-0 right-0 w-full justify-start ">
          <div className="absolute left-0 -top-[100px] text-left -z-10">
            <Image
              src={"/nipis-kiri.png"}
              width={400}
              height={400}
              className="h-[150px] w-[90px] lg:h-[200px] lg:w-[120px] md:h-[180px] md:w-[110px] "
              alt={"sallad"}
            />
          </div>
          <div className="absolute -top-[100px] right-0 -z-10">
            <Image
              src={"/nipis-kanan.png"}
              width={400}
              className="h-[150px] w-[90px]  lg:h-[200px] lg:w-[120px] md:h-[180px] md:w-[110px] "
              height={400}
              alt={"sallad"}
            />
          </div>
        </div>
      </section>
    </section>
  );
}
