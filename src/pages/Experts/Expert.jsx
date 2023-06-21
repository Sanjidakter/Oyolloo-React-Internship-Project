import React from 'react';
import expert1 from "../../assets/expert1.jpg";
import expert2 from "../../assets/expert2.jpg";
import expert3 from "../../assets/expert3.jpg";
import expert4 from "../../assets/expert4.jpg";
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
          <SwiperSlide><img src={expert1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={expert2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={expert3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={expert4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={expert1} alt="" /></SwiperSlide>
         
         
         
        </Swiper>
      </>
      )
};

export default Expert;