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
      link: "https://www.youtube.com/embed/4qYuQw5i-98?si=JU_fSi1xbAep_9nB",
      testimonial:
        "Carter Injury Law provided excellent legal support during my car accident. They remained clear, communicative, and professional throughout. They promptly answered all my questions. David was aggressive and committed during negotiation, securing a much better settlement than expected. I highly recommend Carter Injury Law for their professionalism and strong advocacy.",
    },
    {
      id: 2,
      name: "CHRISTINA",
      link: "https://www.youtube.com/embed/qrPQjdo6imo?si=CW5w_tjlJz7mF6JR",
      testimonial:
        "After a frustrating two-year experience with a large law firm that showed minimal communication or progress, switching to Carter Injury Law made an immediate difference. David and his team were responsive, compassionate, and actually cared about my case. Within just a few months, they accomplished more than the previous firm had in years. I highly recommend Carter Injury Law for anyone seeking a dedicated and effective legal team.",
    },
    {
      id: 3,
      name: "Steve",
      link: "https://www.youtube.com/embed/Sl56ZgiahTo?si=HXqiQGJBick_nR0B",
      testimonial:
        "Choosing David Carter at Carter Injury Law was truly the best decision I made after my car accident. The situation became complicated because the other driver did not have proper insurance, but David guided me through everything with confidence and care. He explained each step clearly, fought hard against the insurance company, and came to trial completely prepared. His professionalism and attention to detail helped secure a strong settlement that covered all my medical bills and more. If you are looking for a Largo car accident lawyer who delivers real results, Carter Injury Law is the one to call.",
    },
    {
      id: 4,
      name: "Judith",
      link: "https://www.youtube.com/embed/386GMyUyMIw?si=1V-6bEEOmxOn2v-9",
      testimonial:
        "After being hit by a large RV, I was confused and did not know what to do next. English is not my first language, and I needed a patient and understanding attorney. David Carter at Carter Injury Law went above and beyond to help me. He explained everything clearly, prepared me for court, and made sure I always understood what was happening. Thanks to his dedication and expertise, we won a $400,000 settlement that covered all my medical expenses. Anyone searching for a personal injury lawyer in Tampa who truly cares should choose Carter Injury Law.",
    },
    {
      id: 5,
      name: "Amanda",
      link: "https://www.youtube.com/embed/Jy5I0PhG5fU?si=AMTxsFFuZR0Kfc6X",
      testimonial:
        "Dealing with a rear-end collision was overwhelming until Carter Injury Law stepped in to help. David Carter and his team went above and beyond; explaining everything clearly, staying in constant communication, and making sure I felt supported the entire time. Their hard work resulted in a policy-limit settlement that fully covered my medical costs. It’s rare to find a Largo car accident attorney who combines skill, empathy, and results, but Carter Injury Law does exactly that. I’m truly grateful for everything they did to help me recover.",
    },
  ];

  const slideRefs = useRef([]);

  // Equalize all card heights
  useEffect(() => {
    const setEqualHeight = () => {
      const heights = slideRefs.current.map(slide => slide?.offsetHeight || 0);
      const maxHeight = Math.max(...heights);
      slideRefs.current.forEach(slide => {
        if (slide) slide.style.height = `${maxHeight}px`;
      });
    };

    setEqualHeight();
    window.addEventListener("resize", setEqualHeight);
    return () => window.removeEventListener("resize", setEqualHeight);
  }, [testimonials]);

  const renderStars = () =>
    Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className="text-yellow-500 text-xl">★</span>
    ));

  return (
    <section
      className="relative py-16 px-4 bg-cover bg-center bg-no-repeat"
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
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            onSwiper={(swiper) => {
              // Pause autoplay on hover
              swiper.el.addEventListener("mouseenter", () => swiper.autoplay.stop());
              swiper.el.addEventListener("mouseleave", () => swiper.autoplay.start());
            }}
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={testimonial.id} className="flex">
                <div
                  ref={(el) => (slideRefs.current[i] = el)}
                  className="bg-white shadow-xl rounded-lg flex flex-col w-full"
                >
                  {/* Video */}
                  <div className="relative aspect-video flex-shrink-0">
                    <iframe
                      src={testimonial.link}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Testimonial from ${testimonial.name}`}
                      loading="lazy"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {testimonial.name.charAt(0) + testimonial.name.slice(1).toLowerCase()}
                    </h3>
                    <div className="flex mb-4">{renderStars()}</div>
                    <p className="text-gray-700 text-sm leading-relaxed flex-1">
                      {testimonial.testimonial}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Custom Pagination */}
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
          background-color: #1d4ed8; /* primary color */
          opacity: 1;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #c73938; /* active color */
        }
      `}</style>
    </section>
  );
};

export default TestimonialCardsSection;
