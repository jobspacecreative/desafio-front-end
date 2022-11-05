import styled from 'styled-components';

export const BoxCard = styled.div`
  width: 16em;
  margin: 10px;
  border: solid 1px #c0c0c0;
  padding: 10px;
  border-radius: 10px;
  img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;
export const Title = styled.p`
  color: black;
  font-weight: bold;
  margin-top: 10px;
`;

export const Price = styled.p`
  color: green;
  margin-top:10px;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
`; 

export const ProductCartAmount = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  margin-left: 40%;
`;

export const AmountSpan = styled.span`
  margin-top: 10px;
  margin: 10px;
`;