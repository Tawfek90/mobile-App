import React from "react";
import Navbar from "../../components/navbar/Navbar";
import MobileSlider from "../../components/slider/Slider";
import Products from "../../components/products/Products";
import Subscribe from "../../components/subscribe/Subscribe";
import Footer from "../../components/footer/Footer";
import SmallScreen from "../../components/smallscreenProducts/SmallScreen";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <MobileSlider />
      <Products />
      <SmallScreen />
      <Subscribe />
      <Footer />
    </div>
  );
}
