import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardProducts = ({ product }) => {
  return (
    <Card style={{ height: "100%" }} className="align-items-center">
      <Card.Img variant="top" src={product.image} className="w-50 py-4 h-100" />
      <Card.Body>
        <Card.Title>{product.title.substring(0, 50)}</Card.Title>
        <Card.Text>{product.description.substring(0, 100)}</Card.Text>
        <div className="d-flex justify-content-between ">
          <Link to={`/product/${product.id}`}>
            <Button className="align-items-center">
              <BsCart3 className="align-items-center me-1" />
              <span>Add to Cart</span>
            </Button>
          </Link>
          <Button className="align-items-center bg-transparent text-black border-0">
            <span className="justify-content-center"> $ {product.price} </span>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProducts;
