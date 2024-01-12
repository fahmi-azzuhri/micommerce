import React from "react";
import { Cards } from "../component/Cards";
import Hero from "../component/Hero";
import { Footers } from "../component/Footers";
const Home = () => {
  return (
    <div>
      <Hero />
      <Cards />
      <Footers />
    </div>
  );
};

export default Home;
