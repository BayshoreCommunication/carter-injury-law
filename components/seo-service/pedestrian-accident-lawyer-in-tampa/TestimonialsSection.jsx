"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Margo Crofoot-Brown",
      stars: 5,
      quote: "David, thank you for all your help. You made the process so simple for my husband and me. I really appreciated you taking the time to explain our options. I would highly recommend David and his team. They’re professional, responsive, and knowledgeable.",
    },
    {
      name: "Kristin Rink Ketler",
      stars: 5,
      quote: "They say they treat their clients like family, and they truly do. I’m grateful for how knowledgeable they are, but even more so for how patient and available they’ve been. They take great care of everyone I send their way.",
    },
    {
      name: "Breanna Bye",
      stars: 5,
      quote: "David is an extremely attentive and reliable attorney who truly goes above and beyond for his clients. I’d highly recommend him!",
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
            What Our Tampa Pedestrian Accident Clients Say About Their Experience With Our Firm
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
                  &quot;{item.quote}&quot;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <span className="font-extrabold text-secondary text-base">
                  — {item.name}
                </span>
                <Quote className="w-6 h-6 text-gray-300 " />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
