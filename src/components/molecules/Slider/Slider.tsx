'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardBeauty from '../CardBeauty/CardBeauty';
import { SliderProps } from './Slider.type';
import { FC } from 'react';

import { Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';

const Slider: FC<SliderProps> = ({ items }) => {
  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={16}
      breakpoints={{
        768: {
          spaceBetween: 20,
          slidesPerView: 2,
        },
      }}
      parallax={true}
      watchSlidesProgress={true}
      modules={[Autoplay, Parallax]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="flex w-full flex-row"
    >
      {items.map((item, index) => (
        <SwiperSlide key={item.image.src + index} className="max-w-[450px]">
          <CardBeauty {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
