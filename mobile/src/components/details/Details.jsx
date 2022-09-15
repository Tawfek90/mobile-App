import React, { useState } from "react";
import "./details.css";

export default function Details() {
  const [heart, setHeart] = useState(false);
  return (
    <div className="details">
      <div className="detailsContainer">
        <div className="imagesContainer">
          <div className="p1">
            <img src="../img/mobile.png" alt="mobile" />
            <img src="../img/mobile.png" alt="mobile" />
            <img src="../img/mobile.png" alt="mobile" />
            <img src="../img/mobile.png" alt="mobile" />
            <img src="../img/mobile.png" alt="mobile" />
          </div>
          <div className="p2">
            <img src="../img/mobile.png" alt="mobile" />
          </div>
        </div>
        <div className="information">
          <div className="information-container">
            <div className="apple">
              <div className="logo">
                <p>apple</p>
                <img
                  src={`${heart ? "../img/heart.png" : "../img/heart-1.png"}`}
                  alt="heart"
                  onClick={() => setHeart(!heart)}
                />
              </div>
              <div className="appleInfo">
                <p className="name">
                  apple-iphoxne13pro5g 128GB- sierra Blue (version)
                </p>
                <div className="stars">
                  <img src="../img/star.png" alt="star" />
                  <img src="../img/star.png" alt="star" />
                  <img src="../img/star.png" alt="star" />
                  <img src="../img/star-3.png" alt="star" />
                  <img src="../img/star-3.png" alt="star" />
                  <span>(506 reviews)</span>
                </div>
                <p className="price">$2500</p>
              </div>
            </div>

            <div className="stock">
              <p className="type">instock</p>
              <div className="numbers">
                <div className="plus">
                  <p>+</p>
                </div>
                <div className="one">
                  <p>1</p>
                </div>
                <div className="minus">
                  <p>-</p>
                </div>
              </div>
              <div className="uncolored">
                <div className="full">full price</div>
                <div className="installments">installments</div>
              </div>
              <div className="colored">
                <div className="imgcontainer">
                  <img src="../img/cib.png" alt="cib" />
                </div>
                <div className="imgcontainer">
                  <img src="../img/cib.png" alt="cib" />
                </div>
                <div className="imgcontainer">
                  <img src="../img/cib.png" alt="cib" />
                </div>
                <div className="imgcontainer">
                  <img src="../img/cib.png" alt="cib" />
                </div>
              </div>
            </div>

            <div className="memory">
              <p>memory</p>
              <div className="memoryContainer">
                <div className="size active">
                  <p>128 gb</p>
                  <p>$999.00</p>
                </div>
                <div className="size">
                  <p>256 gb</p>
                  <p>$999.00</p>
                </div>
                <div className="size">
                  <p>512 gb</p>
                  <p>$999.00</p>
                </div>
                <div className="size">
                  <p>1 tb</p>
                  <p>$999.00</p>
                </div>
              </div>
            </div>

            <div className="color">
              <p>color</p>
              <div className="colorContainer">
                <div className="light">
                  <p>silver</p>
                  <div className="lightCircle"></div>
                </div>

                <div className="blue">
                  <p>sierra blue</p>
                  <div className="blueCircle"></div>
                </div>
              </div>
            </div>

            <div className="insurance">
              <p>insurancs</p>
              <div className="insuranceContainer">
                <div className="light">
                  <p>1 year</p>
                  <p>$99.00</p>
                </div>
                <div className="black">
                  <p>2 year</p>
                  <p>$159.00</p>
                </div>
              </div>
            </div>
            <button className=" cart btn btn-primary btn-block">
              {" "}
              add to cart
            </button>
            <hr />
            <div className="free">
              <div className="shipping">
                <img src="../img/car.png" alt="car" />
                <p>free shipping arrives by tue nov 23</p>
              </div>
              <div className="day">
                <img src="../img/cube.png" alt="car" />
                <p>free 10-day return window starts dec 26th details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
