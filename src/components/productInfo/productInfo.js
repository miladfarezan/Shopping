import React, { useState } from "react";
import { useParams } from "react-router";

import Header from "../header/header";
import Products from "../products";
import "./productInfo.css";
import ImageSlider from "../../components/image-slider/imageSlider";
import { SliderDataVideoCamera } from "../image-slider/slider-data/slider-data-video-camera";
import { Link } from "react-router-dom";

const ProductInfo = () => {
  const [cartItems] = useState(getDataFromStorage());
  function getDataFromStorage() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  const totalItems = cartItems.map((item) => {
    return item.amount;
  });
  const sum = totalItems.reduce((partialSum, a) => partialSum + a, 0);
  const params = useParams();
  const product = Products.find((item) => {
    return item.id === Number(params.id);
  });
  return (
    <div>
      <Header sum={sum} />
      <div
        className="items-product-info"
        style={{
          background:
            localStorage.getItem("theme") === "light" ? "#fff" : "#000",
        }}
      >
        <Link to={"/"} className="btn-back">
          بازگشت به صفحه اصلی
        </Link>
        <div>
          <ImageSlider
            slides={SliderDataVideoCamera}
            className="image-sliderrr"
          />
        </div>
        <div className="container-description-product-info">
          <h2
            className="title-product-info"
            style={{
              color:
                window.localStorage.getItem("theme") === "light"
                  ? "#000"
                  : "#fff",
            }}
          >
            {product.name}
          </h2>
          <h3
            className="detail-product-info"
            style={{
              color:
                window.localStorage.getItem("theme") === "light"
                  ? "#3f3f3f"
                  : "#a6a6a6",
            }}
          >
            مشخصات محصول :
          </h3>
          <i className="fa  fa-arrow-down"></i>
          <p
            className="description-product-info"
            style={{
              color:
                window.localStorage.getItem("theme") === "light"
                  ? "#000"
                  : "#a6a6a6",
            }}
          >
            {product.description + product.moreDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
