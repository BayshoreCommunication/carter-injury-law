"use client";
import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, Scale, MessageCircle, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How Much Does It Cost to Hire a Largo Wrongful Death Lawyer?",
    answer:
      "We operate on a contingency fee basis which means you pay no upfront legal costs here. We only get paid a percentage of the settlement if we successfully win your legal case. This structure ensures that you can access legal representation regardless of your current financial situation.",
  },
  {
    question: "Can a Wrongful Death Lawsuit Be Filed if No Criminal Charges Were Brought?",
    answer:
      "Yes, you can file a civil wrongful death lawsuit even without any criminal charges being filed. Civil cases have different standards of proof than criminal cases and operate independently of them. We pursue your claim regardless of whether the state chooses to prosecute the responsible driver.",
  },
  {
    question: "What Happens if Multiple Parties Are Responsible for My Loved One's Death?",
    answer:
      "We investigate all potential parties to find every source of insurance coverage for your family. If multiple people or companies share blame we pursue a claim against every responsible party. This strategy maximizes the potential recovery for your family by identifying all liable defendants.",
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
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Phone Call</p>
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
