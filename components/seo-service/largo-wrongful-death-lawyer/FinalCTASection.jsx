"use client";
import React from "react";
import { Phone, Calendar, ArrowRight, ShieldCheck, Mail, Users } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  "Free & Confidential Consultation",
  "Direct Access to Your Legal Team",
  "No Upfront Legal Fees",
];

const FinalCTASection = () => {
  return (
    <section className="w-full bg-[#1E2538] py-16 md:py-24 text-white relative overflow-hidden">
      
      {/* Decorative layout circle vectors */}
      <div className="absolute top-[-250px] right-[-250px] w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none select-none" />
      <div className="absolute bottom-[-150px] left-[-150px] w-[450px] h-[450px] rounded-full bg-primary/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: CTA Headers & Bullet points */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            
            {/* Tag line */}
            <span className="text-[12px] font-extrabold tracking-[0.25em] text-primary uppercase block mb-5">
              Secure Committed Legal Advocacy
            </span>

            {/* Heading */}
            <h2
              className="text-3xl md:text-4xl xl:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              Your family deserves accountability and justice <span className="text-primary">for the tragic loss of your loved one today.</span>
            </h2>

            {/* Accent line */}
            <div className="w-12 h-[3px] bg-primary mb-6" />

            {/* Subtitle */}
            <p className="text-white/70 text-base md:text-[17px] leading-relaxed mb-8 font-medium">
              Contact Carter Injury Law at (813) 922-0228 or visit www.carterinjurylaw.com to schedule your free consultation. Our Largo wrongful death lawyer team is ready to stand by your side.
            </p>

            {/* Feature list */}
            <div className="relative flex flex-col sm:flex-row items-stretch justify-between gap-6 border-t border-white/10 pt-8 max-w-xl">
              {features.map((feat, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-primary">
                    <ShieldCheck className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <span className="text-xs font-bold text-white leading-normal uppercase tracking-wider">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Dynamic Action Card */}
          <div className="col-span-12 lg:col-span-5 relative flex items-center justify-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white text-secondary rounded-[24px] p-8 md:p-10 shadow-2xl w-full border border-gray-100/50 flex flex-col gap-6 relative"
            >
              
              {/* Direct call button */}
              <a
                href="tel:+18139220228"
                className="w-full bg-[#faf9f6] hover:bg-[#f3f2ee] rounded-2xl p-5 border border-gray-100 flex items-center gap-5 group transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Call Us Directly</p>
                  <p className="text-primary font-extrabold text-lg md:text-2xl mt-0.5 group-hover:underline">
                    (813) 922-0228
                  </p>
                </div>
              </a>

              {/* Form redirect call button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full bg-primary hover:bg-primary/95 text-white font-extrabold tracking-wider uppercase py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              >
                <Calendar className="w-5 h-5 text-white" strokeWidth={2} />
                <span className="text-xs sm:text-sm font-bold">Schedule Online Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
              </button>

              <div className="w-full h-px bg-gray-100" />

              {/* Security info card */}
              <div className="flex flex-col gap-3 text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Responses within 24 Hours or Less</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Consultations are 100% Free and Private</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
