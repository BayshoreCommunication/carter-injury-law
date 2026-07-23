"use client";
import React from "react";
import { Scale, ChevronRight, FileSearch, Gavel, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase whitespace-nowrap">
              Our Process
            </span>
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight mb-5">
            Established Legal Process for Handling <br />
            <span className="text-primary">Tampa Wrongful Death Car Accident Cases</span>
          </h2>
          
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            We follow a structured process. It protects your claim from the first consultation all the way through to final resolution.
          </p>
        </motion.div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                  <FileSearch className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-1">
                    Phase 01
                  </span>
                  <h3 
                    className="text-xl md:text-2xl font-bold text-secondary leading-tight"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    Building the Foundation of Your Case
                  </h3>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 mb-6" />

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                It starts with a free consultation, looking at what happened and confirming you're eligible to file. From there, the investigation kicks in. Police reports, witness interviews, crash reconstruction. Then we count down the full scope of both financial and emotional damages.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-primary text-xs font-extrabold uppercase tracking-wider">
              <span>Investigate & Valuate</span>
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <Gavel className="w-7 h-7 text-secondary" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-1">
                    Phase 02
                  </span>
                  <h3 
                    className="text-xl md:text-2xl font-bold text-secondary leading-tight"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    Pursuing Resolution and Accountability
                  </h3>
                </div>
              </div>

              <div className="w-full h-px bg-gray-100 mb-6" />

              {/* Description */}
              <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                With the case built, we send a formal demand and negotiate with every insurance company that bears responsibility. No fair offer? We file suit and take it to trial.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-secondary text-xs font-extrabold uppercase tracking-wider">
              <span>Negotiate & Litigate</span>
              <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </motion.div>

        </div>

        {/* Footer quote-style card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-secondary rounded-2xl text-white p-6 md:p-8 relative overflow-hidden shadow-md max-w-4xl mx-auto"
        >
          <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none select-none">
            <Scale className="w-40 h-40 transform -rotate-12" />
          </div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <ShieldCheck className="w-5 h-5 text-primary" strokeWidth={2} />
            </div>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed font-medium italic">
              "Your case stays organized and moving forward through all of it, even on the days your family needs to step back and just grieve."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EstablishedLegalProcessSection;
