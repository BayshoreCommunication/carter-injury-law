"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, Building, ShieldCheck, ArrowRight, FileText } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="w-full bg-[#1E2538] text-white py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-7 space-y-8 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-3">
                Carter Injury Law, P.A.
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight leading-tight">
                Secure Committed Legal Advocacy, Contact Carter Injury Law for a Confidential Consultation
              </h2>
              <div className="w-24 h-[3px] bg-primary mt-6 mb-6" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
                Connect with our legal team to discuss the details of your crash and explore your options for financial recovery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Largo Office (Satellite office, by appointment)</p>
                  <p className="text-sm font-semibold text-white mt-0.5">801 W. Bay Dr., Suite 229, Largo, FL 33770</p>
                  <p className="text-xs text-primary font-bold mt-0.5">Phone: (727) 955-1922</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Tampa Office</p>
                  <p className="text-sm font-semibold text-white mt-0.5">3114 N. Boulevard, Tampa, FL 33603</p>
                  <p className="text-xs text-primary font-bold mt-0.5">Phone: (813) 922-0228</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Consultation</p>
                  <p className="text-sm font-semibold text-white mt-0.5">Free case evaluation</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-primary">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Fee Arrangement</p>
                  <p className="text-sm font-semibold text-white mt-0.5">Contingency-based representation, subject to a written agreement.</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed pt-2">
              We accept personal injury cases originating throughout Largo and its surrounding neighborhoods. Please{" "}
              <Link href="/" className="text-primary hover:underline font-semibold">
                visit our official website
              </Link>{" "}
              to verify all contact details.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="tel:7279551922"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary hover:bg-red-700 text-white font-extrabold text-base uppercase tracking-wider shadow-xl transition-all duration-300 group"
              >
                <span>Call (727) 955-1922</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/20 hover:border-primary hover:bg-primary/20 text-white font-bold text-base tracking-wide transition-all duration-300"
              >
                <span>Schedule Confidential Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl bg-slate-900 border border-white/10 h-[480px]">
              <Image
                src={getSeoImage("carter-team-cta.png", "uber-accident-lawyer-largo").filePath}
                alt="Carter Injury Law Uber Accident Legal Team in Largo, FL"
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
                  Ready 24/7 to advocate for your family in Largo
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

