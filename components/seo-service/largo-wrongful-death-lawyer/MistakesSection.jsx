"use client";
import React from "react";
import Image from "next/image";
import { X, ShieldCheck, Scale } from "lucide-react";
import { motion } from "framer-motion";

const timingDocMistakes = [
  {
    title: "Waiting Too Long to Seek Legal Guidance",
    body: "Missing the filing deadline means you lose your right to recover any compensation for your family. We monitor the calendar to ensure your case is filed well before the legal time expires. Proactive action keeps your legal options open and preserves your right to pursue the full damages.",
  },
  {
    title: "Overlooking Important Financial Documentation",
    body: "Insurance companies will deny any damage that you cannot prove with specific and clear financial records. We gather every medical bill and receipt to build a complete picture of your economic loss. Comprehensive documentation leaves no room for the insurer to argue against your legitimate financial claims.",
  },
];

const evidenceLiabilityMistakes = [
  {
    title: "Sharing Information That Can Be Used Against You",
    body: "Social media posts or casual comments can be twisted to suggest you are not truly grieving. We advise you on how to manage your public and private interactions during the pending case. Maintaining your privacy is crucial for ensuring the integrity of your claim in the eyes of the courts.",
  },
  {
    title: "Assuming Liability Is Already Clear",
    body: "Even when an accident seems obvious the insurance company will still fight to blame the victim. We do not make assumptions about liability but instead we prove it through rigorous investigation. We build a case that makes it impossible for the insurer to deny the obvious fault.",
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
            <span className="text-primary">Weaken Your Largo Wrongful Death Claim</span>
          </h2>
          <div className="w-20 h-[3px] bg-primary mx-auto mt-5 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Even a strong claim can lose ground when families make avoidable mistakes during an already brutal stretch of time. Knowing these traps ahead of time protects your right to full compensation.
          </p>
        </motion.div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* Left Card: Timing & Documentation Mistakes */}
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
                  alt="Timing and documentation mistakes illustration"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug">
                  Timing &amp; Doc <br /> Mistakes
                </h3>
                <div className="w-8 h-[2px] bg-primary mt-2" />
              </div>
            </div>

            <ul className="space-y-6">
              {timingDocMistakes.map((item, i) => (
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

          {/* Right Card: Evidence & Liability Mistakes */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[#faf9f6] rounded-2xl border border-gray-100 p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-5 mb-8">
              <div className="relative w-24 h-24 shrink-0">
                <Image
                  src="/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/evidence-timing.png"
                  alt="Evidence and liability mistakes illustration"
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug">
                  Evidence &amp; Liability <br /> Mistakes
                </h3>
                <div className="w-8 h-[2px] bg-primary mt-2" />
              </div>
            </div>

            <ul className="space-y-6">
              {evidenceLiabilityMistakes.map((item, i) => (
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
        </div>

        {/* Bottom Navy CTA Banner */}
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
                  We Step In Fast to Head Off These Mistakes
                </p>
                <p className="text-white/70 text-sm mt-1 font-medium max-w-lg">
                  We deal with insurance companies directly so you're not fighting that battle alone, preserving your case integrity.
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
