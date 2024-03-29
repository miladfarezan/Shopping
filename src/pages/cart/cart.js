import React, { useState } from "react";

import "./cart.css";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";
import Wrapper from "../../hoc/wrapper";
import CartModal from "./modal/cart-modal";
import Backdrop from "../../components/backdrop/backdrop";

const Cart = () => {
  const getCart = window.localStorage.getItem("cart");
  const cart = JSON.parse(getCart);
  const totalPriceOneProduct =
    cart === null
      ? []
      : cart.map((item) => {
          return item.amount * item.price;
        });

  const totalPriceAllProducts = totalPriceOneProduct.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const result = new Intl.NumberFormat("en-US", { style: "decimal" }).format(
    totalPriceAllProducts
  );
  let [cartItems, setCartItems] = useState(getDataFromStorage());
  const [confirmCart, setConfirmCart] = useState(false);

  function getDataFromStorage() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  const totalItems = cartItems.map((item) => {
    return item.amount;
  });

  const sum = totalItems.reduce((partialSum, a) => partialSum + a, 0);
  function increseCartItemHandler(event) {
    const id = event.target.id;
    const product = cartItems.find((item) => {
      return item.id === Number(id);
    });
    setCartItems([...cartItems]);
    product.amount += 1;
    localStorage.setItem("cart", JSON.stringify(cartItems, product));
  }
  function decreseCartItemHandler(event) {
    const id = event.target.id;
    const product = cartItems.find((item) => {
      return item.id === Number(id);
    });
    if (product.amount === 1) {
      return 1;
    } else {
      setCartItems([...cartItems]);
      product.amount -= 1;
    }
    localStorage.setItem("cart", JSON.stringify(cartItems, product));
  }
  function removeProductHandler(event) {
    const id = event.target.id;
    const product = cartItems.findIndex((item) => {
      return item.id === Number(id);
    });
    cartItems.splice(product, 1);
    setCartItems([...cartItems]);
    localStorage.setItem("cart", JSON.stringify(cartItems, product));
  }
  function clearCart() {
    cartItems = [];
    setCartItems(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
  function confirmCartHandler() {
    if (confirmCart === false) {
      setConfirmCart(true);
    } else {
      setConfirmCart(false);
    }
  }

  return (
    <Wrapper>
      <Backdrop backdrop={confirmCart} toggleBackdrop={confirmCartHandler} />
      <CartModal
        price={result}
        toggleModal={confirmCartHandler}
        confirmCart={confirmCart}
      />
      <div className="cart">
        <Header sum={sum} />
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
                            <Link to={`/product/${item.id}`}>
                              <div className="container-image-cart-box-item">
                                <img
                                  className="img-cart-box-item"
                                  src={item.img}
                                  alt="Not found"
                                ></img>
                              </div>
                            </Link>
                            <div className="container-description-cart-box">
                              <Link
                                to={`/product/${item.id}`}
                                className="title-cart-link"
                              >
                                <h3 className="title-cart-box-item">
                                  {item.name}
                                </h3>
                              </Link>
                              <p className="price-cart-box-item">
                                {`قیمت : ` +
                                  new Intl.NumberFormat("en-US", {
                                    style: "decimal",
                                  }).format(item.price) +
                                  ` تومان`}
                              </p>
                              <button
                                className="btn-remove-cart-box-item"
                                id={item.id}
                                onClick={removeProductHandler}
                              >
                                حذف
                              </button>
                            </div>
                          </div>
                          <div className="container-amount-cart-item-box">
                            <i
                              className="fa fa-plus"
                              id={item.id}
                              onClick={increseCartItemHandler}
                            ></i>
                            <h2 className="amount-cart-box-item">
                              {item.amount}
                            </h2>
                            <i
                              className="fa fa-minus"
                              id={item.id}
                              onClick={decreseCartItemHandler}
                            ></i>
                          </div>
                        </div>
                      </div>
                    );
                  })}

              <div className="footer-cart-box">
                <h3 className="total-price"> مجموع قیمت : {result} تومان </h3>
                <div className="container-btns-cart">
                  <Link to={"/"}>
                    <button className="btn-clear-cart" onClick={clearCart}>
                      حذف محصولات
                    </button>
                  </Link>

                  <button
                    className="btn-confirm-cart"
                    onClick={confirmCartHandler}
                  >
                    تایید و ادامه ...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
