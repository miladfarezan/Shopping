import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./header.css";
import Wrapper from "../../hoc/wrapper";
import Modal from "./modal/modal";

const Header = (props) => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  const toggleHamburgerMenu = () => {
    if (hamburgerMenu === true) {
      setHamburgerMenu(false);
    } else {
      setHamburgerMenu(true);
    }
    console.log(hamburgerMenu);
  };
  return (
    <Wrapper>
      <Modal toggleModal={hamburgerMenu} setToggleModal={toggleHamburgerMenu} />
      <div
        className="header"
        style={{
          background: hamburgerMenu === true ? "#323232" : "#000000",
        }}
      >
        <div className="container-header">
          <div
            className="header-items header-hamburger-menu"
            onClick={toggleHamburgerMenu}
          >
            <div className="hamburger-menu-items">
              <div
                className="hamburger-menu-item"
                style={{
                  transform: hamburgerMenu === true ? "rotate(-40deg)" : "none",
                }}
              ></div>
              <div
                className="hamburger-menu-item"
                style={{
                  transform: hamburgerMenu === true ? "rotateY(90deg)" : "none",
                }}
              ></div>
              <div
                className="hamburger-menu-item"
                style={{
                  transform: hamburgerMenu === true ? "rotate(41deg)" : "none",
                }}
              ></div>
            </div>
          </div>
          <div className="header-items header-home">
            <Link to="/" className="header-item">
              <i className="fa fa-home"></i>
              صفحه اصلی
            </Link>
          </div>
          <div className="header-items header-cart">
            <Link to="/cart" className="header-item">
              <i className="fa fa-shopping-cart"></i>
              سبد خرید
              <div className="cart-item">{props.sum}</div>
            </Link>
          </div>
          <div className="header-items header-support">
            <Link to="tel:+989392678179" className="header-item">
              <i className="fa fa-phone"></i>
              <span className="phone">98</span>9392678179+
            </Link>
          </div>
          <div className="header-items header-account">
            <Link to="/account" className="header-item">
              <i className="fa fa-user"></i>
              ورود به حساب کاربری
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
