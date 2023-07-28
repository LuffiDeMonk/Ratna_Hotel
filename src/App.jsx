import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";

import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

import "swiper/css";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-Poppins">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
