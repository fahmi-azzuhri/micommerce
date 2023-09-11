import React, { useEffect, useState } from "react";
import { Service } from "../service/service";
import { Row, Col, Container } from "react-bootstrap";
import CardProducts from "./CardProducts";

const Main = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Service((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Container>
      <Row>
        {products.length > 0 &&
          products.map((product) => (
            <Col lg={3} md={2} sm={1} key={product.id} className="d-flex mb-4">
              <CardProducts product={product} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Main;
