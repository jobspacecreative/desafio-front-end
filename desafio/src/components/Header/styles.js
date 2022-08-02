import styled from "styled-components";

export const Container = styled.div`
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Nav = styled.div`
  display: flex;
  width: 100%;
  max-width: 1600px;
  justify-content: space-between;
  padding: 0 20px;
`

export const Logo = styled.img`
  height: 40px;
`

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.primary};
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  margin: 0 20px;
  background: transparent;
`