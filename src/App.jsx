import React from "react";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";
import MenuSection from "./components/MenuSection/MenuSection";

import "swiper/css";

const App = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <HeroSection />
      <About />
      <MenuSection />
    </div>
  );
};

export default App;
