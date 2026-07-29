"use client";
import React from "react";
import { Scale, ChevronRight, FileSearch, HelpCircle, FileText, Landmark, MessageSquare, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    phase: "Phase 01",
    icon: HelpCircle,
    title: "Identifying All Liable Parties",
    body: "We investigate every angle of the crash to determine whether additional parties beyond the other driver share responsibility for what happened. This involves more than just looking at the police report. We interview witnesses, review employment records for commercial drivers, and check for vehicle recalls. By broadening our scope, we ensure that every person or company that contributed to your injury is held accountable.",
  },
  {
    phase: "Phase 02",
    icon: FileSearch,
    title: "Collecting Digital Evidence",
    body: "Our team moves quickly to secure traffic camera footage, dashcam recordings, and cell phone data before it can be lost or overwritten. Digital evidence is often the most objective proof of who was at fault. We prioritize obtaining this data because it provides an undeniable timeline of the accident. This preparation gives us the upper hand in negotiations, as we have clear facts rather than just opinions.",
  },
  {
    phase: "Phase 03",
    icon: FileText,
    title: "Consulting Medical Experts",
    body: "We work with treating physicians and when necessary independent medical experts to fully document the extent of a rider's injuries and future care needs. Medical testimony is vital in proving the severity of non visible injuries like internal trauma or nerve damage. We ensure these experts understand your specific job requirements and lifestyle limitations. This enables them to provide comprehensive assessments that accurately reflect the impact of the crash on your daily life.",
  },
  {
    phase: "Phase 04",
    icon: Landmark,
    title: "Building a Strong Claim",
    body: "Every piece of evidence is compiled into a clear, well supported demand that accurately reflects the damages our client has suffered. We draft a detailed narrative that links the accident to your injuries and financial losses. This demand package serves as the primary tool in negotiations, showing the insurance company that we have a prepared and persuasive case. We leave nothing to chance when presenting your story.",
  },
  {
    phase: "Phase 05",
    icon: MessageSquare,
    title: "Trial Ready Representation",
    body: "While most cases settle, we prepare each one as though it may go before a jury. This gives our clients leverage in negotiations and confidence that their case is in capable hands. When insurance adjusters see that we have trial exhibits, witness lists, and expert testimonies ready, they understand that we will not be pushed around. This readiness often forces them to provide a fair settlement offer because they know we are prepared to win in court.",
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
            <span className="text-primary">Tampa Motorcycle Accident Cases</span>
          </h2>
          
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Our firm follows a structured process designed to protect your claim from the earliest stage.
          </p>
        </motion.div>

        {/* 5 Cards timeline */}
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

        {/* Quote panel */}
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
