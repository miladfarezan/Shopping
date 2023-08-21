import React, { useState } from "react";

import "./home.css";
import Products from "../../components/products";
import Product from "./product/product";
import Header from "../../components/header/header";

const Home = () => {
  const [cartItems, setCartItems] = useState(getDataFromStorage());
  function getDataFromStorage() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  const totalItems = cartItems.map((item) => {
    return item.amount;
  });

  const sum = totalItems.reduce((partialSum, a) => partialSum + a, 0);
  const content = (
    <div>
      <div className="main">
        <Header sum={sum} style={{ display: "none" }} />
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

export default Home;
