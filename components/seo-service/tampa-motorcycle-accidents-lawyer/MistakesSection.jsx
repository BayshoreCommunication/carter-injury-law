"use client";
import { getSeoImage } from "@/lib/seo-service-images";

import React from "react";
import Image from "next/image";
import { X, ShieldCheck, Scale } from "lucide-react";
import { motion } from "framer-motion";

const col1Mistakes = [
  {
    title: "Ignoring Protective Gear Evidence",
    body: "Insurance companies sometimes argue that a lack of protective gear contributed to a rider's injuries. Preserving evidence of the gear worn at the time of the crash can help counter this argument. We help you document this crucial aspect of your case. By showcasing the quality of your helmet, gloves, or jacket, we demonstrate that you were acting responsibly. This nullifies the insurance companies' attempts to shift blame onto you for your own injuries.",
  },
  {
    title: "Incomplete Medical Records",
    body: "Gaps in treatment or missed follow up appointments give insurers an opening to argue that injuries were minor or unrelated to the crash. Consistent, thorough documentation is essential. We guide you in maintaining the records necessary to prove your claim. We work with your doctors to ensure every symptom is noted and every visit is recorded. This creates an undeniable paper trail that validates the seriousness of your condition to adjusters and juries alike.",
  },
  {
    title: "Relying Only on Police Reports",
    body: "A police report is a great resource, but it doesn't always provide all the facts about a crash. It should not be the sole way of gathering evidence, as important information like statements from witnesses or surveillance from other people may have been overlooked. We broaden our investigation so we don't miss anything. Often officers will make snap decisions, missing components of the road debris or mechanical issues. We conduct a thorough investigation to find the truth that a standard police report might miss.",
  },
];

const col2Mistakes = [
  {
    title: "Overlooking Future Damages",
    body: "Some injuries such as nerve damage or joint trauma worsen over time. Settling too early without accounting for future medical needs can leave a rider without the resources to cover long term care. We work with experts to calculate your future needs. This includes estimating the cost of surgeries, physical therapy, and assistive devices you might need years down the road. We ensure your settlement covers your entire lifetime cost of recovery.",
  },
  {
    title: "Missing Liable Parties",
    body: "Distracted driving crashes might also involve other factors like negligent employers, faulty vehicle parts, or dangerous road conditions. Failing to identify every liable party could drastically lower the total financial compensation you might recover. We conduct a thorough review to find all liable parties. Sometimes the driver is just one piece of the puzzle. We explore if a vehicle manufacturer or a road maintenance crew shares blame, allowing us to pursue more sources of compensation for you.",
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
            <span className="text-primary">Weaken Your Tampa Motorcycle Accident Claim</span>
          </h2>
          <div className="w-20 h-[3px] bg-primary mx-auto mt-5 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Even a strong case can lose value through avoidable missteps. Knowing what to watch for early can protect the compensation you deserve.
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
                  src={getSeoImage("communication-mistakes.png", "tampa-motorcycle-accidents-lawyer").filePath} alt={getSeoImage("communication-mistakes.png", "tampa-motorcycle-accidents-lawyer").altText} title={getSeoImage("communication-mistakes.png", "tampa-motorcycle-accidents-lawyer").title}
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
                    src={getSeoImage("evidence-timing.png", "tampa-motorcycle-accidents-lawyer").filePath} alt={getSeoImage("evidence-timing.png", "tampa-motorcycle-accidents-lawyer").altText} title={getSeoImage("evidence-timing.png", "tampa-motorcycle-accidents-lawyer").title}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug">
                    Damages &amp; Party <br /> Mistakes
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
