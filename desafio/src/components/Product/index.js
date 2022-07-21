/**
 * @desc [Componente do Produto em lista]
 */
import React from "react";
import { BoxCard, Price } from "./styles";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product({ products, handleClick }) {
  return (
    <>
      {products.map((prod) => (
        <BoxCard>
          <Card style={{ width: "18rem" }} key={prod.id} prod={prod}>
            <Card.Img variant="top" src={prod.avatar} />
            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Text>
                <p>{prod.desciption}</p>
                <Price>{prod.price}</Price>
              </Card.Text>
              <Button variant="primary" onClick={() => handleClick(prod.id)}>
                Adicionar ao carrinho
              </Button>
            </Card.Body>
          </Card>
        </BoxCard>
      ))}
    </>
  );
}
