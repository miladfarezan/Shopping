import React from "react";

import "./backdrop.css";

function Backdrop(props) {
  return (
    <div
      className="backdrop"
      style={{
        opacity: props.backdrop === true ? "1" : "0",
        pointerEvents: props.backdrop === true ? "auto" : "none",
      }}
      onClick={props.toggleBackdrop}
    ></div>
  );
}

export default Backdrop;
