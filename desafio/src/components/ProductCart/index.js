/**
 * @desc [Componente do Produto no carrinho]
 */
import React from "react";
import { BoxCard, Title, Price, Remover } from "./styles";

export default function ProductCart({ cart, setCart, handleClickRemover }) {
  return (
    <>
      {cart.map((prod, index) => (
        <BoxCard>
          <img src={prod.avatar} alt="avatar" />
          <Title>{prod.name}</Title>
          <Price>{prod.price}</Price>
          <Remover onClick={() => handleClickRemover(prod.id)}>X</Remover>
        </BoxCard>
      ))}
      {console.log(cart)}
    </>
  );
}
