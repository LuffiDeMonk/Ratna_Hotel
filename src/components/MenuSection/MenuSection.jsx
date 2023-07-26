import React from "react";
import MenuOptions from "./MenuOptions";
import MenuCard from "./MenuCard";

const MenuSection = () => {
  return (
    <section className="bg-websiteGray py-32">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-semibold text-center">
          What kind of Foods we serve for you
        </h1>
        <p className="text-sm text-gray-400 text-center mt-4 mb-16">
          Who are in extremely love with eco friendly system.
        </p>
        <MenuOptions />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-14 px-5 lg:px-0">
          <MenuCard name="Chicken Burger" />
          <MenuCard name="Pecorino Romano" />
          <MenuCard name="Pecorino Romano" />
          <MenuCard name="Pecorino Romano" />
          <MenuCard name="Pecorino Romano" />
          <MenuCard name="Alfredo Pasta" />
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-websiteRed w-fit mt-10 text-white px-4 py-3 text-sm tracking-wider uppercase font-semibold outline-none focus:outline-none shadow-sm">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
