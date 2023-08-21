import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Footer from "./components/footer/footer";
import ProductInfo from "./pages/productInfo/productInfo";
import Account from "./pages/account/account";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Home} exact />
        <Route path="/cart" Component={Cart} exact />
        <Route path="/product/:id" Component={ProductInfo} />
        <Route path="/account" Component={Account} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
