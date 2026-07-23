"use client";
import React from "react";
import { Phone, Calendar, ArrowRight, ShieldCheck, Mail, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="w-full bg-[#1E2538] py-16 md:py-24 text-white relative overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-[-250px] right-[-250px] w-[600px] h-[600px] rounded-full border border-white/5 pointer-events-none select-none" />
      <div className="absolute bottom-[-150px] left-[-150px] w-[450px] h-[450px] rounded-full bg-primary/5 blur-[120px] pointer-events-none select-none" />

      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            
            <span className="text-[12px] font-extrabold tracking-[0.25em] text-primary uppercase block mb-5">
              Secure Committed Legal Advocacy
            </span>

            <h2
              className="text-3xl md:text-4xl xl:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight mb-5"
              style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
            >
              Your recovery deserves a legal team <br />
              <span className="text-primary">that will never back down for victims.</span>
            </h2>

            <div className="w-12 h-[3px] bg-primary mb-6" />

            <p className="text-white/70 text-base md:text-[17px] leading-relaxed mb-8 font-medium">
              Carter Injury Law is ready to listen and ready to act for you. Contact us at 813 922 0228 or visit our website to schedule today. You pay nothing unless we recover compensation on your behalf here today.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10 max-w-xl">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Tampa Office</p>
                  <p className="text-white font-semibold text-sm mt-0.5">3114 N. Boulevard, Tampa, FL 33603</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Largo Office</p>
                  <p className="text-white font-semibold text-sm mt-0.5">801 W. Bay Dr., Suite 229, Largo, FL 33770</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-5 relative flex items-center justify-center">
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-white text-secondary rounded-[24px] p-8 md:p-10 shadow-2xl w-full border border-gray-100/50 flex flex-col gap-5 relative"
            >
              
              <a
                href="tel:+18139220228"
                className="w-full bg-[#faf9f6] hover:bg-[#f3f2ee] rounded-2xl p-4 border border-gray-100 flex items-center gap-4 group transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-4 h-4 text-white" strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Hillsborough Office</p>
                  <p className="text-primary font-extrabold text-base sm:text-lg mt-0.5 group-hover:underline">
                    (813) 922-0228
                  </p>
                </div>
              </a>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full bg-primary hover:bg-primary/95 text-white font-extrabold tracking-wider uppercase py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-xs sm:text-sm"
              >
                <Calendar className="w-5 h-5 text-white" strokeWidth={2} />
                <span>Schedule Online Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" strokeWidth={2.5} />
              </button>

              <div className="w-full h-px bg-gray-100" />

              <a
                href="https://www.carterinjurylaw.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-gray-500 font-bold hover:text-primary transition-colors duration-200 uppercase tracking-wider"
              >
                <Globe className="w-4 h-4" />
                <span>Visit Contact Page Online</span>
              </a>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
