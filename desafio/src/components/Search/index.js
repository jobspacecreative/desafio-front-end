import React from "react";
import { Button, Form } from "react-bootstrap";

export default function Search({
  showProducts,
  searchInput,
  setSearchInput,
  productList,
}) {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Buscar produto"
          />
          <Button
            variant="secondary"
            onClick={() =>
              searchInput !== ""
                ? showProducts(searchInput)
                : showProducts(productList)
            }
          >
            Pesquisar
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
