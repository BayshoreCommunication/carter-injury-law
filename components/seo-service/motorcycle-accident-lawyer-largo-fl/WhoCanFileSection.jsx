"use client";
import React from "react";
import { Scroll, Heart, GraduationCap, Home, ArrowDown, Scale, Calendar, ShieldCheck, UserMinus } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Scroll,
    title: "Injured Motorcycle Operators",
    body: "Any rider injured due to another party's negligence has the right to file a claim today. This includes injuries caused by careless drivers or hazardous roads or even defective motorcycle parts involved. We represent operators seeking justice for their financial and physical losses after a serious crash. You deserve compensation for these serious accident injuries caused by the negligence of other drivers.",
  },
  {
    number: "02",
    icon: Home,
    title: "Motorcycle Passengers Injured in a Crash",
    body: "Passengers hurt in a motorcycle accident can pursue compensation regardless of who was operating the bike. Their claim may extend against the negligent driver or the motorcycle operator or both parties. We help passengers manage these complex legal claims to secure their deserved financial recovery after accidents. Everyone injured in a crash deserves a pathway to financial recovery for their expenses.",
  },
  {
    number: "03",
    icon: UserMinus,
    title: "Parents Filing Claims for Injured Minors",
    body: "Parents or legal guardians may file a claim on behalf of a child injured in accidents. Florida law allows recovery for the minor medical expenses and other related damages sustained here. We represent families to protect the minor future after a serious motorcycle crash has occurred. These cases require special care and legal expertise to ensure the child's needs are met.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Personal Representatives for Incapacitated Victims",
    body: "When a crash leaves a victim unable to manage their own affairs a representative can pursue. This arrangement ensures the injured person's rights stay protected throughout the entire legal process today. We guide representatives through the legal process to ensure the victim receives all necessary support. This ensures your rights are protected even if you cannot manage the claim yourself.",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Family Members Pursuing a Wrongful Death Claim After a Fatal Motorcycle Accident",
    body: "Florida wrongful death statutes allow certain surviving family members to seek compensation after fatal motorcycle crashes. Spouses and children may recover damages for their profound loss of a loved one today. We handle these sensitive cases with deep compassion to support your grieving family during tragedy. You deserve justice for the passing of loved ones after a fatal motorcycle crash occurred.",
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

const WhoCanFileSection = () => {
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
            Standing & Standing Rules
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight">
            Who Is Legally Entitled to File a <br />
            <span className="text-primary">Motorcycle Accident Claim in Florida</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Florida law allows several categories of people to pursue compensation after a motorcycle crash in Largo. Understanding whether you qualify is the first step toward recovering what you are rightfully owed. We evaluate your situation to determine if you have a valid legal claim for your damages. Our team helps you manage the laws to seek justice for your motorcycle accident injuries.
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
                <div className="flex gap-6 items-start py-10 border-b border-gray-100">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-md border border-white/10 shrink-0">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    {!isLast && (
                      <div className="mt-2 flex flex-col items-center">
                        <div className="w-px h-7 bg-gray-200" />
                        <div className="w-5 h-5 rounded-full bg-secondary border border-gray-100 flex items-center justify-center shadow-sm">
                          <ArrowDown className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                      </div>
                    )}
                  </div>

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

        {/* Bottom Banner */}
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
                  Protect Your Legal Standing Immediately.
                </p>
                <p className="text-white/80 text-sm mt-1 font-medium max-w-lg">
                  Our dedicated legal team is here to assess your standing, handle all filings, and guide your recovery path.
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

export default WhoCanFileSection;
