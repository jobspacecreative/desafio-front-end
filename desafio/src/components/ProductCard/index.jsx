import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import { Container, Image, Title, Price, Infos, Button, ImageContainer, Desc } from './styles';

const ProductCard = ({product}) => {
  const { onAdd } = useAppContext();

  return (
    <Container>
      <ImageContainer>
        <Image src={product.avatar} alt="" />
      </ImageContainer>  
      <Title>{product.name}</Title>
      <Desc>{product.desciption}</Desc>
      <Infos>
        <Price>R$ {product.price}</Price>
        <Button onClick={() => onAdd(product, 1)}>ADICIONAR AO CARRINHO</Button>
      </Infos>  
    </Container>
  )
}

export default ProductCard;