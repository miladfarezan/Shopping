import React from "react";

import "./cart-modal.css";

function CartModal(props) {
  return (
    <div
      className="cart-modal"
      style={{
        opacity: props.confirmCart === true ? "1" : "0",
        pointerEvents: props.confirmCart === true ? "auto" : "none",
        left: props.confirmCart === true ? "50%" : "100%",
      }}
    >
      <div className="container-modal">
        <div className="description-modal">
          <div>
            <p className="total-price-modal">مجموع خرید شما :</p>
            <h2 className="price-modal">{props.price + ` تومان`}</h2>
          </div>
          <div>
            <i className="fa fa-dollar"></i>
          </div>
        </div>
        <div className="cancel-modal">
          <div className="description-cancel-modal">
            درحال حاضر انتقال به درگاه بانکی امکان پذیر نمیباشد ...
          </div>
          <div>
            <button className="cancel-btn" onClick={props.toggleModal}>
              انصراف
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
