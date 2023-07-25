import React from "react";
import MenuOptions from "./MenuOptions";

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
      </div>
    </section>
  );
};

export default MenuSection;
