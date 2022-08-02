import styled from 'styled-components';
import iconDelete from '../../assets/image/delete-icon.png'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  padding: 5%;

  transition: background-color 0.2s, opacity 0.2s;

  &::before {
    content: '';
    width: 90%;
    height: 2px;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 5%;
  }
`;

export const MainInfor = styled.div``

export const Image = styled.img`
  display: inline-block;
  vertical-align: middle;
  width: 15%;
  height: auto;
  margin-right: 3%;
`;

export const Details = styled.div`
  width: 57%;
  display: inline-block;
  vertical-align: middle;
`;

export const Title = styled.text`
  color: #ececec;
  margin-top: 10px;
`;

export const Price = styled.div`
  color: #5b5a5e;
  margin: 0;
  color: #eabf00;
`;


export const DeleteButton = styled.button`
  width: 16px;
  height: 16px;
  margin-top: 15px;
  right: 5%;
  border-radius: 50%;
  background-size: auto 100%;
  background-image: url(${iconDelete});
  background-repeat: no-repeat;
  z-index: 2;
  cursor: pointer;
  border: 0;
  background-color: transparent;

  &:focus-visible {
    outline: 3px solid #eabf00;
  }

  &:hover {
    background-position-x: -17px;
  }
`;

export const CartProductsEmpty = styled.p`
  color: #ececec;
  text-align: center;
  line-height: 40px;
`;