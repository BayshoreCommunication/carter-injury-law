"use client";
import React from "react";
import { motion } from "framer-motion";

const DedicatedCounselSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-14 md:py-20 border-y border-gray-100">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 text-center space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
            Dedicated Legal Counsel for Tampa Uber Accident Victims
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto my-6" />

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium text-left md:text-center">
            Carter Injury Law organizes your messy accident documents and fights the greedy insurance adjusters directly always. We calculate your future medical needs and explain all your legal options in plain English words. Our firm focuses on personal client attention so you never feel ignored during this difficult process. We work strictly on contingency so you pay absolutely nothing unless we win your legal case. Our experienced Uber accident lawyer Tampa gives your injury claim the professional attention it deeply deserves.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DedicatedCounselSection;

