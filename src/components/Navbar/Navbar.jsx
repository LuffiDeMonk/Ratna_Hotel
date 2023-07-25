import { useEffect, useState } from "react";

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
          <img src="/Logo.png" alt="" className="w-32 h-32 object-contain" />
        </div>
      )}
      <div
        className={`max-w-screen-lg mx-auto ${
          toggleLogo ? "border-y-[0.2px] border-gray-300" : "border-none"
        } h-16 flex items-center justify-center gap-5 text-xs text-white list-none uppercase `}
      >
        {NavbarMenu?.map((item) => (
          <li
            className="hover:text-websiteText duration-300 transition-all cursor-pointer font-[500] hidden md:block"
            key={item}
          >
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
