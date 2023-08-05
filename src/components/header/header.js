import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
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
    <div className="header">
      <div className="container-header">
        <div className="header-items home">
          <Link to="/" className="header-item">
            <i className="fa fa-home"></i>
            صفحه اصلی
          </Link>
        </div>
        <div className="header-items cart">
          <Link to="/cart" className="header-item">
            <i className="fa fa-shopping-cart"></i>
            سبد خرید
            <div className="cart-item">{sum}</div>
          </Link>
        </div>
        <div className="header-items account">
          <Link to="/account" className="header-item">
            <i className="fa fa-user"></i>
            حساب کاربری
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
