import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const List = styled.div`
  display: flex;
  max-width: 1600px;
  width: 100%;
  align-items: center;
`;

export const Title = styled.h3`
  margin: 40px;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
`;

export const Products = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 20px;
`;