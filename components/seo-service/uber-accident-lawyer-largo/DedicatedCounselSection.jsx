"use client";
import React from "react";
import { UserCheck, ShieldCheck, HeartHandshake, Award } from "lucide-react";
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-primary font-bold text-xs uppercase tracking-wider mx-auto">
            <UserCheck className="w-4 h-4" />
            <span>Dedicated Legal Counsel</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
            Dedicated Legal Counsel for Largo Residents Injured in Uber Accidents
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto my-6" />

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-medium text-left md:text-center">
            Carter Injury Law takes the burden of claim management completely off your shoulders. Work alongside a skilled Uber accident lawyer Largo to ensure your medical records, wage statements and insurance claims receive thorough attention. We handle the intense insurance negotiations, organize your medical records and carefully calculate your total financial losses. You receive direct and honest answers about your case progression from start to finish. Our firm provides representation on a contingency fee basis. You do not pay legal fees unless we secure compensation for you.
          </p>

          <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 text-sm font-extrabold text-secondary">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Direct Attorney Access</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-primary" />
              <span>No Upfront Costs</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <span>100% Contingency Fee Basis</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DedicatedCounselSection;

