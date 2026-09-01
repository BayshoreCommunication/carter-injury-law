"use client";
import React from "react";
import { ShieldCheck, Award, TrendingUp } from "lucide-react";
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
            Justice Secured for Tampa Families We Have Represented for Wrongful Death Claims
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto my-6" />

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
            Results are the most honest measure of what a law firm actually does for its clients. These verified outcomes from Carter Injury Law represent the firm's track record of preparation and persistence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 text-left">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span className="text-2xl sm:text-3xl font-extrabold text-primary block mb-2">
                $400,000 Settlement
              </span>
              <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed">
                David Carter secured a $400,000 settlement for a client following a complex litigation matter involving serious injuries and an insurer that refused to cooperate. The settlement covered all medical expenses in full.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <span className="text-2xl sm:text-3xl font-extrabold text-primary block mb-2">
                Full Policy-Limit Recovery
              </span>
              <p className="text-gray-300 text-xs sm:text-sm font-medium leading-relaxed">
                Carter Injury Law obtained a full policy-limit settlement on behalf of a client, covering all medical costs without exception.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JusticeSecuredSection;
