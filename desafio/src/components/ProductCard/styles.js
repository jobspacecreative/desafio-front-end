import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #F0F0F0;
  padding-bottom: 5px;
`;

export const ImageContainer = styled.div`
  overflow: hidden;
`;

export const Image = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  transition: transform .5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled.h2`
  margin: 10px 5px;
  color: ${props => props.theme.colors.text};
`
export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Price = styled.p`
  margin: 5px;
`

export const Button = styled.button`
  padding: 10px;
  font-weight: 700;
  color: ${props => props.theme.colors.textWhite};
  background: ${props => props.theme.colors.primary};
  border: none;
  cursor: pointer;
`