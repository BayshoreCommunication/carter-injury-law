"use client";
import React from "react";
import { Scale, ChevronRight, FileSearch, Gavel, ShieldCheck, HelpCircle, FileText, Landmark, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    phase: "Phase 01",
    icon: FileSearch,
    title: "Initial Case Review and Legal Strategy",
    body: "We begin with a thorough review of the accident reports and medical records for your loved one. This analysis allows us to form a strategy that targets the most effective path to victory. You receive a clear explanation of how we will proceed to obtain justice for your loss.",
  },
  {
    phase: "Phase 02",
    icon: HelpCircle,
    title: "Independent Investigation and Evidence Development",
    body: "Our team visits the scene and interviews witnesses and secures all available surveillance footage of the crash. We hire accident reconstruction experts to provide the technical evidence needed to win your case. Strong evidence is the key to holding the responsible parties accountable.",
  },
  {
    phase: "Phase 03",
    icon: FileText,
    title: "Preparing a Comprehensive Demand Package",
    body: "We organize all your damages into a detailed demand package that outlines your full financial loss. This document clearly communicates the extent of your suffering to the insurance company and adjusters. A well prepared package is often the fastest route to reaching a fair settlement.",
  },
  {
    phase: "Phase 04",
    icon: Landmark,
    title: "Litigation When a Fair Settlement Is Not Offered",
    body: "We file a formal lawsuit if the insurance company fails to offer a fair financial settlement. Our lawyers are prepared to present your case to a jury to secure justice for you. We fight hard in the courtroom to ensure you receive the compensation your family needs now.",
  },
  {
    phase: "Phase 05",
    icon: MessageSquare,
    title: "Ongoing Client Communication",
    body: "You will never have to wonder about the status of your claim because we update you. You have direct access to your attorney for any questions that arise during the legal process. We believe that honest and frequent communication is essential for your peace of mind here.",
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
            <span className="text-primary">Largo Wrongful Death Cases</span>
          </h2>
          
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            We follow a structured process. It protects your claim from the first consultation all the way through to final resolution.
          </p>
        </motion.div>

        {/* 5 Cards Timeline layout */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch mb-12"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-white rounded-[24px] border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 md:p-8 flex flex-col justify-between"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold tracking-widest text-primary uppercase block">
                        {step.phase}
                      </span>
                    </div>
                  </div>

                  <h3 
                    className="text-base md:text-lg font-bold text-secondary leading-snug mb-3"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    {step.title}
                  </h3>

                  <div className="w-full h-px bg-gray-100 mb-4" />

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {step.body}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-primary text-[10px] font-extrabold uppercase tracking-wider">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
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
