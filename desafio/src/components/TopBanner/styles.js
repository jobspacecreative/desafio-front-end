import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.img`
  max-width: 1600px;
  width: 100%;
  height: 60vh;
  object-fit: cover;
  position: relative;
`;

export const Subtitle = styled.h1`
  position: absolute;
  left: 40%;
  bottom: 35%;
  color: #fff;
`