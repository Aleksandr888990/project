import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";
import Slide3 from "./Slide3/Slide3";

import './Slider.scss';

type Props = {};

const Slider = (props: Props) => {

  
  return (
    <>
      <Swiper
        className="swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 8000 }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
      </Swiper>

    </>
  );
};

export default Slider;
