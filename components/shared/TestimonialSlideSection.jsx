"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SectionLayout from "./SectionLayout";

const TestimonialSlideSection = ({ className }) => {
  // Refs for navigation buttons
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

  return (
    <div
      className={`shadow-[rgba(0,0,0,.5)_0px_0px_10px] my-6 md:my-8 bg-white ${className}`}
    >
      <SectionLayout>
        <Swiper
          ref={swiperRef}
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5].map((el, index) => (
            <SwiperSlide key={index}>
              <div className="w-full lg:w-[80%] text-center mx-auto flex flex-col gap-6 lg:gap-10 py-10">
                <p className="text-lg md:text-2xl lg:text-3xl font-semibold italic">
                  "Words cannot express the gratitude I have for you and your
                  team. As soon as you took over my case, you and your team
                  worked diligently on a resolution. Thank you so much for
                  treating me as a person and showing so much care. You
                  definitely made me feel at ease that my case was in great
                  hands. Thank you so much!!"
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
              <div className="font-bold text-gray-800 text-center">
                Diane F.
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
