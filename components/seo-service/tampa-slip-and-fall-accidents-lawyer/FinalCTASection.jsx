"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { Phone, MapPin, Globe, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="w-full bg-[#1E2538] text-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="col-span-12 lg:col-span-7 space-y-8 text-left">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-3">
                Contact Attorney David Carter Today
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
                Secure Committed Legal Advocacy, Contact Carter Injury Law for a Confidential Consultation
              </h2>
              <div className="w-24 h-[3px] bg-primary mt-6 mb-6" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
                If you've been seriously hurt on someone else's property, waiting is the worst decision you can make. Carter Injury Law is available 24 hours a day, seven days a week. Call, share what happened, and let an experienced attorney take it from there.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Tampa Office</p>
                  <p className="text-sm font-semibold text-white mt-0.5">3114 N. Boulevard, Tampa, FL 33603</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Direct Phone Lines</p>
                  <p className="text-sm font-semibold text-white mt-0.5">Tampa: (813) 922-0228</p>
                  <p className="text-sm font-semibold text-white">Largo: (727) 955-1922</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Website</p>
                  <p className="text-sm font-semibold text-white mt-0.5">www.carterinjurylaw.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Availability</p>
                  <p className="text-sm font-semibold text-white mt-0.5">Free Evaluation. Available 24/7.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="tel:8139220228"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary hover:bg-red-700 text-white font-extrabold text-base uppercase tracking-wider shadow-xl transition-all duration-300 group"
              >
                <span>Call (813) 922-0228 Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl bg-slate-900 border border-white/10 h-[450px]">
              <Image
                src={getSeoImage("carter-team-cta.png", "tampa-slip-and-fall-accidents-lawyer").filePath}
                alt="Carter Injury Law Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
              <div className="absolute bottom-6 inset-x-6 text-center">
                <p className="text-sm font-bold text-white uppercase tracking-wider">
                  Carter Injury Law Legal Team
                </p>
                <p className="text-xs text-gray-300 mt-1">
                  Ready 24/7 to advocate for your family
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;
