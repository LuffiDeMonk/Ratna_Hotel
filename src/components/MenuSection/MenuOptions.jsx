import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import BreakFastImage from "../../assets/breakfast.png";
import LunchImage from "../../assets/lunch.png";
import DinnerImage from "../../assets/dinner.png";
import BudgetImage from "../../assets/budget.png";
import SaladImage from "../../assets/salad.png";
import Beverage from "../../assets/beverage.png";
import Snacks from "../../assets/snacks.png";

const categoryData = [
  {
    id: Math.floor(Math.random() * 3000),
    name: "Breakfast",
    image: BreakFastImage,
  },
  {
    id: Math.floor(Math.random() * 3000),
    name: "Lunch",
    image: LunchImage,
  },
  {
    id: Math.floor(Math.random() * 3000),
    name: "Dinner",
    image: DinnerImage,
  },
  {
    id: Math.floor(Math.random() * 3000),
    name: "Budget",
    image: BudgetImage,
  },
  {
    id: Math.floor(Math.random() * 3000),
    name: "Salad",
    image: SaladImage,
  },
  {
    id: Math.floor(Math.random() * 3000),
    name: "Beverage",
    image: Beverage,
  },
  {
    id: Math.floor(Math.random() * 3000),
    name: "Snacks",
    image: Snacks,
  },
];

const MenuOptions = () => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={20}
      breakpoints={{
        1280: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5.3,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        440: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="h-40 max-h-44"
    >
      {categoryData?.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="w-full h-full rounded-md shadow-lg bg-white p-4 group">
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-websiteRed flex items-center justify-center">
                <img
                  src={item.image}
                  alt=""
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
            <h3 className="text-sm text-gray-600 font-light text-center my-4 capitalize group-hover:text-websiteText transition-all duration-300 cursor-pointer">
              {item.name}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MenuOptions;
