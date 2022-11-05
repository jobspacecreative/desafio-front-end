import styled from "styled-components";

export const BoxAside = styled.div`
  justify-content: center;
  flex-wrap: wrap;
  background: white;
  position: fixed;
  top: 0;
  height: 100vh;
  overflow:auto; 
  flex: 1;
  width: 300px;
  transition: 0.7s;
  z-index: 1;
  -webkit-box-shadow: -14px 20px 20px -23px rgba(8, 5, 8, 1);
  -moz-box-shadow: -14px 20px 20px -23px rgba(8, 5, 8, 1);
  box-shadow: -14px 20px 20px -23px rgba(8, 5, 8, 1);
`;

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PriceArea = styled.div`
  display: flex;
  justify-content: center;
`;