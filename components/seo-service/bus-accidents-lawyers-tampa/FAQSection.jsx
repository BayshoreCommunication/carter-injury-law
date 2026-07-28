"use client";
import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Scale, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who can be held liable for a bus accident in Tampa?",
    answer:
      "Liability in a bus accident can be complex. Depending on the details, responsible parties can include the bus driver, the transit agency (such as HART or the local school district), the bus company or charter operator, a third-party maintenance contractor, or the manufacturer of a defective vehicle part. We thoroughly investigate logs and records to identify every single liable entity.",
  },
  {
    question: "How does sovereign immunity affect a claim against a public transit bus?",
    answer:
      "If you are injured on a public transit bus (like a city bus or school bus), Florida's sovereign immunity laws limit the amount of damages you can recover to $200,000 per person and $300,000 per incident (under Florida Statute § 768.28). Furthermore, claims against government agencies require strict pre-suit notice procedures and have shorter timelines. Our experienced lawyers ensure all strict notice requirements are met.",
  },
  {
    question: "What compensation can I recover after a Tampa bus accident?",
    answer:
      "Victims can pursue compensation for economic and non-economic damages. This includes past and future medical expenses, rehabilitation costs, lost wages, diminished earning capacity, pain and suffering, and mental anguish. If a loved one was lost, surviving family members can seek wrongful death damages.",
  },
  {
    question: "What should I do immediately after being injured in a bus crash?",
    answer:
      "First, seek immediate medical attention, even if your injuries seem minor. Report the accident to the driver or transit authority to ensure an official report is filed. Take photographs of the scene, the vehicles, and your injuries if possible. Collect witness contact details, and do not sign any statements for insurance adjusters before consulting a bus accidents lawyer.",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: CTA Banner */}
          <div className="col-span-12 lg:col-span-4 bg-secondary rounded-[24px] text-white p-8 border border-white/5 shadow-xl relative overflow-hidden lg:sticky lg:top-8">
            <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none select-none">
              <Scale className="w-48 h-48 transform -rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <HelpCircle className="w-6 h-6" strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">
                  Have More Questions?
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed font-medium">
                  We are here to provide answers and help you navigate this complex process. Let us handle the legalities while you focus on healing.
                </p>
              </div>

              <div className="w-full h-px bg-white/10" />

              {/* Call or Schedule actions */}
              <div className="flex flex-col gap-3">
                <a
                  href="tel:+18139220228"
                  className="flex items-center gap-3.5 group bg-white/5 hover:bg-white/10 p-3.5 rounded-xl border border-white/10 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Hillsborough Office</p>
                    <p className="text-primary text-sm sm:text-base font-extrabold group-hover:underline">
                      (813) 922-0228
                    </p>
                  </div>
                </a>

                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 border border-primary/20"
                >
                  <Calendar className="w-4 h-4 text-white" strokeWidth={2} />
                  Free Evaluation
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Q&A list */}
          <div className="col-span-12 lg:col-span-8 space-y-4">
            
            {/* Header */}
            <div className="mb-8">
              <span className="text-[12px] font-extrabold tracking-[0.25em] text-primary uppercase block mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-tight tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-[3px] bg-primary mt-4" />
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div 
                    key={idx}
                    className={`border rounded-2xl transition-all duration-300 ${
                      isOpen ? "border-primary bg-[#faf9f6]" : "border-gray-200 bg-white"
                    }`}
                  >
                    {/* Header bar button */}
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 focus:outline-none"
                    >
                      <span className="text-secondary font-extrabold text-sm sm:text-base leading-snug">
                        {faq.question}
                      </span>
                      <span className="shrink-0 text-secondary">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary" strokeWidth={2.5} />
                        ) : (
                          <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
                        )}
                      </span>
                    </button>

                    {/* Expandable answers body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-0 text-gray-600 text-xs sm:text-sm sm:leading-relaxed font-medium">
                            <div className="w-full h-px bg-gray-200/60 mb-4" />
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
