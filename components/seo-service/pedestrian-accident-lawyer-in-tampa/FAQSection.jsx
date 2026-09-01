"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What Compensation Can I Recover After a Pedestrian Accident?",
      answer: "Florida law allows injured pedestrians to claim medical expenses, lost wages, reduced earning capacity, pain and suffering, emotional distress, and permanent disability costs. What you are actually able to recover depends on the severity of your injuries, who was at fault, and how well the losses are documented.",
    },
    {
      question: "Will My Case Go to Court or Settle Outside of Court?",
      answer: "Most pedestrian accident cases in Florida end in a settlement before trial. That said, Carter Injury Law does not treat trial as something to avoid. Every case gets prepared as though a jury will see it. That means our firm is genuinely ready if a settlement does not come together.",
    },
    {
      question: "Can I File a Claim if the Driver Left the Scene of the Accident?",
      answer: "Yes. A driver leaving the scene does not take your right to compensation with them. Uninsured motorist coverage on your own auto policy may apply in a hit-and-run situation. Surveillance footage, traffic cameras, and witness accounts sometimes help identify the driver as well. Carter Injury Law looks at every avenue available when the at-fault party fled, and the firm will advise you on which options make sense for your case.",
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
