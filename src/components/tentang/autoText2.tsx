"use client";

import { PercentBadgeIcon, PlusIcon } from "@heroicons/react/16/solid";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

export default function Auto2() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 5 });
    return () => controls.stop();
  }, []);

  return (
    <>
      <div className="md:max-h-52 max-h-40 h-48 px-6 py-4 md:py-7 bg-white border rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-center items-center">
        <div className="flex flex-row md:items-end items-end justify-center md:text-5xl text-3xl  font-bold ">
          <motion.pre className=" ">{rounded}</motion.pre>{" "}
          <span className="md:text-2xl text-base flex justify-center items-center">
            Rb
            <PlusIcon width={20} height={20} className="md:h-6 md:w-6 h-4 w-4" />
          </span>
        </div>

        
        <h4 className="md:text-base text-sm font-medium text-gray-700 text-center">Pengunjung Bulanan</h4>
      </div>
    </>
  );
}
