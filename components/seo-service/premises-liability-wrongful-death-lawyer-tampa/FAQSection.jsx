"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can a Property Owner Be Held Responsible for a Fatal Criminal Attack?",
      answer: "Yes. Florida's negligent security doctrine holds property owners accountable when they knew or had reason to know that criminal activity was a foreseeable risk on their premises and failed to take reasonable steps to address it. Prior incidents on the property, broken security equipment, inadequate lighting, and failed access controls all factor into that analysis.",
    },
    {
      question: "What Evidence Helps Prove a Premises Liability Wrongful Death Claim?",
      answer: "Surveillance footage, maintenance and inspection logs, prior incident reports, tenant or guest complaints, and any records showing the owner's knowledge of the dangerous condition are typically the most consequential. Expert testimony about applicable property safety standards and the owner's failure to meet them is usually what closes the gap between documenting a hazard and proving legal liability.",
    },
    {
      question: "Can Multiple Businesses or Property Owners Share Liability for a Fatal Property Accident?",
      answer: "Yes. Florida law allows a jury to apportion fault across multiple defendants. A property owner, a management company, a security contractor, and a maintenance vendor can each be assigned a percentage of responsibility and required to pay their share of the family's total damages.",
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
