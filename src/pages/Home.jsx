import React from "react";

import HeroSection from "../components/HeroSection/HeroSection";
import About from "../components/About/About";
import MenuSection from "../components/MenuSection/MenuSection";
import Reservation from "../components/Reservation/Reservation";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <MenuSection />
      <Reservation />
      <MenuSection />
    </>
  );
};

export default Home;
