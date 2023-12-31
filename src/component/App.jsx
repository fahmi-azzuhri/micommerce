import React from "react";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "../pages/Details";
import { Navbars } from "./Navbars";

const App = () => {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
