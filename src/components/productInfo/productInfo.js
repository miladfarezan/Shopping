import React, { useState } from "react";
import { useParams } from "react-router";

import Header from "../header/header";
import Products from "../products";
import "./productInfo.css";

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
  console.log(product.name);
  return (
    <div>
      <Header sum={sum} />
      <div className="items-product-info">
        <div className="container-image-product-info">
          <img src={product.image} />
        </div>
        <div className="cntainer-description-product-info">
          <h2 className="title-product-info">{product.name}</h2>
          <h3 className="detail-product-info">مشخصات محصول :</h3>
          <i className="fa  fa-arrow-down"></i>
          <p className="description-product-info">
            {product.description + product.moreDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
