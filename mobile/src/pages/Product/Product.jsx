import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Footer from "../../components/footer/Footer";
import SmallScreen from "../../components/smallscreenProducts/SmallScreen";
import Details from "../../components/details/Details";

export default function Product() {
  return (
    <div className="singleProduct">
      <Navbar />
      <Details />
      <Products />
      <SmallScreen />
      <Footer />
    </div>
  );
}
