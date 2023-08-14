import React, { useState } from "react";

import "./main.css";
import Products from "../products";
import Product from "./product/product";
import Header from "../header/header";
import useDarkMode from "../hooks/dark-mode";

const Main = () => {
  const [cartItems, setCartItems] = useState(getDataFromStorage());
  const [theme, toggleTheme] = useDarkMode();
  function getDataFromStorage() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  const totalItems = cartItems.map((item) => {
    return item.amount;
  });

  const sum = totalItems.reduce((partialSum, a) => partialSum + a, 0);
  const content = (
    <div
      className="app"
      style={{
        background: theme === "dark" ? "#000" : "#fff",
        transition: " all 0.3s",
      }}
    >
      <div className="main">
        <button
          className="btn-theme"
          onClick={toggleTheme}
          style={{
            color: theme === "light" ? "#000  " : "#fff",
            padding: "4px 8px",
            borderRadius: "5px",
          }}
        >
          {theme === "light" ? `تم تاریک` : `تم روشن`}
        </button>
        <Header sum={sum} />
        {Products.map((item) => {
          return (
            <Product
              alt="Not Found "
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
    </div>
  );
  return content;
};

export default Main;
