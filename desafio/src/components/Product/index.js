/**
 * @desc [Componente do Produto em lista]
 */
import React from 'react';
import { BoxCard, Price } from './styles';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product({ avatar, name, desciption, price, key, productsCartList, setProductsCartList }) {

    function handleProductCard(avatar, name, price, key) {
        setProductsCartList([ ...productsCartList, {avatar, name, price, key}])
    }

    return(
        <BoxCard>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {desciption}
                    <Price>{price}</Price>
                    </Card.Text>
                    <Button onClick={() => handleProductCard(avatar, name, price, key)} variant="primary">Adicionar ao carrinho</Button>
                </Card.Body>
            </Card>
        </BoxCard>
    );
}