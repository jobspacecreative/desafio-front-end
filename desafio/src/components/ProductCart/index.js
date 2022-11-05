/**
 * @desc [Componente do Produto no carrinho]
 */
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context";
import {
  BoxCard,
  Title,
  Price,
  ProductInfo,
  ProductCartAmount,
  AmountSpan,
} from "./styles";

export default function ProductCart() {
  const { productsCart, removeProductToCart, addProductToCart, removeProduct } =
    useContext(CartContext);

  if (productsCart.length === 0) {
    return (
      <img
        alt="empty-cart"
        width={"100%"}
        src="https://www.pngkit.com/png/detail/411-4110678_carrinho-de-compras-vazio-shopping-cart.png"
      />
    );
  }

  return productsCart.map((product) => {
    return (
      <BoxCard key={product.id}>
        <ProductInfo>
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
        </ProductInfo>
        <ProductCartAmount>
          <Button
            size="sm"
            variant="light"
            onClick={() => addProductToCart(product)}
          >
            +
          </Button>
          <AmountSpan>{product.qtd}</AmountSpan>
          <Button
            size="sm"
            variant="light"
            onClick={() => removeProductToCart(product.id)}
          >
            -
          </Button>
        </ProductCartAmount>
      </BoxCard>
    );
  });
}
