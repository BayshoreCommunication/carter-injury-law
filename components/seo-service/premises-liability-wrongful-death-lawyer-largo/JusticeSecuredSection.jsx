"use client";
import React from "react";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

const JusticeSecuredSection = () => {
  return (
    <section className="w-full bg-[#1E2538] text-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-primary font-bold text-xs uppercase tracking-wider mx-auto border border-white/10">
            <Award className="w-4 h-4 text-primary" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white tracking-tight leading-tight">
            Justice Secured for Largo Families We Have Represented for Wrongful Death Claims
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto my-6" />

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
            We stand beside grieving relatives throughout Pinellas County after a fatal property accident. We build robust cases to secure the financial compensation available under Florida law.
          </p>
        </div>

      </div>
    </section>
  );
};

export default JusticeSecuredSection;
