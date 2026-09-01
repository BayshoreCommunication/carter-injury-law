"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What Happens if the Driver Claims I Caused the Accident?",
      answer: "Florida's modified comparative negligence rule under Florida Statute 768.81 means that fault can be split between multiple parties. But if a court assigns you more than 50% of the fault, you recover nothing at all. Carter Injury Law acts quickly to gather evidence and build a strong case before the defense can start shifting the blame.",
    },
    {
      question: "Can I Recover Compensation for a Permanent Walking Disability?",
      answer: "Yes, and the claim can be substantial. Permanent impairment from a pedestrian accident is compensable under Florida law. This can include future medical costs, lost earning capacity, and non-economic damages for what you can no longer do physically or independently.",
    },
    {
      question: "Does a Pedestrian Accident Claim Usually Settle Before Trial?",
      answer: "Most do settle before a trial begins, but the settlement value depends almost entirely on how well the case is prepared. Carter Injury Law treats every pedestrian accident claim as though a Pinellas County jury will ultimately decide it.",
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
