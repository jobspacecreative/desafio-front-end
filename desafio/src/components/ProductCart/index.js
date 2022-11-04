/**
 * @desc [Componente do Produto no carrinho]
 */
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context";
import { BoxCard, Title, Price } from "./styles";

export default function ProductCart() {
  const {
    productsCart,
    removeProductToCart,
    setTotalPrice,
    addProductToCart,
    removeProduct,
  } = useContext(CartContext);

  let initialPrice = 0;
  const handleCalculatePrice = (price) => {
    initialPrice += Number(price);
    setTotalPrice(initialPrice);
  };

  return productsCart.map((product) => {
    handleCalculatePrice(product.price);

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
