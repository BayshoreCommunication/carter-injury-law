"use client";
import React from "react";
import { motion } from "framer-motion";

const FiveStepProcessSection = () => {
  return (
    <section className="w-full bg-secondary text-white py-14 md:py-20 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block">
            Proven Legal Pathways
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            How an Uber Accident Lawyer Tampa Turns Complicated Claims Into Clear Legal Pathways
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto my-6" />

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium text-left md:text-center">
            Our dedicated Uber accident lawyer Tampa untangles the confusing web of rideshare corporate insurance coverage policies. We collect digital app data while thoroughly documenting your physical injuries and lost work wage hours. Our legal team handles all frustrating phone calls with the aggressive claims adjusters for you completely. We evaluate every single settlement offer and prepare your personal injury case for trial if needed. This structured approach lets you focus entirely on healing while we fight for your financial recovery.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FiveStepProcessSection;

