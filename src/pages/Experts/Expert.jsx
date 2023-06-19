import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Expert.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

const Expert = () => {
    const params = {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }
      return (
        <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide><img src="/src/assets/expert1.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/src/assets/expert2.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/src/assets/experrt3.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/src/assets/expert4.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="/src/assets/expert1.jpg" alt="" /></SwiperSlide>
         
         
         
        </Swiper>
      </>
      )
};

export default Expert;