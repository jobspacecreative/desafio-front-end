import React from 'react';
import { Container, Subtitle } from './styles';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/bundle";

import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/banner3.png';
import banner4 from '../../assets/images/banner4.png';

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
        <SwiperSlide><img src={banner1} alt="" /><Subtitle>Passe mais tempo com seu melhor amigo!</Subtitle></SwiperSlide>
        <SwiperSlide><img src={banner2} alt="" /><Subtitle>Roupas e acessórios!</Subtitle></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="" /><Subtitle>Compre no conforto do seu lar!</Subtitle></SwiperSlide>
        <SwiperSlide><img src={banner4} alt="" /><Subtitle>Tudo em um só lugar!</Subtitle></SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default TopBanner;