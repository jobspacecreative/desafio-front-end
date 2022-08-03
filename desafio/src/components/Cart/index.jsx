import React, { useRef } from 'react'
import { 
  AiOutlineLeft, 
  AiOutlineMinus, 
  AiOutlinePlus, 
  AiOutlineShopping 
} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import { useAppContext } from '../../contexts/AppContext';
import { 
  CartWrapper, 
  CartContainer, 
  CartHeading, 
  EmptyCart,
  ProductContainer,
  Product,
  CartBottom
} from './styles';

const Cart = () => {
  const cartRef = useRef();

  const { 
    totalPrice, 
    totalQuantities, 
    cartItems, 
    setShowCart, 
    toggleCartItemQuanitity, 
    onRemove
  } = useAppContext();

  return (
    <CartWrapper ref={cartRef}>
      <CartContainer>
        <CartHeading onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Seu Carrinho</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </CartHeading>

        {cartItems.length < 1 && (
          <EmptyCart>
            <AiOutlineShopping size={150} />
            <h3>Seu carrinho está vazio</h3>
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continuar Comprando
              </button>
          </EmptyCart>
        )}

        <ProductContainer>
          {cartItems.length >= 1 && cartItems.map((item) => (
            <Product key={item.id}>
              <img src={item.avatar} alt="" className="cart-product-image"/>
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>R${item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div>
                  <p className="quantity-desc">
                    <span className="minus" onClick={() => toggleCartItemQuanitity(item.id, 'dec') }>
                    <AiOutlineMinus />
                    </span>
                    <span className="num">{item.quantity}</span>
                    <span className="plus" onClick={() => toggleCartItemQuanitity(item.id, 'inc') }><AiOutlinePlus /></span>
                  </p>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </Product>
          ))}
        </ProductContainer>
        {cartItems.length >= 1 && (
          <CartBottom>
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>R${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="btn">
                Pagar
              </button>
            </div>
          </CartBottom>
        )}
      </CartContainer>
    </CartWrapper>
  )
}

export default Cart;