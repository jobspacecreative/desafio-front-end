import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Container, BoxProducts } from "./styles";

//components
import Header from "../../components/Header";
import Product from "../../components/Product";

export default function Home() {
  const BASE_URL = "https://62d742f351e6e8f06f1a83da.mockapi.io/api/produtos";
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((res) => setProductList(res))
      .catch((err) => console.log(err));
  }, []);

  let [filteredItems, setFilteredItems] = useState([]);
  let [cart, setCart] = useState([]);
  let [searchInput, setSearchInput] = useState("");

  const showProducts = (word) => {
    filteredItems = productList.filter(
      (item) => item.name.toLowerCase() === word.toLowerCase()
    );
    setFilteredItems(filteredItems);
    return filteredItems.length === 0
      ? alert("Nenhum item corresponde à sua pesquisa")
      : setProductList(filteredItems);
  };

  const handleClick = (productId) => {
    const findItem = productList.find((item) => item.id === productId);
    return setCart([...cart, findItem]);
  };

  const handleClickRemover = (productId) => {
    const keptelements = cart.filter((item) => item.id !== productId);
    setCart(keptelements);
  };
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>
            <Header
              cart={cart}
              setCart={setCart}
              handleClickRemover={handleClickRemover}
              searchInput={searchInput}
              setSearchInput={setSearchInput}
              showProducts={showProducts}
              productList={productList}
            />
          </Col>
          <h2>Produtos</h2>
          <BoxProducts>
            <Product products={productList} handleClick={handleClick} />
          </BoxProducts>
        </Row>
      </Container>
    </>
  );
}
