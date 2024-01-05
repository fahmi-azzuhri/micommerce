import React from "react";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "../pages/Details";
import { Navbars } from "./Navbars";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Footers } from "./Footers";
import Category from "../pages/Category";
import Cart from "../pages/Cart";

const App = () => {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footers />
    </Router>
  );
};

export default App;
