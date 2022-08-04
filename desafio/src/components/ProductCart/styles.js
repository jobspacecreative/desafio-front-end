import styled from 'styled-components';

export const Container = styled.div`
  height: 50vh;
  overflow-y: scroll;
  width: 280px;
`

export const BoxCard = styled.div`
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
export const Title = styled.text`
  color: black;
  font-weight: bold;
  margin-top: 10px;
`;

export const Price = styled.text`
  color: green;
`;
export const Remover = styled.text`
  color: red;
  font-weight: bold;
  cursor: pointer;
`;