"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Colin Korber",
      stars: 5,
      quote:
        "I had an amazing experience working with David Carter at Carter Injury Law. From start to finish, he was incredibly knowledgeable, supportive, and responsive throughout the entire case. His expertise and guidance made everything feel easy and straightforward, and I truly felt like I was in great hands the whole time. I couldn't be more thrilled with the outcome. If you're looking for someone who genuinely cares and delivers results, I highly recommend David. He's the best!",
    },
    {
      name: "Joseph Haubrich",
      stars: 5,
      quote:
        "David Carter Personal Injury Law is professional, responsive, and genuinely cares about their clients. They make the process easy to understand, communicate clearly, and take the time to make sure you feel supported throughout the entire experience. If you're looking for a personal injury attorney who is knowledgeable, dependable, and puts his clients first, I highly recommend David Carter.",
    },
    {
      name: "Kathie Ann Wild",
      stars: 5,
      quote:
        "David and his team are invested in getting the best result for their clients. They are not afraid to go to court to fight for their clients versus just settling. Highly recommend Carter Injury Law!!",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-primary font-bold text-xs uppercase tracking-wider mb-3">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span>5-Star Client Reviews</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            What Our Tampa Uber Accident Clients Say About Their Experience With Our Firm
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-gray-50/80 p-8 rounded-[24px] border border-gray-100 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all duration-300 relative"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed font-medium italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <span className="font-extrabold text-secondary text-base">
                  — {item.name}
                </span>
                <Quote className="w-6 h-6 text-gray-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

