import React from 'react';
import {
    Row,
    Col
  } from 'react-bootstrap';
  import { Container, BoxProducts } from './styles';

  //components
  import Header from '../../components/Header'
  import Product from '../../components/Product'

  export default function Home() {
      return(
        <>
          <Container>
            <Row>
              <Col xs={12}>
                <Header />
              </Col>
              <h2>Produtos</h2>
              <BoxProducts>
                <Product props/>
                <Product props/>
                <Product props/>
                <Product props/>
                <Product props/>
                <Product props/>
              </BoxProducts>  
            </Row>
          </Container>
        </>
      );
  }