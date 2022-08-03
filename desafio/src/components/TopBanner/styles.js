import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper {
    max-width: 1700px;
    width: 100%;
    height: 100%;
  }
  .swiper-button-next:after, .swiper-button-prev:after {
    display: none;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;


    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    max-width: 1700px;
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

export const Subtitle = styled.h1`
  position: absolute;
  bottom: 40px;
  color: #fff;
  z-index: 1;
`