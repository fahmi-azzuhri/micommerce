import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function Cards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_ECOMMERCE}/products`)
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div className="grid gap-3 mb-8 md:grid-cols-2 lg:grid-cols-4">
      {products.map((item) => (
        <Card key={item.id} className="mt-6 w-96 border border-blue-500">
          <CardHeader className="my-4">
            <img src={item.image} alt="card-image" className="w-1/2 mx-auto" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {item.title}
            </Typography>
            <Typography>{item.description}</Typography>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
