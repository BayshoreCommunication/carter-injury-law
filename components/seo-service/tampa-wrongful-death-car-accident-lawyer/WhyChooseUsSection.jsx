"use client";
import React from "react";
import Image from "next/image";
import { Shield, Scale, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const WhyChooseUsSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">

        {/* ── Section Header ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
            <span className="text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase whitespace-nowrap">
              Why Families Choose Us
            </span>
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight mb-4">
            Why Tampa Families Choose Our Law Firm During Their Darkest Hours
          </h2>

          <div className="flex items-center justify-center gap-2 my-5">
            <div className="w-12 h-px bg-primary/30" />
            <div className="w-2.5 h-2.5 rotate-45 bg-primary" />
            <div className="w-12 h-px bg-primary/30" />
          </div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-medium">
            Real compassion paired with real results is what sets our firm apart in Tampa. Carter Injury Law has earned a name across Tampa Bay for being compassionate and outcome driven, both at once. Families come to us because we treat every client like family. Never a file number.
          </p>
        </motion.div>

        {/* ── Asymmetric Feature Grid ──
            Desktop: 2 cols, 2 rows. Col 01 spans rows 1+2. Col 2 has rows for 02 & 03.
        ── */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_1fr] gap-5 mb-5"
        >

          {/* ── Feature 01 ── */}
          <motion.div 
            variants={fadeInUp}
            className="relative bg-secondary rounded-[20px] overflow-hidden flex flex-col justify-start min-h-[460px] md:row-span-2 shadow-md group"
          >
            {/* Background image at bottom */}
            <div className="absolute inset-0">
              <Image
                src="/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/dedicated-counsel.png"
                alt="Attorney speaking with clients"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              {/* Top-heavy dark overlay so text at top is fully readable */}
              <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/85 to-secondary/30" />
            </div>

            {/* Text — top of card */}
            <div className="relative z-10 p-8 md:p-10">
              <span className="text-5xl font-extrabold text-primary leading-none block mb-2">01</span>
              <div className="w-8 h-[2px] bg-primary mb-5" />
              <h3 className="text-xl md:text-2xl font-extrabold text-white uppercase tracking-wider leading-snug mb-3">
                Direct Attorney Access Throughout Your Case
              </h3>
              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-sm font-medium">
                Many large law firms hand you off to a legal assistant the moment the initial consultation ends. We do things differently. You will have a direct line to the attorney managing your claim from start to finish. We ensure that you are never left wondering about the status of your case.
              </p>
            </div>
          </motion.div>

          {/* ── Feature 02 ── */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-7 md:p-8 flex items-start gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="shrink-0">
              <span className="text-4xl font-extrabold text-primary leading-none block mb-3">02</span>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <div className="pt-1 flex-1">
              <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug mb-2">
                No Upfront Costs or Financial Risks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                The last thing your family should worry about right now is how to afford a lawyer. We handle all Florida wrongful death cases on a contingency basis. This simply means we only get paid if we successfully secure financial compensation for you.
              </p>
            </div>
          </motion.div>

          {/* ── Feature 03 ── */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-7 md:p-8 flex items-start gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="shrink-0">
              <span className="text-4xl font-extrabold text-primary leading-none block mb-3">03</span>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <div className="pt-1 flex-1">
              <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug mb-2">
                Deep Experience with Wrongful Death Claims
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Fatal accident claims involve complex insurance technicalities and highly specific state statutes. Our legal team brings years of focused experience to these high stakes cases. We understand how the local Tampa court systems operate and know exactly how to build a strong case to hold negligent parties accountable.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Feature 04 — Full Width Bottom Card ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-7 md:p-9 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300 mb-8"
        >
          <div className="shrink-0 flex items-center gap-5">
            <span className="text-5xl font-extrabold text-primary leading-none">04</span>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>
          </div>
          <div className="hidden sm:block w-px self-stretch bg-gray-100 mx-2" />
          <div className="flex-1">
            <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug mb-2">
              Honest and Simple Communication
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-3xl font-medium">
              We do not believe in making empty promises just to win your case. From your very first consultation, we will give you a transparent assessment of your case timeline, potential legal difficulties, and likely outcomes. You can count on clear, honest guidance when you need it most.
            </p>
          </div>
        </motion.div>

        {/* ── Bottom Quote ── */}
        <div className="mt-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-px bg-primary/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary/50" />
            <div className="w-10 h-px bg-primary/30" />
          </div>
          <p className="text-gray-700 text-base md:text-lg italic leading-relaxed max-w-3xl mx-auto font-medium">
            "When you're facing the hardest chapter of your family's life, you need a legal team with skill, sure. But you need real compassion too."
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="w-10 h-px bg-primary/30" />
            <div className="w-1.5 h-1.5 rotate-45 bg-primary/50" />
            <div className="w-10 h-px bg-primary/30" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
