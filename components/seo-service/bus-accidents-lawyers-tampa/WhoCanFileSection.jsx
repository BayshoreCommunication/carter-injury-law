"use client";
import React from "react";
import { Scroll, Heart, GraduationCap, Home, ArrowDown, Scale, Calendar, ShieldCheck, UserMinus } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Scroll,
    title: "Passengers Injured on Public or Private Buses",
    body: "Transit riders and charter bus passengers possess clear legal rights after an accident in Florida. Negligence causing your injury creates a valid compensation claim regardless of who actually drove. We investigate the accident details to determine exactly who holds legal liability for harm. Protecting your right to financial recovery remains our primary focus for every single client.",
  },
  {
    number: "02",
    icon: Home,
    title: "Drivers and Occupants of Other Vehicles",
    body: "Motorists struck by large buses may pursue legal action for their physical injuries in Tampa. Proving fault requires expert accident reconstruction and thorough analysis of the available evidence presented. Bus companies often dispute liability to avoid paying damages to innocent crash victims like you. We fight to hold these corporations responsible for your suffering and medical costs today.",
  },
  {
    number: "03",
    icon: UserMinus,
    title: "Injured Pedestrians and Cyclists",
    body: "Vulnerable road users face extreme danger from large buses in busy city environments like Tampa. Blind spots make these accidents particularly common and devastating for people on foot daily. You deserve full compensation for your medical costs and suffering caused by driver negligence. We advocate for cyclists and pedestrians injured by buses on public streets in Tampa.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Parents or Guardians of Injured Minors",
    body: "Parents may file legal claims on behalf of children hurt on buses in the area. Florida law mandates specific procedures for settling minor claims to protect the awarded funds. We guide families through every step of this complex legal process with great care. Protecting your child’s financial future is our top priority during the litigation process now.",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Filing a Claim on Behalf of an Incapacitated Victim",
    body: "Severe injuries may prevent victims from managing their own legal affairs after crashes happen locally. A court-appointed representative can legally file a claim to protect the victim's interest. We ensure all paperwork meets strict Florida legal requirements during this challenging recovery time. Compassionate advocacy supports your family while you manage the difficult recovery process for them.",
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
            <span className="text-primary">Bus Accident Claim in Florida</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Not everyone realizes how broad the Florida rules actually are regarding bus accident injury claims. If you were hurt because of someone else's negligence you likely have legal options. Florida modified comparative negligence law can reduce recovery based on shared fault for victims. An early legal review by a bus accidents lawyer Tampa matters for your financial success.
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
