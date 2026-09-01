"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Justin Levy",
      stars: 5,
      quote: "David Carter was recommended to me by a friend and now I understand why. His communication skills are out of this world. He made sure that I felt like a priority. He always communicated in a timely manner. David fights for what's right and doesn't settle for less. I would 100% recommend David Carter to anyone and everyone who needs a Personal Injury Lawyer.",
    },
    {
      name: "Christopher Fennell",
      stars: 5,
      quote: "I have known David since law school. When I was in an accident, I called him because I knew I could trust him. David advised me every step of the way and I assure you, I asked a lot of questions. He made decisions that pressured the opposition, and helped me to achieve a great result. I thank him, and I would recommend him to my loved ones.",
    },
    {
      name: "Diane Frisco",
      stars: 5,
      quote: "David is very easy to work with, walks you through the entire process of your case, answers any questions you have honestly and genuinely, he was also very easy to get in touch with when you needed to. I was really satisfied with my experience working with David, and would recommend working with him.",
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
            What Our Tampa Premises Liability Wrongful Death Clients Say About Their Experience With Our Firm
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
                  "{item.quote}"
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
