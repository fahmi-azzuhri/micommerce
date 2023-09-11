import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardProducts from "./CardProducts";

const Cart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_CORE}/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Row>
      <Col>{product && <CardProducts product={product} />} </Col>
      <Col></Col>
    </Row>
  );
};

export default Cart;
