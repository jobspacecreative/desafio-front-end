import React from 'react';
import { Container, Image, Title, Price, Infos, Button, ImageContainer } from './styles';

const ProductCard = ({product}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={product.avatar} alt="" />
      </ImageContainer>  
      <Title>{product.name}</Title>
      <Infos>
        <Price>R${product.price}</Price>
        <Button>ADICIONAR AO CARRINHO</Button>
      </Infos>  
    </Container>
  )
}

export default ProductCard;