"use client";
import React from "react";
import {
  Car, ClipboardCheck, Search, Calculator, Gavel,
  ChevronRight, ArrowDown, ShieldCheck,
  HandCoins, Shield, Landmark, Scale, Calendar,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Car,
    title: "Reconstruct the Crash",
    body: "Our team reconstructs the crash. We bring in accident specialists.",
    bullets: null,
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Secure Critical Evidence",
    body: "We pull together police reports, witness statements, traffic camera footage, whatever we can get before it slips away.",
    bullets: null,
  },
  {
    number: "03",
    icon: Search,
    title: "Identify Every Liable Party",
    body: "We track down everyone who might bear liability, including:",
    bullets: [
      { icon: ChevronRight, text: "The at-fault driver" },
      { icon: ChevronRight, text: "A trucking company" },
      { icon: ChevronRight, text: "A vehicle manufacturer" },
      { icon: ChevronRight, text: "A government entity that let a dangerous road go unfixed" },
    ],
  },
  {
    number: "04",
    icon: Calculator,
    title: "Calculate the Family's Full Loss",
    body: "From there, we calculate what your family has actually lost.",
    bullets: null,
  },
  {
    number: "05",
    icon: Gavel,
    title: "Demand Accountability",
    body: "Then comes negotiation. If insurance won't offer something fair, we go to court.",
    bullets: [
      { icon: HandCoins, text: "Negotiate for fair compensation" },
      { icon: Shield,    text: "Go to trial if the insurer refuses" },
      { icon: Landmark,  text: "Hold whoever is responsible accountable for the life they took" },
    ],
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

const ICON_SIZE = 90; // px — used to calculate arrow vertical center

const FiveStepProcessSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">

        {/* ── Section Header ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <span className="text-[13px] font-extrabold tracking-widest text-primary uppercase block mb-4">
            How We Fight For You
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight">
            How a Wrongful Death Car Accident Lawyer <br />
            <span className="text-primary">Turns Tragic Accidents Into Accountable Outcomes</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            A skilled Tampa wrongful death car accident lawyer does a lot more than push documents around. Our team reconstructs the crash. We bring in accident specialists. We pull together police reports, witness statements, traffic camera footage, whatever we can get before it slips away.
          </p>
        </motion.div>

        {/* ── Steps ── */}

        {/* MOBILE: vertical stack (shown below lg) */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-0 mb-14 lg:hidden"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center w-full">
                {/* Row: icon + card side-by-side */}
                <div className="flex items-start gap-4 w-full">
                  {/* Left: icon circle */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-lg border-2 border-secondary/60 animate-pulse">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Right: card */}
                  <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-4 mb-2 hover:shadow-md transition-shadow duration-300">
                    <span className="inline-flex items-center justify-center bg-primary text-white text-[11px] font-extrabold w-7 h-7 rounded-full mb-2 shadow-sm">
                      {step.number}
                    </span>
                    <h3 className="text-[14px] font-extrabold text-secondary leading-snug mb-2">
                      {step.title}
                    </h3>
                    {step.body && (
                      <p className="text-gray-500 text-xs leading-relaxed mb-2 font-medium">{step.body}</p>
                    )}
                    {step.bullets && (
                      <ul className="text-left w-full space-y-1.5 mt-1">
                        {step.bullets.map((b, i) => {
                          const BIcon = b.icon;
                          return (
                            <li key={i} className="flex items-start gap-2 text-gray-700 text-xs font-semibold">
                              <BIcon className="w-3 h-3 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                              <span>{b.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>

                {/* Down arrow connector */}
                {!isLast && (
                  <div className="flex flex-col items-center my-1">
                    <div className="w-px h-4 bg-gray-200" />
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shadow border border-secondary/70">
                      <ArrowDown className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </div>
                    <div className="w-px h-4 bg-gray-200" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* DESKTOP: horizontal row (shown at lg+) */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden lg:flex items-start mb-14"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <React.Fragment key={idx}>

                {/* ── Step Column ── */}
                <motion.div variants={fadeInUp} className="flex-1 flex flex-col items-center">
                  {/* Large navy icon circle */}
                  <div
                    className="rounded-full bg-secondary flex items-center justify-center shadow-xl border-2 border-secondary/60 mb-5 shrink-0 hover:rotate-6 transition-transform duration-300"
                    style={{ width: ICON_SIZE, height: ICON_SIZE }}
                  >
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Card */}
                  <div className="w-full bg-white rounded-2xl border border-gray-100 shadow-sm px-5 py-6 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-h-[320px]">
                    <span className="inline-flex items-center justify-center bg-primary text-white text-xs font-extrabold w-8 h-8 rounded-full mb-3 shadow-sm">
                      {step.number}
                    </span>
                    <h3 className="text-[15px] font-extrabold text-secondary leading-snug mb-3 px-1">
                      {step.title}
                    </h3>
                    {step.body && (
                      <p className="text-gray-500 text-xs leading-relaxed mb-2 font-medium">{step.body}</p>
                    )}
                    {step.bullets && (
                      <ul className="text-left w-full space-y-2 mt-1">
                        {step.bullets.map((b, i) => {
                          const BIcon = b.icon;
                          return (
                            <li key={i} className="flex items-start gap-2 text-gray-700 text-xs font-semibold">
                              <BIcon className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                              <span>{b.text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </motion.div>

                {/* ── Arrow connector — vertically centered to icon circle ── */}
                {!isLast && (
                  <div
                    className="flex items-center shrink-0 mx-1 animate-pulse"
                    style={{ paddingTop: `${ICON_SIZE / 2 - 14}px` }}
                  >
                    <div className="w-4 h-[2px] bg-gray-300" />
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center shadow border border-secondary/70">
                      <ChevronRight className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                    <div className="w-4 h-[2px] bg-gray-300" />
                  </div>
                )}

              </React.Fragment>
            );
          })}
        </motion.div>

        {/* ── Bottom CTA Banner ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full bg-primary rounded-[20px] text-white p-8 md:p-10 relative overflow-hidden shadow-lg"
        >
          <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none select-none">
            <Scale className="w-48 h-48 transform -rotate-12" />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full border-[2px] border-white/30 flex items-center justify-center shrink-0 bg-white/10">
                <Scale className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-extrabold text-xl md:text-2xl leading-snug">
                  You Don't Have to Face This Alone.
                </p>
                <p className="text-white/80 text-sm mt-1 font-medium max-w-lg">
                  Our compassionate legal team is here to protect your rights and fight for the justice your family deserves.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-secondary hover:bg-secondary/90 text-white font-extrabold text-sm px-7 py-4 rounded-lg flex items-center gap-2 shadow-md transition-all active:scale-95 uppercase tracking-wider border border-white/10"
              >
                <Calendar className="w-5 h-5 text-white" strokeWidth={2} />
                Get a Free Case Evaluation
              </button>
              <div className="flex items-center gap-3 text-white/70 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-white/60" />
                <span>No Fee Unless We Win</span>
                <span className="text-white/30">•</span>
                <span>100% Confidential</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FiveStepProcessSection;
