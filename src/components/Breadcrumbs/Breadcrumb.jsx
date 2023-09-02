import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import BreadCrumbImage from "../../assets/Breadcrumb.webp";

const Breadcrumb = () => {
  return (
    <section
      className="h-72 md:h-80 lg:h-96 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${BreadCrumbImage})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-end justify-center text-white pb-8 lg:pb-12 text-xs md:text-sm">
        <div className="flex items-center justify-center gap-2">
          <Link
            to="/"
            className="hover:text-websiteRed duration-200 transition-all"
          >
            Home
          </Link>
          <BsArrowRight />
          <p className="capitalize cursor-pointer hover:text-websiteRed duration-200 transition-all">
            {window.location.pathname.substring(
              1,
              window.location.pathname.length
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
