import React from "react";
import "./products.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useGlobalContext } from "../context/Context";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
function SampleNextArrow({ onClick }) {
  return (
    <div className=" productsrightArrow">
      {" "}
      <img src="../img/rightArrow.png" onClick={onClick} alt="right-arrow" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className=" productsleftArrow">
      {" "}
      <img src="../img/leftArrow.png" onClick={onClick} alt="left-arrow" />
    </div>
  );
}
export default function Products() {
  const { productsData, loading } = useGlobalContext();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="products">
      <div className="productsContainer">
        <h1>explore products</h1>
        <Slider {...settings}>
          {productsData.map((item) => {
            const {
              id,
              name,
              img,
              price,

              inStock,
            } = item;
            return (
              <Link
                to={`${inStock > 0 ? `/product/${id}` : "/"}`}
                key={item.id}
              >
                <div className="category">
                  <img src={img[0]} alt="categoryImage" />
                  <div className="name">{name}</div>
                  <div className="price">
                    <p>${price}</p>
                    <p
                      className={`stock ${
                        inStock > 0 ? "text-success" : "text-danger"
                      }`}
                    >
                      {inStock > 0 ? "instock" : "out of stock"}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
