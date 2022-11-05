/* eslint-disable jsx-a11y/alt-text */
/**
 * @desc [Componente do Header]
 */
import React, { useContext } from "react";
import { Container, Logo } from "./styles";
import { CartContext } from "../../context";

//components
import Button from "react-bootstrap/Button";
import Search from "../Search";

export default function Header() {
  const { productsCart, setActiveCart } = useContext(CartContext);

  return (
    <>
      <Container>
        <Logo src="https://jobspace.com.br/wp-content/themes/Jobspace/assets/img/logo-bg.png" />
        <Search />
        <Button variant="primary" onClick={() => setActiveCart(true)}>
          Carrinho ({productsCart.length})
        </Button>
      </Container>
    </>
  );
}
