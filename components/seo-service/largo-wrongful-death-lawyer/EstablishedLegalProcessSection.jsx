"use client";
import React from "react";
import { Scale, ChevronRight, FileSearch, Gavel, ShieldCheck, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    phase: "Phase 01",
    icon: HeartHandshake,
    title: "Building the Foundation of Your Case",
    body: "It starts with a free consultation, looking at what happened and confirming you're eligible to file. From there, the investigation kicks in. Police reports, witness interviews, crash reconstruction. Then we count down the full scope of both financial and emotional damages.",
  },
  {
    number: "02",
    phase: "Phase 02",
    icon: Gavel,
    title: "Pursuing Resolution and Accountability",
    body: "With the case built, we send a formal demand and negotiate with every insurance company that bears responsibility. No fair offer? We file suit and take it to trial.",
  },
];

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const EstablishedLegalProcessSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-14"
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
            <span className="text-primary">Largo Wrongful Death Claims</span>
          </h2>
          
          <div className="w-20 h-[3px] bg-primary mx-auto mt-5 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            We follow a structured process. It protects your claim from the first consultation all the way through to final resolution.
          </p>
        </motion.div>

        {/* ── Top Process Icon Bar with Connecting Line & Arrow Badges ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mb-10 max-w-3xl mx-auto px-4 hidden md:block"
        >
          {/* Continuous Horizontal Background Line */}
          <div className="absolute top-[32px] left-16 right-16 h-[2px] bg-[#1E2538]/25 z-0" />

          {/* Icons & Arrow Badges Row */}
          <div className="flex items-center justify-between relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              return (
                <React.Fragment key={idx}>
                  {/* Main Icon Circle */}
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-[#1E2538] text-white flex items-center justify-center shadow-xl border-4 border-white ring-1 ring-gray-200 hover:scale-105 hover:bg-primary transition-all duration-300">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Line Arrow Badge (between icons) */}
                  {!isLast && (
                    <div className="flex-1 flex items-center justify-center px-2">
                      <div className="w-7 h-7 rounded-full bg-[#1E2538] text-white flex items-center justify-center shadow-md border border-white z-10 shrink-0">
                        <ChevronRight className="w-4 h-4 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        {/* ── 2 Column Grid ── */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-14"
        >
          {steps.map((step, idx) => {
            return (
              <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-[24px] border border-gray-100/90 shadow-sm hover:shadow-md transition-all duration-300 p-8 pt-6 flex flex-col justify-between">
                <div>
                  <div className="bg-[#901311] text-white font-extrabold text-xs px-3 py-1 rounded-md shadow-sm mb-4 w-fit">
                    {step.number}
                  </div>

                  <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
                    {step.phase}
                  </span>

                  <h3 
                    className="text-xl md:text-2xl font-bold text-secondary leading-tight mb-4"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    {step.title}
                  </h3>

                  <div className="w-12 h-px bg-gray-100 mb-5" />

                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">
                    {step.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

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
