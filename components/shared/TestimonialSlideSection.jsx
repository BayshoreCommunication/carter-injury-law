"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialSlider from "./TestimonialSlider";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlideSection = ({ className }) => {
  return (
    <div
      className={`shadow-[rgba(0,0,0,.5)_0px_0px_30px] my-6 md:my-8 bg-white ${className}`}
    >
      <Swiper
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialSlider />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSlider />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSlider />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSlider />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSlider />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSlider />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSlider />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSlider />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialSlider />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestimonialSlideSection;
