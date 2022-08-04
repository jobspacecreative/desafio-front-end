/**
 * @desc [Componente do Produto no carrinho]
 */
import React from 'react';
import { Container, BoxCard, Title, Price, Remover } from './styles';

export default function ProductCart({ productsCartList }) {

    return(
        <Container>
            {productsCartList.map((product) => (
                <BoxCard>
                    <img src={product.avatar} alt="product" aria-hidden />
                    <Title>{product.name}</Title>
                    <Price>{product.price}</Price>
                    <Remover>X</Remover>
                </BoxCard>
            ))}
        </Container>
    );
}