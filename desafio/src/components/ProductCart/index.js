/**
 * @desc [Componente do Produto no carrinho]
 */
import React from 'react';
import { BoxCard, Title, Price, Remover } from './styles';

export default function ProductCart() {

    return(
        <BoxCard>
            <img src="http://www.receitadodia.com/wp-content/uploads/2013/07/bolo_chocolate-521x380.jpg" alt=""/>
            <Title>Titulo do produto</Title>
            <Price>170.00</Price>
            <Remover>X</Remover>
        </BoxCard>
    );
}