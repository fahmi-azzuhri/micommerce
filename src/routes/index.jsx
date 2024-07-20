import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/product/ProductDetail";
export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products/:id"} element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}
