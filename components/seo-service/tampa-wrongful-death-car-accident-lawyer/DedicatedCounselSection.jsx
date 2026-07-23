"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Direct Attorney Access",
    body: "Every family we represent gets direct access to an experienced attorney. Not a revolving lineup of case managers.",
  },
  {
    number: "02",
    title: "Steady Personal Communication",
    body: "Grieving families deserve steady, personal communication, and that's what we try to give.",
  },
  {
    number: "03",
    title: "Seriousness and Compassion",
    body: "We handle the legal complexity so your family can give their full attention to healing. Every case gets the seriousness and the compassion it deserves. Nothing less.",
  },
];

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const DedicatedCounselSection = () => {
  return (
    <section className="w-full bg-white py-0 overflow-hidden">
      <div className="max-w-[1320px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">

          {/* ── Left: Image Panel ── */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative w-full h-[380px] lg:h-auto"
          >
            <Image
              src="/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/dedicated-counsel.png"
              alt="Attorney meeting with clients in office"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />

            {/* Overlay gradient bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent" />

            {/* Monogram badge card */}
            <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:w-[280px] bg-secondary/95 backdrop-blur-sm rounded-2xl p-5 border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center shrink-0 bg-primary/10">
                  <span className="text-primary font-extrabold text-sm tracking-wider">DA</span>
                </div>
                <div>
                  <p className="text-white font-extrabold text-[15px] leading-snug">Direct Attorney Access</p>
                  <p className="text-white/60 text-xs mt-0.5 font-medium">From First Call to Final Resolution</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: Content Panel ── */}
          <div className="flex flex-col justify-center px-8 md:px-14 lg:px-16 py-14 lg:py-20 bg-[#faf9f6]">

            {/* Top accent line */}
            <div className="w-8 h-[3px] bg-primary mb-6" />

            {/* Category label */}
            <span className="text-[12px] font-extrabold tracking-[0.2em] text-primary uppercase block mb-5">
              Dedicated Legal Counsel
            </span>

            {/* Main heading */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl xl:text-[42px] font-extrabold text-secondary leading-[1.15] tracking-tight mb-6"
            >
              Dedicated Legal Counsel for Tampa Families Facing Wrongful Death Claims
            </motion.h2>

            {/* Description */}
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-700 text-lg font-bold leading-snug mb-4"
            >
              Your family deserves a legal team that answers the phone and remembers your name.
            </motion.h3>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md font-medium"
            >
              From the first call to the final resolution, you'll know exactly who to reach out to.
            </motion.p>

            {/* Separator */}
            <div className="w-full h-px bg-gray-200 mb-8" />

            {/* Feature list */}
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-7"
            >
              {features.map((f, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-start gap-5">
                  {/* Large brand Red number */}
                  <span className="text-4xl font-extrabold text-primary leading-none shrink-0 w-12 text-right">
                    {f.number}
                  </span>
                  {/* Vertical separator */}
                  <div className="w-px self-stretch bg-gray-200 shrink-0" />
                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-xs font-extrabold text-secondary uppercase tracking-widest mb-1">
                      {f.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-medium">{f.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DedicatedCounselSection;
