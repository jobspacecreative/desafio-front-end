/**
 * @desc [Componente do Produto no carrinho]
 */
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context";
import { BoxCard, Title, Price } from "./styles";

export default function ProductCart() {
  const { productsCart, removeProductToCart, setTotalPrice } =
    useContext(CartContext);

  let initialPrice = 0;
  const handleCalculatePrice = (price) => {
    initialPrice += Number(price);
    setTotalPrice(initialPrice);
  };

  return productsCart.map((product) => {
    handleCalculatePrice(product.price);

    return (
      <BoxCard key={product.id}>
        <img src={product.avatar} alt="" />
        <Title>{product.name}</Title>
        <Price>{product.price}</Price>
        <Button
          onClick={() => removeProductToCart(product.id)}
          variant="light"
          size="sm"
          style={{ height: 50 }}
        >
          x
        </Button>
      </BoxCard>
    );
  });
}
