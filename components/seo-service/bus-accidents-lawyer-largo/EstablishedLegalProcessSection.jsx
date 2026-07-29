"use client";
import React from "react";
import { Scale, ChevronRight, FileSearch, HelpCircle, FileText, Landmark, MessageSquare, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    phase: "Phase 01",
    icon: HelpCircle,
    title: "Reviewing Accident Reports and Medical Records",
    body: "We perform a forensic analysis of the police crash report and cross-reference it with diagnostics. This identifies discrepancies in the official account versus your actual physical injuries from the crash. Our team ensures every detail of your medical history supports the specific accident injury claims. We build a clear narrative by aligning the police data with your personal injury reports. This thorough review process ensures we miss nothing when documenting the facts of the event.",
  },
  {
    phase: "Phase 02",
    icon: FileSearch,
    title: "Interviewing Witnesses and Consulting Experts",
    body: "Beyond eyewitnesses, we engage accident reconstruction specialists who utilize physics and crash dynamics to prove liability. Their expertise ensures that the evidence refutes any contradictory claims made by the transit company. We gather statements that confirm your account of how the accident actually occurred on site. Professional testimony from these experts provides the weight needed to influence skeptical insurance adjusters effectively. Using real science strengthens your case against any denial of responsibility from the transit operator.",
  },
  {
    phase: "Phase 03",
    icon: FileText,
    title: "Calculating the Full Value of Your Damages",
    body: "We use a comprehensive approach, aggregating current medical debt, projected future earnings, and quality-of-life losses. This creates a singular, well-documented claim that addresses the true financial weight of your injuries. Our calculations include every aspect of the harm caused by this unfortunate bus collision event. We ensure the final demand reflects your total loss rather than just your immediate bills. Presenting a full financial picture forces the other side to acknowledge your complete economic suffering.",
  },
  {
    phase: "Phase 04",
    icon: Landmark,
    title: "Pursuing Settlement Negotiations or Court Action",
    body: "Our firm maintains a position of strength by preparing for litigation from the very start. This forces insurance companies to take settlement discussions more seriously, knowing we are fully prepared. We push for a fair outcome through aggressive negotiation tactics with the involved insurance adjusters. If they refuse to provide fair compensation, we are ready to take your case forward. We never hesitate to proceed to trial if it serves your best financial interests.",
  },
  {
    phase: "Phase 05",
    icon: MessageSquare,
    title: "Keeping Clients Informed at Every Stage of the Case",
    body: "Legal transparency is a priority, and we provide proactive communication regarding your specific case status. You receive updates about legal filings, court dates, and all significant settlement developments as they occur. Ensuring you are never confused about where your claim stands is our firm's goal. We take the time to explain every development in terms you can understand easily. Staying informed helps you feel confident and supported throughout this challenging legal journey today.",
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
            <span className="text-primary">Largo Bus Accident Cases</span>
          </h2>
          
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
            Our firm follows a proven legal process designed to maximize your financial recovery every time.
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
