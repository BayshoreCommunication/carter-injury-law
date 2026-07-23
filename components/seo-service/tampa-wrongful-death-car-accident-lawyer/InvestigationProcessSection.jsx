"use client";
import React from "react";
import { Scroll, Heart, GraduationCap, Home, ArrowDown, Scale, Calendar, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Scroll,
    title: "The Personal Representative Authorized to File the Lawsuit",
    body: "Only the personal representative of the estate has the legal authority to file a lawsuit. If your loved one left a valid will, that document usually names this person. Otherwise, a local probate judge will appoint an administrator to handle the estate. This designated representative files the claim on behalf of all eligible family members.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Spouses Entitled to Immediate Legal Recovery",
    body: "A grieving husband or wife has the primary right to seek damages under state law. The statute allows a spouse to claim compensation for the sudden loss of companionship and protection. You can also recover the value of lost financial support and emotional guidance. These damages help provide financial security during an incredibly difficult chapter.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Children Entitled to Compensation Based on Age",
    body: "Florida law treats children differently based on their age at the time of the loss. Younger children under the age of 25 have broad rights to seek compensation for mental suffering. They can also claim the loss of parental guidance and companionship. Adult children face much stricter limits and can usually only recover if there is no surviving spouse.",
  },
  {
    number: "04",
    icon: Home,
    title: "Parents and Dependent Relatives Eligible to Join the Claim",
    body: "The parents of the victim can recover damages under very specific legal conditions. Parents of a minor child can always claim financial recovery for mental anguish. However, parents of an adult child can only recover if no other legal survivors exist. Dependent blood relatives or adoptive siblings may also join the claim if they relied on the victim for financial support.",
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

const InvestigationProcessSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <span className="text-[13px] font-extrabold tracking-widest text-primary uppercase block mb-4">
            Eligibility to File
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight">
            Who is Legally Entitled to File a <br />
            <span className="text-primary">Wrongful Death Claim in Florida</span>
          </h2>
          {/* Brand Red underline */}
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Florida law sets strict limits on who can seek justice after a fatal accident. Many families assume that any close relative can immediately step forward and file a lawsuit. However, the actual legal rules are much narrower than most people realize.
          </p>
        </motion.div>

        {/* Steps Grid — 2 columns on desktop */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 mb-14"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <motion.div key={idx} variants={fadeInUp} className="relative">
                {/* Step Row */}
                <div className="flex gap-6 items-start py-10 border-b border-gray-100">
                  {/* Left: Icon + Connector */}
                  <div className="flex flex-col items-center shrink-0">
                    {/* Dark Circle Icon */}
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-md border border-white/10 shrink-0">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    {/* Connector arrow — only between steps in same column */}
                    {!isLast && (
                      <div className="mt-2 flex flex-col items-center">
                        <div className="w-px h-7 bg-gray-200" />
                        <div className="w-5 h-5 rounded-full bg-secondary border border-gray-100 flex items-center justify-center shadow-sm">
                          <ArrowDown className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right: Number + Text */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-3xl font-extrabold text-primary leading-none">{step.number}</span>
                      <div className="w-px h-4 bg-gray-300" />
                      <h3 className="text-[17px] md:text-[19px] font-extrabold text-secondary leading-snug">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed font-medium">{step.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full bg-primary rounded-[20px] text-white p-8 md:p-10 relative overflow-hidden shadow-lg"
        >
          {/* Watermark icon */}
          <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none select-none">
            <Scale className="w-48 h-48 transform -rotate-12" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* Left: Icon + Text */}
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

            {/* Right: CTA Button */}
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

export default InvestigationProcessSection;
