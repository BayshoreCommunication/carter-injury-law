"use client";
import React from "react";
import { Scale, CheckCircle2, Calendar, Phone } from "lucide-react";
import { motion } from "framer-motion";

const checks = [
  "Deep scrutiny of electronic data recorders (black boxes).",
  "Auditing driver hours of service and logs.",
  "Analyzing carrier maintenance database records.",
  "Investigating government and private transit liabilities.",
];

const ExpertValuationSection = () => {
  return (
    <section className="w-full bg-[#1E2538] py-16 md:py-24 text-white relative overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none select-none" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[450px] h-[450px] rounded-full bg-primary/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            <span className="text-[12px] font-extrabold tracking-[0.25em] text-primary uppercase block mb-5">
              Accountability &amp; Action
            </span>

            <h2 
              className="text-3xl md:text-4xl xl:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight mb-6"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              How a Bus Accidents Lawyer Tampa Turns Tragic Accidents <br />
              <span className="text-primary">Into Accountable Outcomes</span>
            </h2>

            <div className="w-12 h-[3px] bg-primary mb-8" />

            <div className="space-y-6 text-white/80 text-sm md:text-base leading-relaxed font-medium">
              <p>
                A sudden bus collision shatters your family routine, causing immense emotional turmoil and financial strain. Our team assumes the burden of handling legal complexities so you can prioritize your recovery.
              </p>
              <p>
                A skilled bus accidents lawyer Tampa scrutinizes every specific detail to identify the true underlying causes. We meticulously trace liability by examining complex driver logs, maintenance histories, and various corporate safety records.
              </p>
              <p>
                While we pursue aggressive negotiations, our firm prepares every single file for thorough trial readiness. This dual approach ensures the opposing parties face full accountability for their negligence regarding your safety.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-5 relative flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white text-secondary rounded-[24px] p-8 md:p-10 shadow-2xl w-full border border-gray-100/50 flex flex-col gap-6 relative"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Scale className="w-5 h-5 text-primary" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Case Readiness</p>
                  <p className="font-extrabold text-sm md:text-base text-secondary leading-none">Investigation Protocols</p>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100" />

              <ul className="space-y-4">
                {checks.map((check, idx) => (
                  <li key={idx} className="flex gap-3.5 items-start">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span className="text-gray-600 text-xs sm:text-sm font-semibold leading-normal">
                      {check}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="w-full h-px bg-gray-100" />

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+18139220228"
                  className="w-full bg-[#faf9f6] hover:bg-[#f3f2ee] rounded-xl p-4 border border-gray-100 flex items-center gap-4 group transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Call Our Team</p>
                    <p className="text-primary font-extrabold text-sm sm:text-base group-hover:underline">
                      (813) 922-0228
                    </p>
                  </div>
                </a>

                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="w-full bg-primary hover:bg-primary/95 text-white font-extrabold tracking-wider uppercase py-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all duration-300 active:scale-95 text-xs sm:text-sm"
                >
                  <Calendar className="w-4 h-4 text-white" strokeWidth={2} />
                  Schedule Evaluation
                </button>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertValuationSection;
