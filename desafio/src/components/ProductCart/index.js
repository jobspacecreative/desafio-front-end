/**
 * @desc [Componente do Produto no carrinho]
 */
import React from 'react';
import { Container, BoxCard, Title, Price, Remover } from './styles';

export default function ProductCart({ productsCartList, setProductsCartList }) {

    return(
        <Container>
            {productsCartList.map((product, index) => (
                <BoxCard key={product.key}>
                    <img src={product.avatar} alt="product" aria-hidden />
                    <Title>{product.name}</Title>
                    <Price>{product.price}</Price>
                    <Remover onClick={() => {
                        const newProductsCart = [...productsCartList];
                        newProductsCart.splice(index, 1);
                        setProductsCartList(newProductsCart);
                    }}>X</Remover>
                </BoxCard>
            ))}
        </Container>
    );
}