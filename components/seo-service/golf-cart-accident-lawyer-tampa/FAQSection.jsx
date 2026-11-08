"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I File a Claim if I Was Injured as a Passenger in a Golf Cart?",
      answer: "Injured passengers possess strong legal rights to pursue compensation against negligent cart operators or third party drivers. Available insurance coverage depends on driver liability policies, owner vehicle coverage and surrounding motor vehicle insurance. Passenger injury claims require proving that driver negligence or hazardous property conditions directly caused the collision.",
    },
    {
      question: "Does Florida Require Golf Cart Insurance for Accidents on Public Roads?",
      answer: "Florida law distinguishes standard golf carts from registered low speed vehicles with mandatory personal injury protection rules. Traditional golf carts operate under different liability guidelines unless designated as low speed vehicles by local authorities. Property damage liability and bodily injury coverage requirements vary based on specific vehicle registration and municipal laws.",
    },
    {
      question: "Can a Golf Cart Rental Company Be Held Responsible for an Accident?",
      answer: "Rental businesses face direct legal liability when failing to maintain fleet vehicles or renting unsafe carts to customers. Proving negligence requires showing the company knew or should have known about dangerous mechanical vehicle defects. Rental agreements cannot shield commercial vendors from liability when gross negligence or poor maintenance causes severe crashes.",
    },
  ];

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-[#faf9f6] py-14 md:py-20 border-t border-gray-100">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 text-primary font-bold text-xs uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Answers To Common Questions</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[20px] border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-extrabold text-secondary text-base sm:text-lg hover:text-primary transition-colors focus:outline-none"
                >
                  <span>{item.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-red-50 text-primary" : "text-gray-400"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed font-medium border-t border-gray-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;

