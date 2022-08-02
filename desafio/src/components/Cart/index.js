import { useContext, useState } from "react";
import { CartContext } from "../../context";
import ProductCart from "../ProductCart";
import * as S from './styles';

export default function Cart() {
    const [cart] = useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);
    const totalPrice = cart.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.price), 0);
    const formatPrice = totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    function handleToggleCart(isOpen) {
        isOpen ? closeCart() : openCart()
    }

    return (
        <S.Container isOpen={isOpen}>
            <S.CartButton onClick={() => handleToggleCart(isOpen)}>
                {isOpen ? (
                    <span>X</span>
                ) : (
                    <S.CartIcon>
                        <S.CartQuantity>
                            {cart.length}
                        </S.CartQuantity>
                    </S.CartIcon>
                )}
            </S.CartButton>

            {isOpen && (
                <S.CartContent>
                    <S.CartContentHeader>
                        <S.CartIcon large>
                            <S.CartQuantity>{cart.length}</S.CartQuantity>
                        </S.CartIcon>
                        <S.HeaderTitle>Carrinho</S.HeaderTitle>
                    </S.CartContentHeader>
                    {cart.map(item => <ProductCart name={item.name} price={item.price} avatar={item.avatar} id={item.id} />)}

                    <S.CartFooter>
                        <S.Sub>
                            TOTAL
                        </S.Sub>
                        <S.SubPrice>
                            <S.SubPriceValue>
                                {formatPrice}
                            </S.SubPriceValue>
                        </S.SubPrice>
                        <S.CheckoutButton>
                            FINALIZAR COMPRA
                        </S.CheckoutButton>
                    </S.CartFooter>
                </S.CartContent>
            )}
        </S.Container>

    )

}