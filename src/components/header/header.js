import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = (props) => {
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
            <div className="cart-item">{props.sum}</div>
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
