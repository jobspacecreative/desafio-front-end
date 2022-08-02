/**
 * @desc [Componente do Produto no carrinho]
 */
import React, { useContext } from 'react';
import { CartContext } from '../../context';
import * as S from './styles';

export default function ProductCart({ avatar, name, price, id }) {
    const [cart, setCart] = useContext(CartContext);

    function removeProduct(id) {
        setCart(cart.filter(item => item.id !== id))
    }

    return (
        <S.Container>
           <S.MainInfor>
           <S.Image src={avatar} alt="" />
            <S.Details>
                <S.Title>{name}</S.Title>
                <S.Price>{price}</S.Price>
            </S.Details>
           </S.MainInfor>
           <S.MainInfor>
           <S.DeleteButton onClick={() => removeProduct(id)} />
           </S.MainInfor>
        </S.Container>
    );
}