import React from 'react';
import { Container, Nav, Logo, Buttons, Button, CartQty } from './styles';
import { AiOutlineShopping } from 'react-icons/ai';

import logo from '../../assets/images/logo.svg';
import { useAppContext } from '../../contexts/AppContext';
import Cart from '../Cart';

const Header = () => {
  const { setShowCart, showCart, totalQuantities } = useAppContext();

  return (
    <Container>
      <Nav>
        <Logo src={logo} alt='logo'/>
        <Buttons>
          <Button onClick={() => setShowCart(true)}>
            <AiOutlineShopping size={30} color='#E51674'/>
            <CartQty>{totalQuantities}</CartQty>
          </Button>
        </Buttons>  
      </Nav>  
      {showCart && <Cart />}
    </Container>  
  )
}

export default Header;