"use client";
import { getSeoImage } from "@/lib/seo-service-images";

import React from "react";
import Image from "next/image";
import { X, ShieldCheck, Scale } from "lucide-react";
import { motion } from "framer-motion";

const col1Mistakes = [
  {
    title: "Ignoring Follow-Up Medical Care",
    body: "Gaps in medical treatment provide an opening for defense attorneys to claim your injuries were minor. They argue that your issues were pre-existing or not caused by the crash that occurred. This severely weakens your medical evidence and allows insurers to argue your injuries lack severity. We emphasize the importance of following every medical appointment to maintain a strong claim profile. Consistent records are your best defense against insurance company attempts to minimize your actual pain.",
  },
  {
    title: "Losing Important Evidence From the Crash Scene",
    body: "Digital evidence, such as dashcam footage or traffic camera recordings, is often overwritten very quickly. Failing to issue a preservation letter early can result in the permanent loss of this proof. This critical evidence would otherwise establish the bus driver's fault in the collision event clearly. We act immediately to secure all relevant video evidence before it gets deleted by operators. Acting fast is the only way to ensure your case has the best possible documentation.",
  },
  {
    title: "Signing Insurance Documents Without Legal Review",
    body: "Some insurance documents are structured as releases of liability disguised as simple claim processing forms. Signing them without counsel can inadvertently forfeit your right to pursue any further financial damages. You could lose your right to collect funds even if your condition worsens later on. Always allow an attorney to review every paper the insurance company sends to your home. We stop these predatory practices by reviewing every document to protect your future legal rights.",
  },
];

const col2Mistakes = [
  {
    title: "Underestimating Future Medical Expenses",
    body: "Initial settlements rarely account for chronic pain, secondary surgeries, or physical therapy needs manifesting later. Accepting a quick check prevents you from seeking funds for these inevitable future healthcare costs. We work with medical experts to project the long-term needs of your specific injury profile. This ensures your settlement covers all future medical requirements rather than just current bills today. Planning for your long-term recovery is a vital part of our comprehensive legal strategy.",
  },
  {
    title: "Waiting Until the Last Minute to File a Claim",
    body: "Delaying the filing process limits the time your attorney has to depose witnesses and build. This leaves your case vulnerable to arguments that the claim is stale or memories faded. Prompt legal intervention is your best defense against unfair claim reduction by large insurance companies. We prioritize fast filing to ensure we maintain all possible leverage during the negotiation process. Starting early prevents the opposition from having extra time to construct their defense case.",
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
            <span className="text-primary">Weaken Your Largo Bus Accident Claim</span>
          </h2>
          <div className="w-20 h-[3px] bg-primary mx-auto mt-5 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Small missteps after a bus accident can significantly reduce the potential value of your claim.
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
                  src={getSeoImage("communication-mistakes", "bus-accidents-lawyer-largo").filePath} alt={getSeoImage("communication-mistakes", "bus-accidents-lawyer-largo").altText} title={getSeoImage("communication-mistakes", "bus-accidents-lawyer-largo").title}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug">
                  Treatment &amp; Evidence <br /> Mistakes
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
                    src={getSeoImage("evidence-timing", "bus-accidents-lawyer-largo").filePath} alt={getSeoImage("evidence-timing", "bus-accidents-lawyer-largo").altText} title={getSeoImage("evidence-timing", "bus-accidents-lawyer-largo").title}
                    fill
                    className="object-contain"
                    sizes="96px"
                  />
                </div>
                <div>
                  <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug">
                    Expense &amp; Timing <br /> Mistakes
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
