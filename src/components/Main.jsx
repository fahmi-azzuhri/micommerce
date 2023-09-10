import React, { useEffect, useState } from "react";
import { Service } from "../service/service";

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Service((data) => {
      console.log(data);
      setProducts(data);
    });
  }, []);

  return (
    <div>
      {" "}
      {products.length > 0 &&
        products.map((product) => {
          return <p key={product.id}>{product.title}</p>;
        })}{" "}
    </div>
  );
};

export default Main;
