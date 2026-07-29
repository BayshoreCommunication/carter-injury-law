"use client";
import React from "react";
import { Scale, ChevronRight, FileSearch, HelpCircle, FileText, Landmark, MessageSquare, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    phase: "Phase 01",
    icon: HelpCircle,
    title: "Conducting a Detailed Crash Investigation",
    body: "Our team examines the circumstances of your accident including road conditions and driver behavior today. This investigation forms the foundation of your claim and helps us prove the driver's fault. We find facts that support your legal position and strengthen your overall injury claim case. Detailed analysis helps us secure your fair settlement and hold the negligent parties responsible.",
  },
  {
    phase: "Phase 02",
    icon: FileSearch,
    title: "Collecting Medical, Police, and Expert Evidence",
    body: "We gather police reports and your medical records to support your injury claim for compensation. Expert opinions document the impact of your injuries and strengthen your claim in formal negotiations. We ensure all documentation supports the compensation sought for your medical and other expenses. We leave nothing to chance in your case to ensure you receive full justice.",
  },
  {
    phase: "Phase 03",
    icon: FileText,
    title: "Reconstructing the Motorcycle Accident When Necessary",
    body: "We work with specialists to recreate the crash when liability is disputed by insurance companies. This proves decisive when insurance companies shift blame onto you for the motorcycle accident crash. Physics models show exactly how the impact happened which adds weight to your injury claim. We use science to hold the drivers accountable for their reckless actions on roads.",
  },
  {
    phase: "Phase 04",
    icon: Landmark,
    title: "Negotiating Aggressively for Maximum Compensation",
    body: "Our attorneys negotiate directly with the insurance companies to pursue the maximum compensation for you. We pursue the maximum compensation available under your policy limits to cover all your losses. We refuse lowball offers that ignore your true losses from the motorcycle accident crash here. We fight for the money you deserve to recover and move forward with life.",
  },
  {
    phase: "Phase 05",
    icon: MessageSquare,
    title: "Taking Your Case to Trial if Needed",
    body: "We are fully prepared to take your case before juries if settlement negotiations fail here. Our trial experience gives clients real long term confidence that we fight at every stage. Insurance companies often settle when they see preparation so we go to court for justice. We go to court to ensure full justice for your motorcycle accident injury case.",
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
            <span className="text-primary">Largo Motorcycle Accident Cases</span>
          </h2>
          
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Our firm follows a proven process for claims to build the strongest possible position today. This builds the strongest possible position for you while we keep you informed at each stage.
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
