/**
 * @desc [Componente do Produto em lista]
 */
import React from 'react';
import { BoxCard, Price } from './styles';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product() {

    return(
        <BoxCard>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="http://www.receitadodia.com/wp-content/uploads/2013/07/bolo_chocolate-521x380.jpg" />
                <Card.Body>
                    <Card.Title>Bolo de chocolate</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus condimentum ipsum vitae auctor. 
                    <Price>129.60</Price>
                    </Card.Text>
                    <Button variant="primary">Adicionar ao carrinho</Button>
                </Card.Body>
            </Card>
        </BoxCard>
    );
}