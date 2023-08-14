import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Main from "./components/main/main";
import Cart from "./components/cart/cart";
import Footer from "./components/footer/footer";
import ProductInfo from "./components/productInfo/productInfo";
import useDarkMode from "./components/hooks/dark-mode";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Main} exact />
        <Route path="/cart" Component={Cart} exact />
        <Route path="/product/:id" Component={ProductInfo} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
