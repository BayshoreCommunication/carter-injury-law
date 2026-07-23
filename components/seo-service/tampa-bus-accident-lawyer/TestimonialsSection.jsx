"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Star, ChevronLeft, ChevronRight, MessageCircle, Heart } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reviews = [
  {
    stars: 5,
    text: "An uninsured driver caused my accident and I honestly did not expect much help. David made sure I received every available benefit from my coverage options here. My medical bills were covered and my car was replaced by the team. I never had to face any of it alone thanks to the lawyers.",
    name: "Estelle",
    location: "Tampa, FL",
    image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/dedicated-counsel.png",
  },
  {
    stars: 5,
    text: "After our property was damaged due to contractor negligence David Carter settled. He settled our case with the insurance company in just a few months. He kept us informed at every step until the matter was resolved daily.",
    name: "Luiz",
    location: "Tampa, FL",
    image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/dedicated-counsel.png",
  },
  {
    stars: 5,
    text: "No one should have to face a serious accident alone in this city. David and his team walk you through every question about your legal rights. They handle your treatment and next steps so you are never guessing here.",
    name: "Dash",
    location: "Tampa, FL",
    image: "/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/dedicated-counsel.png",
  },
];

const TestimonialsSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="w-full bg-[#faf9f6] py-16 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase whitespace-nowrap">
              Client Experiences
            </span>
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight mb-5">
            What Our Tampa Bus Accident Clients Say About Their Experience With Our Firm
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-medium">
            Stories from clients who trusted our team during difficult moments.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span>5-Star Client Experiences</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span>Personal Communication</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-gray-300" />
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span>Compassionate Support</span>
            </div>
          </div>
        </div>

        {/* ── Swiper Slider ── */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            centeredSlides={false}
            autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{
              clickable: true,
              el: ".testimonials-pagination",
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                if (swiper.params?.navigation) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              });
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1200: { slidesPerView: 2, spaceBetween: 28 },
            }}
            className="pb-16"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative bg-secondary rounded-[20px] overflow-hidden min-h-[460px] md:min-h-[500px] flex flex-col justify-between select-none shadow-lg">
                  <div className="absolute inset-0">
                    <Image
                      src={review.image}
                      alt="Client testimonial"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/90 to-secondary/65" />
                  </div>

                  <div className="absolute top-5 left-6 text-[80px] leading-none text-white/[0.06] font-serif select-none pointer-events-none">
                    &#8220;
                  </div>

                  <div className="relative z-10 p-7 md:p-8 flex flex-col justify-between h-full flex-1">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: review.stars }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-primary" strokeWidth={0} />
                      ))}
                    </div>

                    <p className="text-white/90 text-sm md:text-[15px] leading-relaxed font-medium flex-1 overflow-y-auto pr-1">
                      {review.text}
                    </p>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-primary font-extrabold text-[15px]">— {review.name}</p>
                      <p className="text-white/50 text-xs mt-0.5">{review.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center gap-6 mt-2">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-secondary hover:border-primary hover:text-primary transition-all duration-200 shadow-sm shrink-0"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2} />
            </button>

            <div className="testimonials-pagination flex items-center gap-2" />

            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center text-secondary hover:border-primary hover:text-primary transition-all duration-200 shadow-sm shrink-0"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2} />
            </button>
          </div>
        </div>

      </div>

      <style>{`
        .testimonials-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 50%;
          transition: all 0.3s;
        }
        .testimonials-pagination .swiper-pagination-bullet-active {
          background: var(--color-primary, #b4121b);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
