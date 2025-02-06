'use client';
import Image from "next/image";

export default function MenuSide() {
  
  return (
    <section className="">
      <div className=" absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[100px] text-left -z-10">
          <Image src={'/nipis-kiri.png'} width={300} height={300} className="h-[150px] w-[90px] lg:h-[200px] lg:w-[120px] md:h-[180px] md:w-[110px] "  alt={'sallad'} />
        </div>
        <div className="absolute -top-[100px] right-0 -z-10">
          <Image src={'/nipis-kanan.png'} width={300} className="h-[150px] w-[90px]  lg:h-[200px] lg:w-[120px] md:h-[180px] md:w-[110px] " height={300} alt={'sallad'} />
        </div>
      </div>
      
    </section>
  );
}