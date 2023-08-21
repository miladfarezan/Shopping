import React, { useState, useEffect } from "react";

import "./account.css";
import Header from "../header/header";
function Account() {
  useEffect(() => {
    setTimeout(() => {
      alert(
        `Email : admin@gmail.com
Password : admin`
      );
    }, 1000);
  }, []);

  const [cartItems] = useState(getDataFromStorage());
  const [inputType, setInputType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function getDataFromStorage() {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  }
  const totalItems = cartItems.map((item) => {
    return item.amount;
  });
  const sum = totalItems.reduce((partialSum, a) => partialSum + a, 0);
  const toggleInputType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      window.location.href = "/";
    }
  };
  return (
    <div>
      <Header sum={sum} />
      <div className="container-form-box">
        <form className="form-box">
          <div className="form-box-items">
            <div className="container-title-form-box">
              <h2 className="title-form-box">ورود به حساب کاربری</h2>
            </div>
            <div className="container-input-form-box">
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید "
                onChange={(event) => emailHandler(event)}
              />
              <span
                className="error-email"
                style={{
                  display:
                    email === "" || email === "admin@gmail.com"
                      ? "none"
                      : "block",
                  fontWeight: "bold",
                }}
              >
                آدرس ایمیل نامعتبر است .
              </span>
            </div>
            <div
              className="container-input-form-box"
              style={{
                marginTop:
                  email === "" || email === "admin@gmail.com" ? "20px" : "35px",
                marginBottom:
                  password === "" || password === "admin" ? "0px" : "15px",
              }}
            >
              <input
                type={inputType}
                placeholder="رمز عبور خود را وارد "
                onChange={(event) => passwordHandler(event)}
              />
              <i
                className="fa fa-light fa-eye"
                onClick={toggleInputType}
                style={{
                  color: inputType === "text" ? "#14454a" : "#858585",
                }}
              ></i>
              <span
                className="error-password"
                style={{
                  fontWeight: "bold",
                  display:
                    password === "" || password === "admin" ? "none" : "block",
                }}
              >
                رمز عبور نامعتبر است .
              </span>
            </div>

            <button
              onClick={submitHandler}
              className="btn-form-box"
              style={{
                background:
                  email === "" || password === "" ? "#666666" : "#ef4056",
                border:
                  email === "" || password === ""
                    ? "1px solid #666666"
                    : "1px solid #ef4056",
              }}
            >
              ورود
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;
