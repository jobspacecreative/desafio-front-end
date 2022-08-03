import React from 'react';
import ProductCard from '../ProductCard';
import { Container, List, Title, Products } from './styles';
import { useAppContext } from '../../contexts/AppContext';

const ProductList = () => {
  const { productList } = useAppContext();

  return (
    <Container>
      <Title>CONHEÇA NOSSOS PRODUTOS</Title>
      <List>
        <Products>
          {productList.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </Products>
      </List>
    </Container>
  )
}

export default ProductList;