"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Auto3() {
  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, 48, { duration: 14 });
    return () => controls.stop();
  }, []);

  return (
    <>
      <div className="max-h-40 h-40 px-6 py-4 md:py-7 bg-white border rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-center items-center">
        <div className="flex flex-row md:items-end  items-center justify-center md:text-5xl text-3xl  font-bold ">
          <motion.pre className=" ">{rounded}</motion.pre>{" "}
          <span className="md:text-2xl text-base flex justify-center items-center"></span>
        </div>

        <h4 className="md:text-base text-sm font-medium text-gray-700">
          Mitra Teratas
        </h4>
      </div>
    </>
  );
}
