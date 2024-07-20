import React from "react";
import hero from "../assets/img/hero.png";
import ProductPage from "./ProductPage";
export default function Home() {
  return (
    <div>
      <div className="mx-auto w-full mb-10">
        <header>
          <img
            src={hero}
            alt=""
            className="h-[32rem] w-full object-cover object-center"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex flex-col mt-16">
            <h1 className="h1-header text-5xl text-white font-bold tracking-wider block lg:inline">
              Fashion experts recommend
            </h1>
            <p className="text-xl text-white mt-6">
              staying cool during hot weather
            </p>
          </div>
        </header>
      </div>
      <ProductPage />
    </div>
  );
}
