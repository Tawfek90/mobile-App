import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";
import { useGlobalContext } from "../context/Context";
function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow rightArrow">
      <img src="./img/rightArrow.png" onClick={onClick} alt="right arrow" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow leftArrow">
      <img src="./img/leftArrow.png" onClick={onClick} alt="left arrow" />
    </div>
  );
}

export default function MobileSlider() {
  const { sliderData } = useGlobalContext();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 1500,
  };
  return (
    <>
      <Slider {...settings}>
        {sliderData.map((item) => {
          return <img src={item.img} key={item.id} alt="sliderImage" />;
        })}
      </Slider>
    </>
  );
}
