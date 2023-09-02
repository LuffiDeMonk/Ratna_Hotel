import React, { useState } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [newsLetter, setNewsLetter] = useState();
  return (
    <section className="bg-websiteRed text-white px-2 lg:px-16 xl:px-28 py-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold mb-4">Opening Hours</h2>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-light">Monday-Friday</h2>
          <p className="text-sm">08:00 am - 10:00 pm</p>
        </div>
        <div className="h-[1px] bg-white/40 my-4" />
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-light">Saturday</h2>
          <p className="text-sm">08:00 am - 10:00 pm</p>
        </div>
        <div className="h-[1px] bg-white/40 my-4" />
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-light">Sunday</h2>
          <p className="text-sm">08:00 am - 10:00 pm</p>
        </div>
        <div className="h-[1px] bg-white/40 my-4" />
      </div>
      <div className="flex flex-col gap-6 cursor-pointer">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <p className="text-sm font-light">
          56/8, los angeles, rochy beach, Santa monica, United states of america
          - 1205
        </p>
        <div className="">
          <h2 className="text-lg font-semibold">012-6532-568-9746</h2>
          <h2 className="text-lg font-semibold">012-6532-569-9748</h2>
        </div>
        <div className="flex items-center gap-5">
          <div className="w-9 h-9 rounded-full border-2 border-white/30 text-lg flex items-center justify-center cursor-pointer">
            <FaFacebookF />
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-white/30 text-lg flex items-center justify-center cursor-pointer">
            <FaInstagram />
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-white/30 text-lg flex items-center justify-center cursor-pointer">
            <FaTwitter />
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Newsletter</h2>
        <p className="text-sm">
          You can trust us. we only send promo offers, not a single spam.
        </p>
        <div className="h-10 rounded-full overflow-hidden relative">
          <input
            type="text"
            value={newsLetter}
            onChange={(e) => setNewsLetter(e.target.value)}
            placeholder="Enter Your Email"
            className="w-full h-full px-4 py-2 outline-none border-none focus:outline-none placeholder:text-sm placeholder:text-gray-400 text-black text-sm"
          />
          <button className="w-8 h-8 rounded-full text-white text-[16px] bg-websiteRed flex items-center justify-center absolute top-1/2 right-1 -translate-y-1/2 outline-none focus:outline-none">
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Footer;
