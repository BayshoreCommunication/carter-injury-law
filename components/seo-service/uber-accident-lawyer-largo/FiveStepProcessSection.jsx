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
            Clear Legal Pathways
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            How an Uber Accident Lawyer Largo Can Help Turn a Confusing Claim Into a Clear Plan
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto my-6" />

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium text-left md:text-center">
            A proper crash claim requires far more work than just filing initial documents. An experienced Uber accident lawyer Largo investigates the accident scene and untangles overlapping insurance policies to find the right coverage. Our firm preserves critical evidence like app data and witness statements to protect your financial interests. We take over the frustrating back-and-forth with adjusters. Every settlement offer gets a complete evaluation to ensure it covers your actual medical and financial losses. We prepare your case for trial if the insurance company refuses to offer a fair resolution.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FiveStepProcessSection;

