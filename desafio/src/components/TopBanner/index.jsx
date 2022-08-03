import React from 'react';
import { Container, Subtitle } from './styles';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";

import banner from '../../assets/images/banner.png';

const TopBanner = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner} alt="" /><Subtitle>Teste 1</Subtitle></SwiperSlide>
        <SwiperSlide><img src={banner} alt="" /><Subtitle>Teste 2</Subtitle></SwiperSlide>
        <SwiperSlide><img src={banner} alt="" /><Subtitle>Teste 3</Subtitle></SwiperSlide>
        <SwiperSlide><img src={banner} alt="" /><Subtitle>Teste 4</Subtitle></SwiperSlide>
        <SwiperSlide><img src={banner} alt="" /><Subtitle>Teste 5</Subtitle></SwiperSlide>
        <SwiperSlide><img src={banner} alt="" /><Subtitle>Teste 6</Subtitle></SwiperSlide>
      </Swiper>
      
    </Container>
  )
}

export default TopBanner;