"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Scale, Plus, Minus, MessageCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "How long does a wrongful death case take to resolve?",
    answer:
      "It depends on case complexity and how cooperative the insurance company turns out to be. Many cases wrap up within several months, though litigated ones can take longer.",
  },
  {
    question: "Can I file a claim if the at-fault driver was uninsured?",
    answer:
      "Yes. We look into other potential sources of compensation, including underinsured motorist coverage and any additional liable parties.",
  },
  {
    question: "What if my loved one was partly at fault for the accident?",
    answer:
      "Florida still allows recovery even with shared fault, though the compensation may be reduced based on the percentage of responsibility assigned.",
  },
  {
    question: "Do I need to go to court for a wrongful death claim?",
    answer:
      "Most claims settle through negotiation, but if a fair offer never comes, we're fully prepared to take your case to trial.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-full bg-[#faf9f6] py-8 md:py-8">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 items-start">

          {/* ── Left: Dark Navy Card ── */}
          <div className="relative bg-secondary rounded-[24px] overflow-hidden p-8 md:p-10 flex flex-col gap-6 min-h-[440px]">

            {/* Watermark scale icon */}
            <div className="absolute bottom-4 right-4 opacity-[0.06] pointer-events-none select-none">
              <Scale className="w-40 h-40 text-white" strokeWidth={0.8} />
            </div>

            {/* Category label */}
            <div>
              <span className="text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase block mb-3">
                Frequently Asked Questions
              </span>
              <div className="w-8 h-[2px] bg-primary" />
            </div>

            {/* Heading */}
            <h2
              className="text-2xl md:text-3xl font-extrabold text-white leading-[1.2]"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              Questions Families Often Ask After a Fatal Car Accident
            </h2>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed">
              Get clear answers to common questions about wrongful death claims.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-white/10" />

            {/* Still have questions callout */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <MessageCircle className="w-4 h-4 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-primary font-extrabold text-sm">Still have questions?</p>
                <p className="text-white/55 text-xs leading-relaxed mt-0.5">
                  Our team is here to listen and help you move forward.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="mt-auto flex items-center justify-between gap-3 bg-primary/20 border border-primary/50 text-primary font-extrabold text-sm px-6 py-4 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 active:scale-95 uppercase tracking-wider"
            >
              <span>Ask Our Legal Team</span>
              <ArrowRight className="w-4 h-4 shrink-0" strokeWidth={2.5} />
            </Link>
          </div>

          {/* ── Right: Accordion ── */}
          <div className="flex flex-col divide-y divide-gray-200">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className={`py-6 first:pt-0 ${isOpen ? "" : ""}`}>
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-start gap-5 text-left group"
                    aria-expanded={isOpen}
                  >
                    {/* Number */}
                    <span className="text-3xl md:text-4xl font-extrabold text-primary leading-none shrink-0 w-10 text-right">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Vertical separator */}
                    <div className="w-px self-stretch bg-gray-200 shrink-0 mx-1" />

                    {/* Question + Toggle icon */}
                    <div className="flex-1 flex items-start justify-between gap-4">
                      <h3
                        className={`text-base md:text-lg font-extrabold leading-snug transition-colors duration-200 ${
                          isOpen ? "text-secondary" : "text-secondary group-hover:text-primary"
                        }`}
                      >
                        {faq.question}
                      </h3>
                      <div className="shrink-0 mt-0.5">
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-primary" strokeWidth={2.5} />
                        ) : (
                          <Plus className="w-5 h-5 text-primary" strokeWidth={2.5} />
                        )}
                      </div>
                    </div>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="mt-4 pl-[72px]">
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
