"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Does a Property Owner Owe the Same Duty of Care to Every Visitor?",
      answer: "The duty of care owed depends on the visitor's status. Commercial invitees, meaning paying customers and invited guests at businesses, receive the highest duty of care. Property owners and operators owe these individuals a reasonable obligation to inspect the premises, address known hazards, and provide adequate warning where hazards cannot be immediately remedied.",
    },
    {
      question: "What Types of Evidence Are Most Important in a Fatal Premises Liability Case?",
      answer: "Clear surveillance footage from the subject property provides undeniable visual proof regarding the dangerous conditions present.",
    },
    {
      question: "Can a Business and a Property Owner Both Be Liable for a Wrongful Death?",
      answer: "Yes. Florida law permits claims against multiple defendants who each bear independent legal responsibility for the same fatal accident. A commercial tenant operating within leased space and the landlord who owns the building may each have contributed to the conditions that caused the death.",
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
