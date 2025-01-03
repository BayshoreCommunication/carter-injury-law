"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SectionLayout from "./SectionLayout";
import { testimonialsData } from "@/config/testimonialsData";

const TestimonialSlideSection = ({ className }) => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.params.navigation.prevEl = prevButtonRef.current;
      swiperInstance.params.navigation.nextEl = nextButtonRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  const testimonialsInfo = testimonialsData?.find(
    (el, index) => index === sliderIndex
  );

  return (
    <div
      className={`shadow-[rgba(0,0,0,.5)_0px_0px_10px] my-6 md:my-8 bg-white ${className}`}
    >
      <SectionLayout>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          ref={swiperRef}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onSlideChange={(swiper) => {
            setSliderIndex(swiper.activeIndex);
          }}
          className="mySwiper"
        >
          {testimonialsData?.map((el, index) => (
            <SwiperSlide key={index}>
              <div className="w-full lg:w-[80%] text-center mx-auto flex flex-col gap-6 lg:gap-10 py-10">
                <p className="text-lg md:text-2xl lg:text-3xl font-semibold italic">
                  " {el?.review}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center gap-x-8 justify-center mt-4">
          <button
            ref={prevButtonRef}
            className="text-gray-500 hover:text-gray-800 p-3 border border-gray-500 rounded-full"
          >
            <IoIosArrowBack size={24} />
          </button>
          <div className="flex items-center gap-8 justify-center">
            <div>
              <div className="font-bold text-gray-800 text-center w-[190px]">
                {testimonialsInfo?.name}
              </div>
              <div className="flex justify-center items-center">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <span key={index} className="text-yellow-500 text-xl">
                      &#9733;
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <button
            ref={nextButtonRef}
            className="text-gray-500 hover:text-gray-800 p-3 border border-gray-500 rounded-full"
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
      </SectionLayout>
    </div>
  );
};

export default TestimonialSlideSection;
