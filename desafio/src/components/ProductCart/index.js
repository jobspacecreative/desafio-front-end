/**
 * @desc [Componente do Produto no carrinho]
 */
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context";
import { BoxCard, Title, Price } from "./styles";

export default function ProductCart() {
  const { productsCart, removeProductToCart, addProductToCart, removeProduct } =
    useContext(CartContext);

  return productsCart.map((product) => {
    return (
      <BoxCard key={product.id}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={product.avatar} alt="" />
          <Title>{product.name}</Title>
          <Price>{product.price}</Price>
          <Button
            onClick={() => removeProduct(product.id)}
            variant="light"
            size="sm"
            style={{ height: 50 }}
          >
            x
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "30%",
            marginLeft: "40%",
          }}
        >
          <Button
            size="sm"
            variant="light"
            onClick={() => addProductToCart(product)}
          >
            +
          </Button>
          <p style={{ marginTop: "10px", margin: "10px" }}>{product.qtd}</p>
          <Button
            size="sm"
            variant="light"
            onClick={() => removeProductToCart(product.id)}
          >
            -
          </Button>
        </div>
      </BoxCard>
    );
  });
}
