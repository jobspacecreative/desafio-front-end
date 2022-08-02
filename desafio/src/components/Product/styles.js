import styled from "styled-components";

export const AddButton = styled.button`
  background-color: #1b1a20;
  color: #fff;
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border: 0;

  transition: background-color 0.2s;

  &:focus-visible {
    outline: 3px solid #eabf00;
  }
`;

export const Image = styled.div``;

export const Container = styled.div`
  position: relative;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 30px;
  cursor: default;
  outline: none;

  &:focus-visible {
    outline: 3px solid #eabf00;
  }

  img {
    width: 100%;
    height: 270px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    ::before {
      content: '';
      display: block;
      position: absolute;
      background: #eee;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
`;

export const Title = styled.p`
  position: relative;
  padding: 0 20px;
  height: 30px;
  margin-top: 1rem;
  font-weight: 600;
  font-size: 1.1rem;

  &::before {
    content: '';
    width: 20px;
    height: 2px;
    background-color: #eabf00;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -10px;
  }
`;

export const Description = styled.p`
  position: relative;
  padding: 0 20px;
  height: 30px;
`;

export const Price = styled.div`
  height: 40px;
  position: relative;
  margin-top: 5rem;
  padding: 0 20px;

  .val {
    b {
      font-size: 1.5em;
      margin-left: 5px;
    }
  }
`;

export const Val = styled.p`
  margin: 0;
  b {
    font-size: 1.5em;
    margin-left: 5px;
  }
`;



