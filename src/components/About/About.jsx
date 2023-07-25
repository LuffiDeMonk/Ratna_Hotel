import React from "react";

import AboutImage from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="my-20 md:my-32 md:h-96 flex flex-col md:flex-row items-center justify-center max-w-screen-lg gap-6 lg:gap-13 mx-auto">
      <div className="flex flex-col justify-center gap-4 md:gap-8 h-full px-12 md:px-4 lg:px-0">
        <h1 className="text-3xl lg:text-4xl font-semibold">About Our Story</h1>
        <p className="text-sm leading-6 font-extralight text-gray-600">
          Who are in extremely love with eco friendly system. Lorem ipsum dolor
          sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <button className="bg-websiteRed w-fit text-white px-4 py-3 text-sm tracking-wider uppercase font-semibold outline-none focus:outline-none shadow-sm">
          View Full Menu
        </button>
      </div>
      <div className="w-full md:basis-1/2 md:shrink-0 px-12 md:px-4 lg:px-0 h-full">
        <img
          src={AboutImage}
          alt=""
          className="w-full h-96 md:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default About;
