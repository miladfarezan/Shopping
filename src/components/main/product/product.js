import React, { useEffect } from "react";

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
  const getCart = window.localStorage.getItem("cart");
  const cart = JSON.parse(getCart);
  const totalItems =
    cart === null
      ? []
      : cart.map((item) => {
          return item.amount;
        });
  const sum = totalItems.reduce((partialSum, a) => partialSum + a, 0);
  return (
    <div className="product">
      <div className="container-product">
        <div className="container-image">
          <img src={props.img} className="image" alt="Image Not Found" />
        </div>
        <div className="descriptions">
          <h3 className="title-product">{props.name}</h3>
          <h3 className="product-description">مشخصات:</h3>
          <p className="info-product">{props.info}</p>
          <h4 className="price-product">
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
