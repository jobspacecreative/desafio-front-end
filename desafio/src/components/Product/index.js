/**
 * @desc [Componente do Produto em lista]
 */
import React, { useContext } from 'react';
import { CartContext } from '../../context';
import * as S from './styles';

export default function Product({ name, price, desciption, avatar }) {
    const [cart, setCart] = useContext(CartContext);

    function addToCart() {
        const cartItem = { name: name, price: price, id: name + Date.now(), avatar: avatar }
        setCart([...cart, cartItem]);
    }

    return (
        <S.Container>
            <S.Image>
                <img src={avatar} alt="infor" />
            </S.Image>
            <S.Title>{name}</S.Title>
            <S.Description>{desciption}</S.Description>
            <S.Price>
                <S.Val>
                    <small>R$</small>
                    <b>{price}</b>
                </S.Val>
            </S.Price>
            <S.AddButton onClick={addToCart}>
                ADICIONAR AO CARRINHO
            </S.AddButton>
        </S.Container>
    );
}