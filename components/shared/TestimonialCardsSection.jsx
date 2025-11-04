"use client";

import SectionLayout from "./SectionLayout";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialCardsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "RAY",
      category: "CAR ACCIDENT",
      accentColor: "red",
      link: "https://www.youtube.com/embed/4qYuQw5i-98?si=JU_fSi1xbAep_9nB",
      testimonial:
        "Carter Injury Law provided excellent legal support during my car accident. They remained clear, communicative, and professional throughout. They promptly answered all my questions. David was aggressive and committed during negotiation, securing a much better settlement than expected. I highly recommend Carter Injury Law for their professionalism and strong advocacy.",
    },
    {
      id: 2,
      name: "CHRISTINA",
      category: "CAR ACCIDENT",
      accentColor: "green",
      link: "https://www.youtube.com/embed/qrPQjdo6imo?si=CW5w_tjlJz7mF6JR",
      testimonial:
        "After a frustrating two-year experience with a large law firm that showed minimal communication or progress, switching to Carter Injury Law made an immediate difference. David and his team were responsive, compassionate, and actually cared about my case. Within just a few months, they accomplished more than the previous firm had in years. I highly recommend Carter Injury Law for anyone seeking a dedicated and effective legal team.",
    },
    {
      id: 2,
      name: "CHRISTINA",
      category: "CAR ACCIDENT",
      accentColor: "green",
      link: "https://www.youtube.com/embed/qrPQjdo6imo?si=CW5w_tjlJz7mF6JR",
      testimonial:
        "After a frustrating two-year experience with a large law firm that showed minimal communication or progress, switching to Carter Injury Law made an immediate difference. David and his team were responsive, compassionate, and actually cared about my case. Within just a few months, they accomplished more than the previous firm had in years. I highly recommend Carter Injury Law for anyone seeking a dedicated and effective legal team.",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className="text-yellow-500 text-xl">
        ★
      </span>
    ));
  };

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
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            loop
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="rounded-lg overflow-hidden shadow-xl mx-4">
                  {/* Video Thumbnail Section */}
                  <div className="relative aspect-video">
                    <iframe
                      src={testimonial.link}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Testimonial from ${testimonial.name}`}
                      loading="lazy"
                      className="w-full h-64 md:h-96"
                    ></iframe>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Name */}
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {testimonial.name.charAt(0) +
                        testimonial.name.slice(1).toLowerCase()}
                    </h3>

                    {/* Star Rating */}
                    <div className="flex mb-4">{renderStars(5)}</div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm leading-relaxed">
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
        /* Move pagination dots lower and change color to primary */
        .custom-swiper-pagination {
          display: flex;
          justify-content: center;
          margin-top: 2rem; /* extra space below content */
        }

        .custom-swiper-pagination .swiper-pagination-bullet {
          background-color: #1d4ed8; /* Primary color */
          opacity: 1;
        }

        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background-color: #2563eb; /* Active primary color */
        }
      `}</style>
    </section>
  );
};

export default TestimonialCardsSection;
