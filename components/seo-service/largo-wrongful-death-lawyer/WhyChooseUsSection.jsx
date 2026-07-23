"use client";
import React from "react";
import Image from "next/image";
import { Shield, Scale, MessageCircle, MapPin, PhoneCall, UserCheck } from "lucide-react";
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

        {/* Section Header */}
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
            Why Largo Families Choose Our Law Firm During Their Darkest Hours
          </h2>

          <div className="flex items-center justify-center gap-2 my-5">
            <div className="w-12 h-px bg-primary/30" />
            <div className="w-2.5 h-2.5 rotate-45 bg-primary" />
            <div className="w-12 h-px bg-primary/30" />
          </div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-medium">
            Real compassion paired with real results is what sets our firm apart in Largo. Carter Injury Law has earned a name across Pinellas County for being compassionate and outcome driven, both at once. Families come to us because we treat every client like family. Never a file number.
          </p>
        </motion.div>

        {/* 5 Reasons Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[1fr_1fr] gap-5 mb-5"
        >

          {/* Reason 01: Tall Image Card */}
          <motion.div 
            variants={fadeInUp}
            className="relative bg-secondary rounded-[20px] overflow-hidden flex flex-col justify-start min-h-[460px] md:row-span-2 shadow-md group"
          >
            <div className="absolute inset-0">
              <Image
                src="/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/dedicated-counsel.png"
                alt="Attorney speaking with clients in Largo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/85 to-secondary/30" />
            </div>

            <div className="relative z-10 p-8 md:p-10">
              <span className="text-5xl font-extrabold text-primary leading-none block mb-2">01</span>
              <div className="w-8 h-[2px] bg-primary mb-5" />
              <h3 className="text-xl md:text-2xl font-extrabold text-white uppercase tracking-wider leading-snug mb-3">
                Local Representation With Strong Community Ties
              </h3>
              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-sm font-medium">
                Our firm serves the Largo community with a deep understanding of local roads and local courts. We know the specific challenges that families in Pinellas County face after a fatal accident. You benefit from the local knowledge of a Largo wrongful death lawyer and our commitment to serving the community with integrity.
              </p>
            </div>
          </motion.div>

          {/* Reason 02 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-7 md:p-8 flex items-start gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="shrink-0">
              <span className="text-4xl font-extrabold text-primary leading-none block mb-3">02</span>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <PhoneCall className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <div className="pt-1 flex-1">
              <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug mb-2">
                Direct Access to Your Attorney
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                You will not be passed off to assistants or paralegals when you call our office. You speak directly to your lawyer about the progress and the details of your legal claim. Personal attention is the hallmark of our firm and we ensure you feel fully supported.
              </p>
            </div>
          </motion.div>

          {/* Reason 03 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-7 md:p-8 flex items-start gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="shrink-0">
              <span className="text-4xl font-extrabold text-primary leading-none block mb-3">03</span>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <div className="pt-1 flex-1">
              <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug mb-2">
                No Fees Unless We Recover Compensation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                We work on a contingency fee basis which means you pay no legal fees upfront ever. We only get paid when we succeed in winning compensation for your grieving family today. This structure removes the financial burden and ensures we are motivated to achieve results for you.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Reason 04 & 05: Two Columns Bottom Row */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8"
        >
          {/* Reason 04 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-7 md:p-8 flex items-start gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="shrink-0">
              <span className="text-4xl font-extrabold text-primary leading-none block mb-3">04</span>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <div className="pt-1 flex-1">
              <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug mb-2">
                Honest Expectations From the First Consultation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                We provide a transparent assessment of your case from the very first meeting we have together. We do not make empty promises but instead we focus on the facts and the law. You can count on our honest and direct advice throughout the entire legal journey here.
              </p>
            </div>
          </motion.div>

          {/* Reason 05 */}
          <motion.div 
            variants={fadeInUp}
            className="bg-white rounded-[20px] border border-gray-100 shadow-sm p-7 md:p-8 flex items-start gap-5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="shrink-0">
              <span className="text-4xl font-extrabold text-primary leading-none block mb-3">05</span>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <div className="pt-1 flex-1">
              <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug mb-2">
                Proven Commitment to Wrongful Death Litigation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Our trial lawyers have years of experience handling high stakes cases with significant emotional and financial weight. We are not afraid to fight the largest insurance companies to obtain a fair result. Our record of success speaks to our dedication and our skill in the courtroom today.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Quote */}
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
