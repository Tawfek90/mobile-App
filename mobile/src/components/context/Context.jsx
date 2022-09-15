import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
const appcontext = React.createContext();
export const useGlobalContext = () => {
  return useContext(appcontext);
};
export default function Context({ children }) {
  const [productsData, setProductsData] = useState([]);
  const [sliderData, setSliderdata] = useState([]);
  const [loading, setLoading] = useState(false);
  //fetch products data
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/products")
      .then((response) => {
        setLoading(false);
        setProductsData(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  //fetch sliderData
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://63189f2cf6b281877c71eab0.mockapi.io/slider")
      .then((response) => {
        setLoading(false);
        setSliderdata(response.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);
  return (
    <appcontext.Provider
      value={{
        productsData,
        sliderData,
        loading,
      }}
    >
      {children}
    </appcontext.Provider>
  );
}
