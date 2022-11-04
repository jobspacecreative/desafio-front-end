/**
 * @desc [Componente do Produto em lista]
 */
import React, { useContext } from "react";
import { CartContext } from "../../context";

import { BoxCard, Price } from "./styles";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product(props) {
  const {addProductToCart} = useContext(CartContext);
  const product = props.props;

  return (
    <BoxCard id={product.id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" id="productImage" src={product.avatar} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            <p>{product.desciption}</p>
            <Price>{product.price}</Price>
          </Card.Text>
          <Button variant="primary" onClick={() =>addProductToCart(product)}>
            Adicionar ao carrinho
          </Button>
        </Card.Body>
      </Card>
    </BoxCard>
  );
}
