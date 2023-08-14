import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./product.css";

const Product = (props) => {
  useEffect(() => {
    setDataToStorage(props.cartItems);
  }, [props.cartItems]);

  const newItem = {
    img: props.img,
    name: props.name,
    id: props.id,
    info: props.info,
    price: props.price,
    amount: 1,
  };

  const addCartItemHandler = () => {
    const id = props.id;
    const product = props.cartItems.find((item) => {
      return item.id === id;
    });
    if (product === undefined) {
      return props.setCartItems([newItem, ...props.cartItems]);
    } else {
      product.amount += 1;
      props.setCartItems([...props.cartItems]);
    }
  };

  const setDataToStorage = (data) => {
    window.localStorage.setItem("cart", JSON.stringify(data));
  };

  return (
    <div
      className="product"
      style={{
        border:
          window.localStorage.getItem("theme") === "light"
            ? "none"
            : "1px solid #666666",
      }}
    >
      <div className="container-product">
        <Link to={`/product/${props.id}`} className="link-product">
          <div className="container-image">
            <img src={props.img} className="image" alt={props.alt} />
          </div>
        </Link>
        <div className="descriptions">
          <Link to={`/product/${props.id}`} className="link-product">
            <h3
              className="title-product"
              style={{
                background:
                  window.localStorage.getItem("theme") === "light"
                    ? "#fff"
                    : "#000",
                color:
                  window.localStorage.getItem("theme") === "light"
                    ? "#000"
                    : "#fff",
                border:
                  window.localStorage.getItem("theme") === "light"
                    ? "none"
                    : "1px solid #666666",
              }}
            >
              {props.name}
            </h3>
          </Link>
          <Link to={`/product/${props.id}`} className="link-product">
            <h3
              className="product-description"
              style={{
                color:
                  window.localStorage.getItem("theme") === "light"
                    ? "#3a3a3a"
                    : "#a6a6a6",
              }}
            >
              مشخصات:
            </h3>
          </Link>
          <p
            className="info-product"
            style={{
              background:
                window.localStorage.getItem("theme") === "light"
                  ? "#fff"
                  : "#000",
              color:
                window.localStorage.getItem("theme") === "light"
                  ? "#000"
                  : "#787878",
              border:
                window.localStorage.getItem("theme") === "light"
                  ? "none"
                  : "1px solid #232323",
            }}
          >
            {props.info}
          </p>
          <h4
            className="price-product"
            style={{
              color:
                window.localStorage.getItem("theme") === "light"
                  ? "#000"
                  : "#a6a6a6",
            }}
          >
            {`قیمت : ` +
              new Intl.NumberFormat("en-US", { style: "decimal" }).format(
                props.price
              ) +
              ` تومان`}
          </h4>
          <div className="btn-container">
            <button
              className="product-btn"
              id={props.id}
              onClick={addCartItemHandler}
            >
              خرید محصول
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
