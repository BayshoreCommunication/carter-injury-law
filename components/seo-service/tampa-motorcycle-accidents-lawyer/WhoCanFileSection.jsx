"use client";
import React from "react";
import { Scroll, Heart, GraduationCap, Home, ArrowDown, Scale, Calendar, ShieldCheck, UserMinus, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Scroll,
    title: "Injured Motorcycle Riders",
    body: "Any rider injured due to another party's negligence has the right to file a claim for medical expenses, lost wages, and pain and suffering. We represent riders who have been harmed by the negligence of others. Our goal is to ensure that the compensation accounts for both your immediate emergency care and the ongoing impact of your injuries. We meticulously document the ways your physical condition has changed to ensure your claim is fully supported.",
  },
  {
    number: "02",
    icon: Home,
    title: "Motorcycle Passengers",
    body: "Passengers injured while riding alone are entitled to pursue their own claim, separate from the rider, against the at fault party. We advocate for passengers who suffer injuries due to the actions of drivers. Even if the motorcycle operator is partially at fault, the passenger is almost always entitled to full compensation from the other driver. We protect your rights as an innocent party and ensure you are not treated as an afterthought in the claims process.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Victims of Secondary Collisions",
    body: "When a motorcycle crash triggers a chain reaction collision involving other vehicles or pedestrians, those additional victims may also have grounds for a claim. We provide representation for those caught in the aftermath of a major crash. If you were a bystander or another driver swept into the chaos caused by the initial collision, you deserve justice. We investigate the entire sequence of events to ensure your damages are included in the overall legal pursuit.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Legal Representatives",
    body: "A power of attorney or court appointed guardian may be able to file a claim on behalf of a rider who is incapacitated or otherwise unable to file a claim himself or herself. We work with legal representatives to obtain the justice our injured residents are owed. We understand that these cases are very sensitive, and we want to keep family and legal representatives informed throughout the process. We don't want to put a strain on your family and make you deal with the legal ramifications of an accident when you should be doing what you're doing, looking after your family.",
  },
  {
    number: "05",
    icon: GraduationCap,
    title: "Families of Deceased Riders",
    body: "Losing a loved one due to a motorcycle accident can cause a family to have a wrongful death claim against the person responsible for the accident. We will strive to fight for your family with the compassion and dignity that your family deserves. We want to bring justice to your family that lost a loved one that gave you support, companionship and love. We will hold the responsible party accountable for the death of your loved one.",
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
            Florida law allows several parties to pursue compensation after a motorcycle crash, depending on their relationship to the accident.
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
                onClick={() => window.location.href = '/contact'}
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
