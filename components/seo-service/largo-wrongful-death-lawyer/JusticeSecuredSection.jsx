"use client";
import React from "react";
import { Scale, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const JusticeSecuredSection = () => {
  return (
    <section className="w-full bg-secondary py-16 text-white relative overflow-hidden">
      
      {/* Background Watermark decoration */}
      <div className="absolute right-[-30px] bottom-[-30px] text-white/5 pointer-events-none select-none">
        <Scale className="w-72 h-72 transform -rotate-12" />
      </div>

      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10 text-center">
        
        {/* Shield Icon Accent */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-6 bg-primary/10 shadow-lg text-primary hover:rotate-12 transition-transform duration-300"
        >
          <ShieldCheck className="w-8 h-8 text-primary" strokeWidth={2} />
        </motion.div>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl lg:text-[40px] font-extrabold text-white leading-tight max-w-4xl mx-auto"
          style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
        >
          Justice Secured for Largo Families We Have Represented for Wrongful Death Claims
        </motion.h2>

        {/* Separator line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="h-[3px] bg-primary mx-auto my-6"
        />

        {/* Quote Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-300 text-base md:text-xl leading-relaxed max-w-3xl mx-auto font-medium"
        >
          Our firm has secured life-changing compensation for many families who suffered a tragic wrongful death. We are proud to stand with our clients and deliver the justice they need today.
        </motion.p>

      </div>
    </section>
  );
};

export default JusticeSecuredSection;
