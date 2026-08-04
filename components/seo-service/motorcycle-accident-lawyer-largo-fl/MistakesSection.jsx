"use client";
import { getSeoImage } from "@/lib/seo-service-images";

import React from "react";
import Image from "next/image";
import { X, ShieldCheck, Scale } from "lucide-react";
import { motion } from "framer-motion";

const col1Mistakes = [
  {
    title: "Not Seeking Immediate Medical Attention",
    body: "Delaying medical care allows insurance companies to argue your injuries were not serious after the crash. Prompt treatment creates a clear medical record connecting your injuries directly to the accident event. We emphasize why immediate medical evaluation is critical for your health and for your claim. Do not let insurance companies minimize your health by skipping your necessary medical doctor appointments.",
  },
  {
    title: "Repairing or Disposing of the Motorcycle Too Soon",
    body: "Your damaged motorcycle serves as important physical crash evidence for your injury claim in court today. Repairing or disposing of it before an inspection can eliminate proof that supports your claim. We advise you to keep the bike intact so experts can inspect the wreckage thoroughly. This evidence is vital for your legal success and for proving the crash cause.",
  },
  {
    title: "Failing to Obtain Witness Information",
    body: "Witness accounts confirm what happened during the crash when insurance companies dispute the facts today. Failing to collect names and contact information at the scene makes this evidence harder to find. We explain why gathering data at the scene matters for your case against the defense. This information strengthens your case against the insurance adjusters who want to deny claims.",
  },
];

const col2Mistakes = [
  {
    title: "Speaking to Insurance Adjusters Without Legal Counsel",
    body: "Insurance adjusters ask questions designed to minimize your claim value for the insurance company's interests. Statements made without counsel hurt your later negotiations for a fair financial settlement for you. We handle all communications to protect your rights from these adjusters at all times. You should not speak to them alone so let us manage these complex calls.",
  },
  {
    title: "Posting Accident Details on Social Media",
    body: "Insurers monitor social media for damaging photo posts that could hurt your personal injury claim. A single comment can be twisted against you by the insurance defense lawyers later on. We advise clients to stay off social media while their injury claim is pending resolution. Your privacy protects your claim from being compromised by insurance companies looking for excuses.",
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
            <span className="text-primary">Weaken Your Largo Motorcycle Accident Claim</span>
          </h2>
          <div className="w-20 h-[3px] bg-primary mx-auto mt-5 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Certain actions taken after a crash can unintentionally damage the strength of your legal compensation claim. Avoiding these common mistakes protects your right to full compensation for your injuries and losses.
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
                  src={getSeoImage("communication-mistakes.png", "motorcycle-accident-lawyer-largo-fl").filePath} alt={getSeoImage("communication-mistakes.png", "motorcycle-accident-lawyer-largo-fl").altText} title={getSeoImage("communication-mistakes.png", "motorcycle-accident-lawyer-largo-fl").title}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug">
                  Medical &amp; Evidence <br /> Mistakes
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
                    src={getSeoImage("evidence-timing.png", "motorcycle-accident-lawyer-largo-fl").filePath} alt={getSeoImage("evidence-timing.png", "motorcycle-accident-lawyer-largo-fl").altText} title={getSeoImage("evidence-timing.png", "motorcycle-accident-lawyer-largo-fl").title}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug">
                    Communication &amp; Social <br /> Mistakes
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
