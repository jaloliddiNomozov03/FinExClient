import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { WindowsOutlined, AppleOutlined } from "@ant-design/icons";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./slider.css";
// import CardForSlider from './cardForSlider.jsx';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";
// import CardForSLider from "./cardForSlider.jsx";
import ImageDemo from "./cardImg.jsx";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const ContentSlider=()=> {
  return (
    <Swiper
      slidesPerView={4}
      slidesPerColumn={0}
      spaceBetween={10}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="mySwiper"
    >
      <SwiperSlide>
        {/* <CardForSLider key='card-1'/> */}
        <ImageDemo />
      </SwiperSlide>
      <SwiperSlide>
        {/* <CardForSLider key='card-2'/> */}
        <ImageDemo />
      </SwiperSlide>
      <SwiperSlide>
        {/* <CardForSlider key='card-3'/> */}
        <ImageDemo />
      </SwiperSlide>
      <SwiperSlide>
        {/* <CardForSLider key='card-4'/> */}
        <ImageDemo />
      </SwiperSlide>
      <SwiperSlide>
        {/* <CardForSLider key='card-5'/> */}
        <ImageDemo />
      </SwiperSlide>
      <SwiperSlide>
        {/* <CardForSLider key='card-6'/> */}
        <ImageDemo />
      </SwiperSlide>
      <SwiperSlide>
        {/* <CardForSLider key='card-7'/> */}
        <ImageDemo />
      </SwiperSlide>
      <SwiperSlide>
        {/* <CardForSLider key='card-8'/> */}
        <ImageDemo />
      </SwiperSlide>
      <SwiperSlide>
        {/* <CardForSLider key='card-9'/> */}
        <ImageDemo />
      </SwiperSlide>
    </Swiper>
  );
}
export default ContentSlider;