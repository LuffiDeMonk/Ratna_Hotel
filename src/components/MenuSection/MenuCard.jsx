import React from "react";

import { FiPlus } from "react-icons/fi";

import CardImage from "../../assets/CardImage.jpg";

const MenuCard = ({ name }) => {
  return (
    <div className="h-32 max-h-36 p-2.5 rounded-lg bg-white shadow-md">
      <div className="h-full flex gap-6">
        <div className="h-24 basis-[25%] shrink-0">
          <img src={CardImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="basis-[75%]">
          <div className="flex justify-between items-start gap-4">
            <h2 className="text-sm md:text-base font-semibold">{name}</h2>
            <button className="border border-websiteRed hover:bg-websiteRed text-websiteRed hover:text-websiteGray duration-200 transition-all font-extrabold py-0.5 md:py-1.5 lg:py-1.5 px-0.5 md:px-1.5 lg:px-3 rounded-md text-sm outline-none focus:outline-none">
              <FiPlus />
            </button>
          </div>
          <p className="text-xs font-light text-gray-400 my-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
            voluptatum.
          </p>
          <p className="text-websiteRed text-sm md:text-lg font-semibold">
            $29
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
