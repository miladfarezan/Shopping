import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Main from "./components/main/main";
import Cart from "./components/cart/cart";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" Component={Main} exact />
        <Route path="/cart" Component={Cart} exact />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
