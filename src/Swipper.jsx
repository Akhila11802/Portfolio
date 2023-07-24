import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.css'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './index.css';

import slide_image_1 from './assets/images/img1_1.jpeg';
import slide_image_2 from './assets/images/img1_2.jpeg';
import slide_image_3 from './assets/images/img1_3.jpeg';
import slide_image_4 from './assets/images/img1_4.jpeg';
import slide_image_5 from './assets/images/img1_5.jpeg';
import slide_image_6 from './assets/images/img1_6.jpg';
import slide_image_7 from './assets/images/img1_7.jpeg';
import slide_image_8 from './assets/images/img1_8.jpeg';


function Swipper() {
  return (
    <div className="container">
      <h1 className="heading">Achievements</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>

          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>

            </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Swipper;