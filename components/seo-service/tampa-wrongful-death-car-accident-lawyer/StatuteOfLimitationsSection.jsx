"use client";
import React from "react";
import { Clock, Building2, Ban, ShieldAlert, UserX, AlertTriangle, Scale } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Clock,
    title: "The True Start of the Legal Clock",
    body: "The legal clock does not automatically begin on the date of the car crash. Instead, the 2 year timeline starts on the exact day your loved one passed away. A victim might survive for weeks or months in the hospital after a collision. A Tampa wrongful death car accident lawyer will carefully calculate the correct deadline based on official records.",
  },
  {
    icon: Building2,
    title: "Shorter Windows for Government Claims",
    body: "Special rules apply if you must file a claim against a city, county, or state agency. You have to submit a formal written notice to the government before you can sue. This process involves strict administrative rules that demand immediate attention. You cannot afford to wait when dealing with a government agency.",
  },
  {
    icon: Ban,
    title: "Active Negotiations Do Not Pause the Deadline",
    body: "Insurance companies often stretch out talks to run down the legal clock. Active settlement negotiations do not pause or extend your filing window. The 2 year deadline remains strict throughout the entire process. You must file a lawsuit on time even if negotiations seem positive.",
  },
  {
    icon: ShieldAlert,
    title: "The Risk of Disappearing Evidence",
    body: "Time is a major enemy to the evidence needed for your case. Traffic camera footage often disappears days after a crash. Witnesses move away or forget vital details over time. Our team must secure this essential proof immediately to protect your claim.",
  },
  {
    icon: UserX,
    title: "Exceptions for Missing or Out-of-State Defendants",
    body: "The court sometimes pauses the clock if the at-fault driver flees the state. This exception also applies if the negligent party actively hides to avoid legal paperwork. This rule prevents wrongdoers from escaping liability by waiting out the deadline. However, you must still document these tracking efforts thoroughly.",
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
            <span className="text-primary">Why Timing is Important in Your Case</span>
          </h2>
          
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Florida law sets a strict time limit to file a wrongful death claim. Families generally have 2 years from the date of death to take legal action. The court will permanently bar your case if you miss this important window. Even the strongest claim cannot survive a missed deadline.
          </p>
        </motion.div>

        {/* Grid: 3 columns on desktop, 1 on mobile */}
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
                className="bg-[#faf9f6] rounded-[20px] border border-gray-100 p-6 md:p-8 flex flex-col gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative"
              >
                {/* Accent red left bar */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-primary rounded-l-[20px]" />
                
                {/* Icon header */}
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

                {/* Body */}
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
          {/* Watermark Scale icon in right corner */}
          <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none select-none">
            <Scale className="w-48 h-48 transform -rotate-12" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 relative z-20">
            {/* Warning Icon Circle */}
            <div className="w-16 h-16 rounded-full border-[3px] border-primary/45 flex items-center justify-center text-primary shrink-0 shadow-sm bg-primary/10">
              <AlertTriangle className="w-8 h-8 text-primary" strokeWidth={2} />
            </div>

            {/* Banner Text */}
            <div className="flex-1 text-center sm:text-left">
              <h4 className="text-lg md:text-[22px] font-bold text-white tracking-wide uppercase">
                Early Action Protects Your Rights
              </h4>
              <p className="text-gray-300 text-sm md:text-base mt-2 leading-relaxed font-medium">
                There is no financial or legal advantage to delaying your claim. Early action protects your rights and keeps your case strong.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StatuteOfLimitationsSection;
