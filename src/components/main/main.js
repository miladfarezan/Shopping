import React, { useState } from "react";

import "./main.css";
import Products from "../products";
import Product from "./product/product";

const Main = () => {
  const [cartItems, setCartItems] = useState(getDataFromStorage());

  function getDataFromStorage() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }

  return (
    <div className="main">
      {Products.map((item) => {
        return (
          <Product
            img={item.image}
            name={item.name}
            info={item.description}
            price={item.price}
            key={item.id}
            id={item.id}
            setCartItems={setCartItems}
            cartItems={cartItems}
          />
        );
      })}
    </div>
  );
};

export default Main;
