"use client";

import { useRef, useEffect } from "react";
import SectionLayout from "./SectionLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialCardsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "RAY",
      link: "https://www.youtube.com/embed/4qYuQw5i-98?enablejsapi=1",
      testimonial:
        "Carter Injury Law provided excellent legal support during my car accident. They remained clear, communicative, and professional throughout.",
    },
    {
      id: 2,
      name: "CHRISTINA",
      link: "https://www.youtube.com/embed/qrPQjdo6imo?enablejsapi=1",
      testimonial:
        "After a frustrating two-year experience with a large law firm, switching to Carter Injury Law made an immediate difference.",
    },
    {
      id: 3,
      name: "STEVE",
      link: "https://www.youtube.com/embed/Sl56ZgiahTo?enablejsapi=1",
      testimonial:
        "Choosing David Carter at Carter Injury Law was truly the best decision I made after my car accident.",
    },
  ];

  const slideRefs = useRef([]);
  const swiperRef = useRef(null);

  // Equalize card heights
  useEffect(() => {
    const setEqualHeight = () => {
      const heights = slideRefs.current.map((slide) => slide?.offsetHeight || 0);
      const maxHeight = Math.max(...heights);
      slideRefs.current.forEach((slide) => {
        if (slide) slide.style.height = `${maxHeight}px`;
      });
    };
    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);
    return () => window.removeEventListener("resize", setEqualHeight);
  }, [testimonials]);

  // ✅ Load YouTube API safely and hook to videos
  useEffect(() => {
    const setupYouTubeAPI = () => {
      if (!window.YT || !window.YT.Player) return;

      const iframes = document.querySelectorAll("iframe[src*='enablejsapi=1']");
      iframes.forEach((iframe) => {
        new window.YT.Player(iframe, {
          events: {
            onStateChange: (event) => {
              if (!swiperRef.current) return;
              if (event.data === window.YT.PlayerState.PLAYING) {
                swiperRef.current.autoplay.stop();
              } else if (
                event.data === window.YT.PlayerState.PAUSED ||
                event.data === window.YT.PlayerState.ENDED
              ) {
                swiperRef.current.autoplay.start();
              }
            },
          },
        });
      });
    };

    // If API already loaded
    if (window.YT && window.YT.Player) {
      setupYouTubeAPI();
    } else {
      // Create script if not already added
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      // When API is ready, run setup
      window.onYouTubeIframeAPIReady = setupYouTubeAPI;
    }
  }, []);

  const renderStars = () =>
    Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className="text-yellow-500 text-xl">
        ★
      </span>
    ));

  return (
    <section
      className="relative py-8 px-4 mt-6 md:mt-10 lg:mt-44 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://bayshore.nyc3.cdn.digitaloceanspaces.com/carterEmailTemplate/image%2023.png")',
      }}
    >
      <SectionLayout>
        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            pagination={{ clickable: true, el: ".custom-swiper-pagination" }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={testimonial.id} className="flex">
                <div
                  ref={(el) => (slideRefs.current[i] = el)}
                  className="bg-white shadow-xl rounded-lg flex flex-col w-full"
                >
                  <div className="relative aspect-video flex-shrink-0">
                    <iframe
                      src={testimonial.link}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={`Testimonial from ${testimonial.name}`}
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {testimonial.name}
                    </h3>
                    <div className="flex mb-4">{renderStars()}</div>
                    <p className="text-gray-700 text-sm leading-relaxed flex-1">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-swiper-pagination mt-6"></div>
          </Swiper>
        </div>
      </SectionLayout>

      <style jsx>{`
        .custom-swiper-pagination {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
          gap: 1px;
        }

        .custom-swiper-pagination .swiper-pagination-bullet {
          background-color: #1d4ed8;
          opacity: 1;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #c73938;
        }
      `}</style>
    </section>
  );
};

export default TestimonialCardsSection;
