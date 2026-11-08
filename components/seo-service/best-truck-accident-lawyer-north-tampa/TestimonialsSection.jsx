"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Kira Butler",
      stars: 5,
      quote:
        "David Carter was amazing for my personal injury needs! He came highly recommended from a friend that worked for another lawyer. He took care of all of my needs and made the process so easy. You definitely want to hire him!!!! Thank you so much!",
    },
    {
      name: "Summer Vasseur",
      stars: 5,
      quote:
        "As a chiropractor who regularly works with personal injury patients, I can't say enough great things about Rob. He is incredibly personable and genuinely cares about the well-being of his clients both physically and legally. He is one of the easiest attorneys to reach. He responds quickly whether it is for professional collaboration or patient concerns. His communication is clear, straightforward, and refreshingly down to earth. It is rare to find someone who combines top-tier legal knowledge with compassion and real-world understanding. Rob does it effortlessly. If you are looking for an attorney who truly advocates for his clients and works seamlessly with their healthcare providers, Rob is absolutely the person you want on your side!",
    },
    {
      name: "Marleina R. Taylor",
      stars: 5,
      quote:
        "After a recent multi-car collision, I found myself needing legal support and I'm truly grateful I chose Carter Injury. From the very beginning, Rob, the attorney handling my case, along with Meghan on their team, made what could have been an overwhelming process feel manageable and clear. They kept me consistently informed, set realistic expectations, and communicated in a way that made me feel supported. What stood out most was that I never felt pressured into any decisions. Instead, they took the time to explain my options thoroughly and gave me the information I needed to make the choices that were right for me.I'm very satisfied with how everything was handled and how my case was resolved. If you're looking for a personal injury team that is professional, attentive, and genuinely cares about their clients, I would absolutely recommend Carter Injury.",
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
            What Our North Tampa Truck Accident Clients Say About Their Experience With Our Firm
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

