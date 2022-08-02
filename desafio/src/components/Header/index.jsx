import React from 'react';
import { Container, Nav, Logo, Buttons, Button } from './styles';
import { AiOutlineShopping, AiOutlineHeart } from 'react-icons/ai';

import logo from '../../assets/images/logo.svg';

const Header = () => {
  return (
    <Container>
      <Nav>
        <Logo src={logo} alt='logo'/>
        <Buttons>
          <Button>
            <AiOutlineHeart size={30} color='#E51674'/>
          </Button>
          <Button>
            <AiOutlineShopping size={30} color='#E51674'/>
          </Button>
        </Buttons>  
      </Nav>  
    </Container>  
  )
}

export default Header;