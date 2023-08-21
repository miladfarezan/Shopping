import React from "react";
import { Link } from "react-router-dom";

import "./modal.css";

function Modal(props) {
  return (
    <div
      className="modal"
      style={{
        left: props.toggleModal === true ? "0" : "100%",
        opacity: props.toggleModal === true ? "1" : "0",
      }}
    >
      <div className="modal-items">
        <Link to={"/"} className="link-modal">
          <div className="modal-item" onClick={props.setToggleModal}>
            <i className="fa fa-home modal-icon"></i> صفحه اصلی
          </div>
        </Link>
        <Link to={"/account"} className="link-modal">
          <div className="modal-item" onClick={props.setToggleModal}>
            <i className="fa fa-user modal-icon"></i>
            ورود به حساب کاربری
          </div>
        </Link>
        <Link to="tel:+989392678179" className="link-modal">
          <div
            className="modal-item modal-support"
            onClick={props.setToggleModal}
          >
            <i className="fa fa-phone modal-icon"></i>
            پشتیبانی
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Modal;
