import React from 'react';
//import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from "../img/homeImg/img17.webp";

const Slider = () => {
  return (
    <div >
        <Swiper
            spaceBetween={50}
            effect={'fade'}
            speed={800}
            slidesPerView={1}
            loop
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src={img1} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider
