import { Swiper, SwiperSlide } from 'swiper/react';
import CardBeauty from '../CardBeauty/CardBeauty';
import { SliderProps } from './Slider.type';
import { FC } from 'react';

import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Slider: FC<SliderProps> = ({ items }) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1.5}
        spaceBetween={10}
        breakpoints={{
          768: {
            spaceBetween: 20,
            slidesPerView: 2,
          },
        }}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="flex w-full flex-row"
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.image.src + index}>
            <CardBeauty {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
