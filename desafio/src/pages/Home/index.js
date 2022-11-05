import React, { useContext } from "react";
import { CartContext } from "../../context";

//components
import Header from "../../components/Header";
import Product from "../../components/Product";
import ShoppingCart from "../../components/ShoppingCart";
import { Row, Col } from "react-bootstrap";
import { Container, BoxProducts } from "./styles";

export default function Home() {
  const { activeCart, productsFiltered } = useContext(CartContext);

  return (
    <>
      <Row>
        <Col xs={12}>
          <Header />
        </Col>
        {activeCart && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "red",
            }}
          >
            <ShoppingCart />
          </div>
        )}
        <Container>
          <BoxProducts>
            {productsFiltered.map((product) => {
              return <Product key={product.id} props={product} />;
            })}
          </BoxProducts>
        </Container>
      </Row>
    </>
  );
}
