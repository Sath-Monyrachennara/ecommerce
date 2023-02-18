import React from 'react';
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from "../img/homeImg/img17.webp";
import img2 from "../img/homeImg/img18.webp";
import img3 from "../img/homeImg/img21.jpg";

const style = {
    mySwiper: {
        width: "100%",
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    }
}

const Slider = () => {
  return (
    <div className={style.container}>
        <Swiper
            modules={[Navigation, EffectFade]}
            spaceBetween={50}
            effect={'fade'}
            navigation
            speed={800}
            slidesPerView={1}
            loop
            className={style.mySwiper}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide className={style.swiperSlide}>
                <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
                <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide className={style.swiperSlide}>
                <img src={img3} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Slider
