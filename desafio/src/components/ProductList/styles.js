import styled from "styled-components";

export const ContainerSearch = styled.div`
  width: 50%;
  margin-left: 10px;
`;

export const Container = styled.div`
  display: grid;

 @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1025px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;