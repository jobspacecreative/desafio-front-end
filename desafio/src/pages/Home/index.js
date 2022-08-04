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

    const getProducts = async () => {
      await api.get()
      .then((response) => setProductsList(response.data))
      .catch((err) => console.error(err));
    }

    useEffect(() => {
      getProducts();
    }, []);

      return(
        <>
          <Container>
            <Row>
              <Col xs={12}>
                <Header />
              </Col>
              <h2>Produtos</h2>
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
            </Row>
          </Container>
        </>
      );
  }