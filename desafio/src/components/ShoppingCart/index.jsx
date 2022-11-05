import React, { useContext, useState } from "react";
import { CartContext } from "../../context";

import { BsFillCartFill } from "react-icons/bs";
import { Button, Modal } from "react-bootstrap";
import ProductCart from "../ProductCart";
import { BoxAside, CartHeader, PriceArea } from "./styles";

const ShoppingCart = () => {
  const [show, setShow] = useState(false);
  const { productsCart, totalPrice, setActiveCart, clearCart } =
    useContext(CartContext);

  const handleClearCart = () => {
    clearCart();
    setShow(false);
  };

  return (
    <>
      <BoxAside>
        <CartHeader>
          <p style={{ padding: "8px"}}>
            <BsFillCartFill />({productsCart.length})
          </p>
          <Button
            disabled={!productsCart.length > 0}
            onClick={() => alert("parabéns, você comprou :) ")}
            variant="success"
            size="sm"
            style={{ height: 35, marginTop: "2px" }}
          >
            Comprar
          </Button>
          <Button
            disabled={!productsCart.length > 0}
            onClick={() => setShow(true)}
            variant="danger"
            size="sm"
            style={{ height: 35, marginTop: "2px" }}
          >
            Limpar
          </Button>
          <Button
            variant="light"
            style={{ height: 35 }}
            onClick={() => setActiveCart(false)}
          >
            X
          </Button>
        </CartHeader>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <ProductCart />
        </div>
        <PriceArea>
          Valor total: {totalPrice}
        </PriceArea>
      </BoxAside>

      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Exclusão dos produtos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja limpar o carrinho? <br />
          Todos os itens adicionados serão excluídos!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Manter produtos
          </Button>
          <Button variant="primary" onClick={() => handleClearCart()}>
            Limpar carrinho
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShoppingCart;
