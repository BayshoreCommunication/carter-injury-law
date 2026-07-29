"use client";
import React from "react";
import { Clock, Building2, Ban, ShieldAlert, UserX, AlertTriangle, Scale } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Clock,
    title: "Filing Deadline Requirements",
    body: "Florida generally allows two years from the date of a motorcycle crash to file a personal injury lawsuit. Certain circumstances can shorten or extend this window. We monitor your specific deadline from day one to ensure we are well within the legal timeframe. Acting early prevents the risk of your case being barred by the statute of limitations, giving us maximum time to build a robust legal argument.",
  },
  {
    icon: Building2,
    title: "Preserving Digital Evidence",
    body: "Traffic camera footage and business surveillance recordings are often overwritten within weeks. Acting quickly gives your attorney the best chance of securing this evidence before it disappears. We dispatch investigators or send formal legal requests to relevant parties to lock in this digital evidence. Securing these records immediately prevents the other party from claiming that the evidence was lost or deleted, maintaining the integrity of your case.",
  },
  {
    icon: Ban,
    title: "Government Claim Rules",
    body: "If a government vehicle or a poorly maintained public road contributed to the crash, a separate and often shorter notice deadline may apply before a claim can proceed. We know the specific requirements for filing claims against government entities. Failure to meet these strict notice windows can result in a permanent loss of the right to sue. We act quickly to file all necessary paperwork, ensuring your claim remains viable despite the extra hurdles often associated with government liability.",
  },
  {
    icon: ShieldAlert,
    title: "Witness Availability",
    body: "Memories fade and witnesses relocate over time. Early legal representation allows statements to be collected while details are still fresh and accurate. We identify and interview witnesses as soon as possible after the accident. Having signed affidavits or recorded statements from the beginning creates a record that does not change over time. This prevents inconsistencies in testimony, which is a common tactic used by the defense to undermine your case at trial.",
  },
  {
    icon: UserX,
    title: "Deadline Exceptions",
    body: "Certain situations such as claims involving a minor or a delayed discovery of injury may adjust the standard filing deadline. An attorney can determine how these exceptions apply to your case. We evaluate your circumstances to see if you qualify for these extensions. By understanding every nuance of Florida law, we ensure that you are not prematurely disqualified and that your right to seek compensation is fully protected.",
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
            Florida Statute of Limitations <br />
            <span className="text-primary">Why Timing Is Important in Your Case</span>
          </h2>
          
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Florida law places strict deadlines on motorcycle accident claims. Missing one can end a case before it ever truly begins.
          </p>
        </motion.div>

        {/* Grid */}
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
                className="bg-[#faf9f6] rounded-[20px] border border-gray-100 p-6 md:p-8 flex flex-col gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 justify-between relative overflow-hidden"
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
                There is no financial or legal advantage to delaying your claim. Early action protects your recovery and keeps your case strong.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default StatuteOfLimitationsSection;
