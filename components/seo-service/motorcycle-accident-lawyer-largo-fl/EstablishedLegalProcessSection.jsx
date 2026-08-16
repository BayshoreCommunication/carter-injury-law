"use client";
import React from "react";
import { Scale, ChevronRight, ShieldCheck, Bike, ClipboardList, Search, Calculator, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    phase: "Phase 01",
    icon: Bike,
    title: "Conducting a Detailed Crash Investigation",
    body: "Our team examines the circumstances of your accident including road conditions and driver behavior today. This investigation forms the foundation of your claim and helps us prove the driver's fault. We find facts that support your legal position and strengthen your overall injury claim case. Detailed analysis helps us secure your fair settlement and hold the negligent parties responsible.",
  },
  {
    number: "02",
    phase: "Phase 02",
    icon: ClipboardList,
    title: "Collecting Medical, Police, and Expert Evidence",
    body: "We gather police reports and your medical records to support your injury claim for compensation. Expert opinions document the impact of your injuries and strengthen your claim in formal negotiations. We ensure all documentation supports the compensation sought for your medical and other expenses. We leave nothing to chance in your case to ensure you receive full justice.",
  },
  {
    number: "03",
    phase: "Phase 03",
    icon: Search,
    title: "Reconstructing the Motorcycle Accident When Necessary",
    body: "We work with specialists to recreate the crash when liability is disputed by insurance companies. This proves decisive when insurance companies shift blame onto you for the motorcycle accident crash. Physics models show exactly how the impact happened which adds weight to your injury claim. We use science to hold the drivers accountable for their reckless actions on roads.",
  },
  {
    number: "04",
    phase: "Phase 04",
    icon: Calculator,
    title: "Negotiating Aggressively for Maximum Compensation",
    body: "Our attorneys negotiate directly with the insurance companies to pursue the maximum compensation for you. We pursue the maximum compensation available under your policy limits to cover all your losses. We refuse lowball offers that ignore your true losses from the motorcycle accident crash here. We fight for the money you deserve to recover and move forward with life.",
  },
  {
    number: "05",
    phase: "Phase 05",
    icon: Gavel,
    title: "Taking Your Case to Trial if Needed",
    body: "We are fully prepared to take your case before juries if settlement negotiations fail here. Our trial experience gives clients real long term confidence that we fight at every stage. Insurance companies often settle when they see preparation so we go to court for justice. We go to court to ensure full justice for your motorcycle accident injury case.",
  },
];

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
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
            <span className="text-primary">Largo Motorcycle Accident Cases</span>
          </h2>
          
          <div className="w-20 h-[3px] bg-primary mx-auto mt-5 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Our firm follows a proven process for claims to build the strongest possible position today, keeping you informed at each stage.
          </p>
        </motion.div>

        {/* ── Process Grid with Icons Half Inside/Outside Cards ── */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mb-14"
        >
          {/* Dotted Line & Arrow Badges across desktop */}
          <div className="hidden lg:flex absolute top-[32px] left-[10%] right-[10%] z-10 items-center justify-between pointer-events-none">
            {/* Dotted Line */}
            <div className="w-full border-b-2 border-dotted border-[#1E2538]/40 absolute top-1/2 -translate-y-1/2 left-0 right-0 z-0" />
            
            {/* Arrow Badges */}
            <div className="w-full flex items-center justify-between px-[11%] z-10">
              <div className="w-6 h-6 rounded-full bg-[#1E2538] text-white flex items-center justify-center border border-white shadow-sm shrink-0">
                <ChevronRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <div className="w-6 h-6 rounded-full bg-[#1E2538] text-white flex items-center justify-center border border-white shadow-sm shrink-0">
                <ChevronRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <div className="w-6 h-6 rounded-full bg-[#1E2538] text-white flex items-center justify-center border border-white shadow-sm shrink-0">
                <ChevronRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
              <div className="w-6 h-6 rounded-full bg-[#1E2538] text-white flex items-center justify-center border border-white shadow-sm shrink-0">
                <ChevronRight className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* 5 Column Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 relative items-stretch">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div key={idx} variants={fadeInUp} className="relative flex flex-col items-center group">
                  
                  {/* Top Icon Badge: 50% above card, 50% inside card */}
                  <div className="w-16 h-16 rounded-full bg-[#1E2538] text-white flex items-center justify-center shadow-lg border-4 border-white ring-1 ring-gray-100 z-20 relative group-hover:scale-105 group-hover:bg-primary transition-all duration-300">
                    <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                  </div>

                  {/* White Card Box (mt-[-32px] places icon half inside, half outside) */}
                  <div className="bg-white rounded-[24px] border border-gray-100/90 shadow-sm hover:shadow-md transition-all duration-300 p-5 pt-10 text-center flex flex-col items-center w-full flex-1 mt-[-32px] z-0 relative justify-between">
                    <div className="flex flex-col items-center">
                      {/* Red Step Number Badge */}
                      <div className="bg-[#901311] text-white font-extrabold text-xs px-3 py-1 rounded-md shadow-sm mb-3">
                        {step.number}
                      </div>

                      <span className="text-[10px] font-extrabold tracking-widest text-primary uppercase block mb-2">
                        {step.phase}
                      </span>

                      {/* Card Title */}
                      <h3 
                        className="text-base md:text-lg font-bold text-secondary leading-snug mb-3 tracking-tight"
                        style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                      >
                        {step.title}
                      </h3>

                      <div className="w-8 h-px bg-gray-100 mb-3" />

                      {/* Card Body Text */}
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                        {step.body}
                      </p>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
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
