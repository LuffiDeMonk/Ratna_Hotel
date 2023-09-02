import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink } from "react-router-dom";

const NavbarMenu = [
  "home",
  "about",
  "menu",
  "gallery",
  "blog",
  "pages",
  "contact",
];

const Navbar = () => {
  const [toggleLogo, setToggleLogo] = useState(true);

  const handleScroll = () => {
    if (window.scrollY < 80) {
      setToggleLogo(true);
    }
    if (window.scrollY > 80) {
      setToggleLogo(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        toggleLogo ? "bg-transparent" : "bg-black/80"
      }`}
    >
      {toggleLogo && (
        <div className="flex items-center justify-center">
          <LazyLoadImage
            src="/Logo.png"
            width="128px"
            height="128px"
            effect="blur"
            visibleByDefault={true}
          />
        </div>
      )}
      <div
        className={`max-w-screen-lg mx-auto ${
          toggleLogo ? "border-y-[1px] border-gray-300/30" : "border-none"
        } h-16 flex items-center justify-center gap-5 text-xs text-white list-none uppercase `}
      >
        {NavbarMenu?.map((item) => (
          <NavLink
            to={`/${item === "home" ? "" : item}`}
            className={`hover:text-websiteText duration-300 transition-all cursor-pointer font-[500] hidden md:block`}
            key={item}
          >
            {item}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
