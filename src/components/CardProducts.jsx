import React from "react";
import { Card } from "react-bootstrap";

const CardProducts = ({ product }) => {
  return (
    <Card style={{ height: "100%" }} className="align-items-center">
      <Card.Img variant="top" src={product.image} className="w-50 py-4 h-100" />
      <Card.Body>
        <Card.Title className="">{product.title.substring(0, 50)}</Card.Title>
        <Card.Text>{product.description.substring(0, 100)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardProducts;
