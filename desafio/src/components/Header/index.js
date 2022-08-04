/**
 * @desc [Componente do Header]
 */
import React, {useState} from 'react';
import { Container, BoxAside } from './styles';

import Button from 'react-bootstrap/Button';

//components
import Search from '../Search';
import ProductCart from '../ProductCart';

export default function Header({ searchText, setSearchText }) {
    const [active, setActive] = useState(false);

    return(
        <>
        <Container>
            <p>Logo</p>
            <Search
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <Button variant="primary" onClick={() => setActive(true)}>Carrinho (1)</Button>
        </Container>
        <BoxAside active={active}>
            
            <Button variant="danger" style={{height: 35}} onClick={() => setActive(false)}>X</Button>
            
            <div>
                <p className="text-center">Carrinho</p>
                <ProductCart props/>
            </div>
            <p>Valor total: 170.00</p>
        </BoxAside>
        </>
    );
}