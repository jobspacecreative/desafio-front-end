import styled from 'styled-components';
import iconCart from "../../assets/image/cart-icon.png";

export const CartButton = styled.button`
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  color: #ececec;
  background-color: #1b1a20;
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 2;

  &:focus-visible {
    outline: 3px solid #eabf00;
  }

  &:hover {
    filter: brightness(85%);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  background-color: #1b1a20;
  box-sizing: border-box;
  z-index: 99;

  transition: right 0.2s;

  ${CartButton} {
    left: ${({ isOpen }) => (isOpen ? '0' : '-50px')};
    background-color: ${({ isOpen }) =>
      isOpen ? '#000' : '#1b1a20'};
  }

  @media only screen and (min-width: 768px) {
    width: 450px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-450px')};

    ${CartButton} {
      left: -50px;
    }
  }
`;

export const CartIcon = styled.div`
  width: ${({ large }) => (large ? '60px' : '50px')};
  height: ${({ large }) => (large ? '60px' : '50px')};
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  background-image: url(${iconCart});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  background-size: 50%;
`;

export const CartQuantity = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  color: #0c0b10;
  font-weight: bold;
  font-size: 0.7em;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  background-color: #eabf00;
  position: absolute;
  bottom: 0;
  right: 5px;
`;

export const HeaderTitle = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  vertical-align: middle;
`;

export const CartContent = styled.div`
  height: 100%;
  overflow-y: scroll;

  @media screen and (min-width: 640px) {
    &::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 10px;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 10px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: #0c0b10;
    }
  }
`;

export const CartContentHeader = styled.div`
  color: #ececec;
  box-sizing: border-box;
  text-align: center;
  padding: 45px 0;
`;

export const CartFooter = styled.div`
  box-sizing: border-box;
  padding: 5%;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 200px;
  z-index: 2;
  background-color: #1b1a20;

  &::before {
    content: '';
    width: 100%;
    height: 20px;
    display: block;
    position: absolute;
    top: -20px;
    left: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
  }
`;

export const Sub = styled.p`
  width: 20%;
  color: #5b5a5e;
  vertical-align: middle;
  display: inline-block;
`;

export const SubPrice = styled.div`
  width: 80%;
  text-align: right;
  color: #5b5a5e;
  vertical-align: middle;
  display: inline-block;
`;

export const SubPriceValue = styled.p`
  color: #eabf00;
  font-size: 22px;
  margin: 0;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  border: 0;
  color: #ececec;
  text-transform: uppercase;
  background-color: #0c0b10;
  text-align: center;
  padding: 15px 0;
  margin-top: 40px;
  cursor: pointer;
  outline: none;

  transition: background-color 0.2s;

  &:focus-visible {
    outline: 3px solid #eabf00;
  }

  &:hover {
    background-color: #000;
  }
`;