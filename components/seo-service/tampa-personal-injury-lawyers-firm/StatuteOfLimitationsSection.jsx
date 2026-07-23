"use client";
import React from "react";
import { Clock, Building2, Ban, ShieldAlert, UserX, AlertTriangle, Scale } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Clock,
    title: "The Standard Filing Deadline for Personal Injury Claims",
    body: "Most personal injury claims carry a two year statute of limitations from the date. This deadline applies to car accident claims and slip and fall cases today. The clock starts on the day of the incident and not when treatment ends.",
  },
  {
    icon: Building2,
    title: "Special Rules for Government Liability Claims",
    body: "When a claim involves negligence by a Florida government entity different requirements apply here. A formal notice of claim must be served on the agency within time. Failure to comply can forfeit your right to recovery entirely in these cases.",
  },
  {
    icon: Ban,
    title: "Active Settlement Negotiations Do Not Pause the Deadline",
    body: "A common misconception is that ongoing settlement negotiations with insurance companies pause the deadline today. They do not and the statute of limitations continues to run regardless today. Many victims lose their right to file because they relied on negotiation progress.",
  },
  {
    icon: ShieldAlert,
    title: "Why Preserving Evidence Immediately Matters",
    body: "Legal deadlines define when you must act but evidence deadlines are immediate today now. Security footage is routinely overwritten within seventy two hours of the recorded incident. Skid marks fade and witnesses become harder to locate as time passes by.",
  },
  {
    icon: UserX,
    title: "Exceptions That May Affect Filing Deadlines",
    body: "Certain circumstances can extend or modify the standard limitations period for your injury claim. Claims involving injured minors may carry different deadlines than standard personal injury claims. The only way to determine the deadline is to have an attorney evaluate today.",
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

const StatuteOfLimitationsSection = () => {
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
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase whitespace-nowrap">
              Statute of Limitations
            </span>
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight mb-5">
            Florida's Statute of Limitations — <br />
            <span className="text-primary">Why Timing Matters in Your Case</span>
          </h2>
          
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Florida law imposes firm deadlines on personal injury claims that you must follow daily. Missing the applicable deadline does not delay your case but ends it permanently. Understanding these deadlines is the foundation of protecting your legal rights in Florida today.
          </p>
        </motion.div>

        {/* Grid: 3 columns on desktop */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="bg-[#faf9f6] rounded-[20px] border border-gray-100 p-6 md:p-8 flex flex-col gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative justify-between"
              >
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-primary rounded-l-[20px]" />
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 
                    className="text-base md:text-[17px] font-extrabold text-secondary leading-snug tracking-tight"
                    style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className="w-full h-px bg-gray-200/60" />

                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Callout box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full bg-secondary rounded-[24px] text-white p-8 md:p-10 relative overflow-hidden shadow-lg z-10 max-w-4xl mx-auto"
        >
          <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none select-none">
            <Scale className="w-48 h-48 transform -rotate-12" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-20">
            <div className="w-16 h-16 rounded-full border-[3px] border-primary/45 flex items-center justify-center text-primary shrink-0 shadow-sm bg-primary/10">
              <AlertTriangle className="w-8 h-8 text-primary" strokeWidth={2} />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-lg md:text-[22px] font-bold text-white tracking-wide uppercase">
                Early Action Protects Your Recovery
              </h4>
              <p className="text-gray-300 text-sm md:text-base mt-2 leading-relaxed font-medium">
                There is no financial or legal advantage to delaying your claim. Action is the only way to keep your case as strong as possible today.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StatuteOfLimitationsSection;
