import React from "react";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/About/About";

const App = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
};

export default App;
