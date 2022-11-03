import styled from 'styled-components';

export const BoxCard = styled.div`
  width: 16em;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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