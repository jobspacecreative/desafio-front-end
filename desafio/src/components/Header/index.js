/**
 * @desc [Componente do Header]
 */
import React, {useState, useEffect} from 'react';
import { Container, BoxAside } from './styles';

import Button from 'react-bootstrap/Button';

//components
import Search from '../Search';
import ProductCart from '../ProductCart';

export default function Header({ searchText, setSearchText, productsCartList, setProductsCartList }) {
    const [active, setActive] = useState(false);
    let [totalPriceProducts, setTotalPriceProducts] = useState([]);

    useEffect(() => {
        let sum = 0;
        productsCartList.forEach((product) => {
            sum += Number(product.price);
        });
        setTotalPriceProducts(sum);
    }, [productsCartList]);

    return(
        <>
        <Container>
            <p>Logo</p>
            <Search
                searchText={searchText}
                setSearchText={setSearchText}
            />
            <Button variant="primary" onClick={() => setActive(true)}>Carrinho ({productsCartList.length})</Button>
        </Container>
        <BoxAside active={active}>
            
            <Button variant="danger" style={{height: 35, marginRight: '1rem'}} onClick={() => setActive(false)}>X</Button>
            <p className="text-center">Carrinho</p>
            
            <div>
                <ProductCart
                    productsCartList={productsCartList}
                    setProductsCartList={setProductsCartList}
                />
            </div>
            <p>Valor total: {totalPriceProducts.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
        </BoxAside>
        </>
    );
}