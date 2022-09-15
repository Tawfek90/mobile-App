import React from "react";
import "./smallscreen.css";
import { useGlobalContext } from "../context/Context";
import { Link } from "react-router-dom";

export default function SmallScreen() {
  const { productsData } = useGlobalContext();
  return (
    <div className="smallParent">
      <h3>explore products</h3>
      <div className="smallscreenProducts">
        <div className="smallScreenProductsContainer">
          {productsData.map((item) => {
            const { id, name, img, price, inStock } = item;
            return (
              <Link
                to={`${inStock > 0 ? "/product/${id}" : "/"}`}
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
        </div>
      </div>
    </div>
  );
}
