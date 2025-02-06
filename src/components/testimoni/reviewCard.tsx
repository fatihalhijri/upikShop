import { SparklesIcon, StarIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  user: string;
  role: string;
}

const ClientReviewCard = ({ img, user, role }: Props) => {
  return (
    <div className="m-4 bg-gray-200  rounded-xl shadow-lg hover:-rotate-3 transform transition-all duration-300 ease-out ">
      <div className="relative p-6">
        {/* Background Sparkle */}
        <SparklesIcon className="absolute top-8 left-6 w-20 h-20 text-primary opacity-10 pointer-events-none" />
        <SparklesIcon className="absolute bottom-4 right-4 w-16 h-16 text-primary opacity-10 pointer-events-none" />

        {/* Image */}
        <Image
          alt={user}
          src={img}
          width={80}
          height={80}
          className="rounded-full mx-auto border-4 border-primary"
        />

        {/* Review Text */}
        <p className="text-sm text-gray-600  mt-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta
          esse hic doloribus fugit consequuntur alias rem distinctio nihil nam!
        </p>

        {/* Stars */}
        <div className="flex items-center space-x-1 justify-center mt-[0.4rem]  ">
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-primary " />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-primary " />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-primary " />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-primary " />
          <StarIcon className="w-[1.4rem] h-[1.4rem] text-primary " />
        </div>

        {/* User Info */}
        <h2 className="text-lg font-semibold text-center mt-4 text-gray-800 ">
          {user}
        </h2>
        <p className="text-primary text-center">{role}</p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
