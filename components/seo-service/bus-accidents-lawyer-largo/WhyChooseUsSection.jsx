"use client";
import { getSeoImage } from "@/lib/seo-service-images";

import React from "react";
import Image from "next/image";
import { Shield, Scale, MessageCircle, PhoneCall, UserCheck } from "lucide-react";
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
              Why Choose Our Firm
            </span>
            <div className="flex-1 max-w-[80px] h-px bg-primary/40" />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight mb-4">
            Why Largo Bus Accident Victims Choose Our Law Firm
          </h2>

          <div className="flex items-center justify-center gap-2 my-5">
            <div className="w-12 h-px bg-primary/30" />
            <div className="w-2.5 h-2.5 rotate-45 bg-primary" />
            <div className="w-12 h-px bg-primary/30" />
          </div>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-4xl mx-auto font-medium">
            Representing crash victims is our primary mission, bringing deep regulatory knowledge to commercial auto lawsuits.
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

          {/* Reason 01: Tall Card */}
          <motion.div 
            variants={fadeInUp}
            className="relative bg-secondary rounded-[20px] overflow-hidden flex flex-col justify-start min-h-[460px] md:row-span-2 shadow-md group"
          >
            <div className="absolute inset-0">
              <Image
                src={getSeoImage("dedicated-counsel", "bus-accidents-lawyer-largo").filePath} alt={getSeoImage("dedicated-counsel", "bus-accidents-lawyer-largo").altText} title={getSeoImage("dedicated-counsel", "bus-accidents-lawyer-largo").title}
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
                Deep Knowledge of Florida Bus Accident Laws
              </h3>
              <p className="text-white/80 text-sm md:text-[15px] leading-relaxed max-w-sm font-medium">
                We possess specific expertise regarding Florida’s unique liability standards and how they apply to transportation. Knowing exactly which statutes govern your specific accident gives us a significant advantage in court. We monitor changes in local transit law to ensure our strategy remains current and effective. Our knowledge translates into more accurate claims and better settlement outcomes for your specific case. You deserve a firm that understands the technical details of state and local transportation law.
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
                <UserCheck className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
            </div>
            <div className="pt-1 flex-1">
              <h3 className="text-[15px] font-extrabold text-secondary uppercase tracking-wider leading-snug mb-2">
                Responsive and Compassionate Legal Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                We understand that you are suffering, so our staff prioritizes your inquiries to ensure clarity. We make sure you never feel left in the dark during the confusing post-accident period. Compassion guides how we interact with you during every phone call and office visit. Our team is always here to listen to your concerns and provide the support needed. Being a supportive legal partner for your family is what we strive for daily.
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
                Contingency Fee Representation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                Our business model is built on mutual success for both the firm and the client. We only collect fees if we secure a financial recovery for your specific case. This removes the financial risk of hiring high-quality legal representation for your important claim. You pay nothing upfront, allowing you to focus purely on your physical recovery efforts. Our success is tied directly to your success, creating a powerful partnership for justice.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Reason 04 & 05 */}
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
                Thorough Preparation for Every Case
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                We do not aim for the quickest settlement; we aim for the best outcome available. Building an exhaustive trial-ready narrative for every client gives us leverage during all negotiations. We anticipate the tactics insurance companies will use to delay or deny your settlement. This thorough preparation means we are ready for whatever the opposition throws at us. Quality legal work requires time, and we dedicate ourselves to winning your claim.
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
                A History of Standing Up to Large Insurance Carriers
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-medium">
                We refuse to be intimidated by the resources of major insurance firms and their lawyers. We successfully challenged their denial tactics in numerous high-stakes cases by proving bad faith. Our firm has a track record of winning against these large and powerful corporate entities. We know how to expose their failure to investigate your claims with proper care. You get a powerful advocate who knows how to hold these companies fully accountable.
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
