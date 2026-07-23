"use client";
import React from "react";
import { Scale, ChevronRight, FileSearch, Gavel, ShieldCheck, HelpCircle, FileText, Landmark, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    phase: "Phase 01",
    icon: FileSearch,
    title: "Investigating and Building Your Case",
    body: "We begin building your case immediately after retention to secure police reports and evidence now. We review all medical records and gather surveillance footage to preserve the truth daily. This stage determines the strength of everything that follows in your specific case today.",
  },
  {
    phase: "Phase 02",
    icon: HelpCircle,
    title: "Calculating the Full Value of Your Losses",
    body: "Before any demand is submitted we calculate the complete value of your total claim today. That includes medical expenses and lost wages and pain and suffering damages for victims. We work with economic consultants to ensure nothing is left out of calculations ever.",
  },
  {
    phase: "Phase 03",
    icon: FileText,
    title: "Negotiating With Insurance Companies",
    body: "We prepare a detailed demand package that presents the scope of your injuries now daily. We submit this to the insurance companies and manage all negotiations directly for you today. Every offer is reviewed against the full value of your claim for accuracy now.",
  },
  {
    phase: "Phase 04",
    icon: Landmark,
    title: "Filing a Lawsuit and Going to Trial When Necessary",
    body: "When an insurance company refuses to offer fair compensation we file suit without hesitation today. Trial preparation often brings the other side back to serious negotiation for settlement today. Our attorneys are prepared to present your case before a Tampa jury effectively daily.",
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
            <span className="text-primary">Tampa Personal Injury Claims</span>
          </h2>
          
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            We follow a structured process. It protects your claim from the first consultation all the way through to final resolution.
          </p>
        </motion.div>

        {/* 4 Cards Timeline layout */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12"
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
              "Your case stays organized and moving forward through all of it, even on the days you need to focus on healing."
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default EstablishedLegalProcessSection;
