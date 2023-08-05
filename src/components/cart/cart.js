import React, { useState } from "react";

import "./cart.css";

const Cart = () => {
  const getCart = window.localStorage.getItem("cart");
  const cart = JSON.parse(getCart);
  const totalPriceOneProduct =
    cart === null
      ? []
      : cart.map((item) => {
          return item.amount * item.price;
        });

  const sum = totalPriceOneProduct.reduce((partialSum, a) => partialSum + a, 0);
  const result = new Intl.NumberFormat("en-US", { style: "decimal" }).format(
    sum
  );

  return (
    <div className="cart-box">
      <div className="container-cart-box">
        <h2 className="cart-box-title">سبد خرید</h2>
        <div className="cart-box-items">
          {cart === null
            ? []
            : cart.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="container-cart-box-item">
                      <div className="container-image-cart-box-item-and-description">
                        <div className="container-image-cart-box-item">
                          <img
                            className="img-cart-box-item"
                            src={item.img}
                          ></img>
                        </div>
                        <div className="container-description-cart-box">
                          <h3 className="title-cart-box-item">{item.name}</h3>
                          <p className="price-cart-box-item">
                            {`قیمت : ` +
                              new Intl.NumberFormat("en-US", {
                                style: "decimal",
                              }).format(item.price) +
                              ` تومان`}
                          </p>
                          <button className="btn-remove-cart-box-item">
                            حذف
                          </button>
                        </div>
                      </div>
                      <div className="container-amount-cart-item-box">
                        <i className="fa fa-plus"></i>
                        <h2 className="amount-cart-box-item">{item.amount}</h2>
                        <i className="fa fa-minus"></i>
                      </div>
                    </div>
                  </div>
                );
              })}

          <div className="footer-cart-box">
            <h3 className="total-price"> مجموع قیمت : {result} تومان </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
