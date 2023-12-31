import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import HeroImage from "../../assets/Breadcrumb.webp";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="h-screen relative">
      <img src={HeroImage} alt="" className="w-full h-full object-cover" />
      <div
        className="text-white absolute top-60 sm:top-60 left-6 md:top-56 lg:left-48"
        data-aos="fade-up"
      >
        <h1 className="text-sm font-light tracking-[4px]">
          WIDE OPTIONS OF CHOICE
        </h1>
        <h1 className="my-5 md:my-8 text-4xl lg:text-6xl tracking-wide font-extrabold">
          Delicious Recipes
        </h1>
        <h3 className="max-w-lg lg:max-w-[32rem] text-sm lg:text-[15px] leading-7 md:tracking-wider">
          Inappropriate behavior is often laughed off as “boys will be boys,”
          women face higher conduct standards especially in the workplace.
          That’s why it’s crucial that, as women.
        </h3>
        <button className="bg-websiteRed text-white mt-8 md:mt-10 px-4 py-3 text-sm tracking-wider uppercase font-semibold">
          Check Out Menu
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
