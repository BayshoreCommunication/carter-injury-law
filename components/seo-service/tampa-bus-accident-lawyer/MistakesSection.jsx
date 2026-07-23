"use client";
import React from "react";
import Image from "next/image";
import { X, ShieldCheck, Scale } from "lucide-react";
import { motion } from "framer-motion";

const col1Mistakes = [
  {
    title: "Delaying Medical Treatment After the Crash",
    body: "Postponing medical care allows insurance adjusters to dispute the severity of your injuries later on. They will argue your pain stems from other sources than the bus accident itself. Get a thorough examination immediately after the collision occurs to document your injuries well. Early documentation provides essential proof for your future injury claim and recovery process here.",
  },
  {
    title: "Giving Recorded Statements Without Legal Advice",
    body: "Insurance adjusters request recorded statements to minimize your compensation and limit their financial liability. These recordings often hurt your case during later negotiations with the insurance company representatives. Always consult a bus accidents lawyer tampa before answering any formal questions from adjusters. We manage all direct communication to ensure your words are never twisted against you.",
  },
  {
    title: "Accepting a Quick Settlement Too Soon",
    body: "Early offers provide quick cash but rarely cover future medical or living expenses today. You lose the right to demand more after signing formal release forms with adjusters. Always evaluate future medical needs before finalizing any settlement with the insurance company now. We fight for a payout that covers your full long-term recovery and needs.",
  },
];

const col2Mistakes = [
  {
    title: "Failing to Preserve Photos, Witness Information, and Other Evidence",
    body: "Scene evidence vanishes quickly without immediate collection efforts from you or professional legal investigators. Save photos and contact details to build a strong case for your injury claim. Missing this chance limits your leverage during later negotiations with the large insurance company today. Proper evidence documentation makes a massive difference in your case results moving forward now.",
  },
  {
    title: "Posting About the Accident on Social Media",
    body: "Insurance companies routinely monitor social media during pending claims for any contradictions from victims. Innocent posts can be misinterpreted to deny your damages or injuries later in court. Avoid discussing the incident or your health status online while cases pending for resolution. Keep your case details private until the matter officially resolves with our team.",
  },
];

const MistakesSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight">
            Mistakes That Can <br />
            <span className="text-primary">Weaken Your Tampa Bus Accident Claim</span>
          </h2>
          <div className="w-20 h-[3px] bg-primary mx-auto mt-5 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Even a strong claim can lose value when a few avoidable mistakes happen during litigation. Knowing these traps ahead of time protects your right to full compensation for damages.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Left Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#faf9f6] rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="relative w-24 h-24 shrink-0">
                <Image
                  src="/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/communication-mistakes.png"
                  alt="Medical and statement mistakes illustration"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug">
                  Treatment &amp; Statement <br /> Mistakes
                </h3>
                <div className="w-8 h-[2px] bg-primary mt-2" />
              </div>
            </div>

            <ul className="space-y-6">
              {col1Mistakes.map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="font-extrabold text-secondary text-sm md:text-[15px] mb-1">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#faf9f6] rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-5 mb-8">
                <div className="relative w-24 h-24 shrink-0">
                  <Image
                    src="/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/evidence-timing.png"
                    alt="Social media and settlement mistakes illustration"
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug">
                    Social &amp; Settlement <br /> Mistakes
                  </h3>
                  <div className="w-8 h-[2px] bg-primary mt-2" />
                </div>
              </div>

              <ul className="space-y-6">
                {col2Mistakes.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                    </div>
                    <div>
                      <p className="font-extrabold text-secondary text-sm md:text-[15px] mb-1">{item.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed font-medium">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full bg-secondary rounded-[20px] text-white p-8 md:p-10 relative overflow-hidden shadow-lg"
        >
          <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none select-none">
            <ShieldCheck className="w-48 h-48 transform -rotate-12" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-full border-[2px] border-white/20 flex items-center justify-center shrink-0 bg-white/10">
                <ShieldCheck className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-extrabold text-base md:text-lg uppercase tracking-wider leading-snug">
                  We Help You Steer Clear of Mistakes
                </p>
                <p className="text-white/70 text-sm mt-1 font-medium max-w-lg">
                  We deal with insurance adjusters directly so you're not fighting that battle alone, protecting the value of your case.
                </p>
              </div>
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-primary hover:bg-primary/95 text-white font-extrabold text-sm px-7 py-4 rounded-lg flex items-center gap-2 shadow-md transition-all active:scale-95 uppercase tracking-wider shrink-0 border border-primary/30"
            >
              <Scale className="w-5 h-5 text-white" strokeWidth={2} />
              Free Case Review
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MistakesSection;
