import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const handleClick = () => {
    window.open("https://wa.me/6287878991905", "_blank");
  };

  return (
    <section className="md:mt-36  w-full   container mx-auto  md:py-5 px-6 md:px-20 lg:px-36">
      <div className="flex justify-center md:h-auto h-screen items-center">
        <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-12">
          {/* Section Text */}
          <div className="w-full md:w-1/2 text-center md:text-left flex flex-col">
            <h2 className="font-bold text-3xl md:text-4xl text-blackish leading-snug">
              Cuci Apa Saja dengan Sabun Serba Guna Kami. Beli Sekarang!
            </h2>
            <p className="md:text-lg text-sm pt-6 text-gray-600 text-justify">
              Selamat datang di sunfia, tempat anda dapat menemukan sabun
              berkualitas,sayur,dan buah buahan dengan harga terjangkau
            </p>
            <div className="flex lg:flex-row md:flex-col flex-col  justify-start md:gap-5 gap-2">
              <button
                onClick={handleClick}
                className="mt-8 px-6 py-1 md:py-3 md:rounded-full rounded-md bg-accent hover:bg-green-700 transition-all duration-300 flex justify-center items-center"
              >
                <p className="text-white md:text-lg flex justify-between gap-5  items-center text-center ">
                  Kirim Pesan Sekarang
                  <ArrowRightCircleIcon className="h-8 w-8" />
                </p>
              </button>
              <Link href={"/kategori"}>
                <button className="mt-8 px-6 py-1 md:py-3 md:rounded-full rounded-md bg-accent hover:bg-green-700 transition-all duration-300 flex justify-center items-center">
                  <p className="text-white md:text-lg flex justify-between gap-5  items-center text-center ">
                    Lihat Lebih Banyak
                    <ArrowRightCircleIcon
                      height={18}
                      width={18}
                      className="h-8 w-8"
                    />
                  </p>
                </button>
              </Link>
            </div>
          </div>

          {/* Section Image */}
          <div className="w-56 lg:h-1/4  lg:w-1/4 hidden md:flex justify-end items-end ">
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
