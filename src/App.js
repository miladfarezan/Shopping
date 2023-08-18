import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Main from "./components/main/main";
import Cart from "./components/cart/cart";
import Footer from "./components/footer/footer";
import ProductInfo from "./components/productInfo/productInfo";
import Account from "./components/account/account";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Main} exact />
        <Route path="/cart" Component={Cart} exact />
        <Route path="/product/:id" Component={ProductInfo} />
        <Route path="/account" Component={Account} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
