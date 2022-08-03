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
  margin: 40px 0;
  font-weight: 600;
  color: ${props => props.theme.colors.textBlack};

  @media (max-width: 425px) {
    margin: 20px 0;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  width: 100%;
  padding: 0 20px;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    padding: 10px 70px;
    text-align: center;
  }
  .icon {
    margin-left: -40px;
  }
  @media (max-width: 425px) {
    margin-bottom: 20px;
    input {
      margin-right: 10px;
    }
  }
`;

export const Products = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 25px;
`;