import React, { useEffect, useState } from 'react';
import {
    Row,
    Col
  } from 'react-bootstrap';
  import { Container, BoxProducts } from './styles';

  //components
  import Header from '../../components/Header'
  import Product from '../../components/Product'

  import api from '../../services/api';

  export default function Home() {

    const [productsList, setProductsList] = useState([]);
    const [searchText, setSearchText] = useState('');

    const getProducts = async () => {
      await api.get()
      .then((response) => setProductsList(response.data))
      .catch((err) => console.error(err));
    }

    useEffect(() => {
      getProducts();
    }, []);

    const filteredProducts = searchText.length > 0
    ? productsList.filter((product) => (product.name.toLowerCase()).includes(searchText.toLowerCase()) ||
      (product.desciption.toLowerCase()).includes(searchText.toLowerCase()) ||
      product.price.includes(searchText))
    : [];


      return(
        <>
          <Container>
            <Row>
              <Col xs={12}>
                <Header
                  setSearchText={setSearchText}
                  searchText={searchText}
                />
              </Col>
              <h2>Produtos</h2>
              {searchText.length > 0 ? (
                <BoxProducts>
                  {filteredProducts.map((product) => (
                    <Product
                      key={product.id}
                      avatar={product.avatar}
                      name={product.name}
                      desciption={product.desciption}
                      price={product.price}
                    />
                  ))}
                </BoxProducts>
              ) : (
                <BoxProducts>
                  {productsList.map((product) => (
                    <Product
                      key={product.id}
                      avatar={product.avatar}
                      name={product.name}
                      desciption={product.desciption}
                      price={product.price}
                    />
                  ))}
                </BoxProducts>
              )}  
            </Row>
          </Container>
        </>
      );
  }