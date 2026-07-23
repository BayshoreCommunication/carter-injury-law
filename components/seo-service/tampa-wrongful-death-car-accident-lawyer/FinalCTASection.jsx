"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Calendar, ArrowRight, CheckCircle2, Lock, Heart, ShieldCheck } from "lucide-react";

const PHONE = "(813) 922-0228";
const PHONE_HREF = "tel:+18139220228";

const features = [
  "Free & Confidential Consultation",
  "Direct Access to Your Legal Team",
  "No Upfront Legal Fees",
];

const FinalCTASection = () => {
  return (
    <section className="w-full bg-secondary overflow-hidden">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[580px]">

        {/* ── Left: Text Content ── */}
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-16 py-14 md:py-20">

          {/* Label */}
          <span className="text-[11px] font-extrabold tracking-[0.25em] text-primary uppercase block mb-7">
            Secure Committed Legal Advocacy
          </span>

          {/* Heading */}
          <h2
            className="text-3xl md:text-4xl xl:text-[44px] font-extrabold text-white leading-[1.12] tracking-tight mb-5"
            style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            Your family deserves answers, accountability and a legal team <span className="text-primary">that genuinely cares how this turns out.</span>
          </h2>

          {/* Accent line */}
          <div className="w-12 h-[3px] bg-primary mb-6" />

          {/* Subtitle */}
          <p className="text-white/70 text-base md:text-[17px] leading-relaxed mb-8 font-medium">
            Carter Injury Law is ready to listen, and ready to act. Contact us at (813) 922-0228 or visit www.carterinjurylaw.com to schedule a free, confidential consultation. Our Tampa wrongful death car accident lawyer team is standing by, ready to help your family pursue the justice it deserves.
          </p>

          {/* Feature list with dashed connector */}
          <ul className="flex flex-col gap-0 mb-10">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                {/* Icon + dashed line column */}
                <div className="flex flex-col items-center shrink-0 pt-0.5">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" strokeWidth={2} />
                  {i < features.length - 1 && (
                    <div className="w-px h-5 border-l border-dashed border-white/25 mt-1" />
                  )}
                </div>
                <p className="text-white font-semibold text-sm md:text-base pb-4 last:pb-0">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {/* Schedule button */}
            <Link
              href="/appointment"
              className="group flex items-center gap-3 border-2 border-primary bg-primary/10 text-white font-extrabold text-sm px-5 py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 active:scale-95 uppercase tracking-wider whitespace-nowrap"
            >
              <Calendar className="w-5 h-5 shrink-0" strokeWidth={1.5} />
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4 ml-auto shrink-0" strokeWidth={2.5} />
            </Link>

            {/* Phone button */}
            <a
              href={PHONE_HREF}
              className="group flex items-center gap-3 bg-white/10 border border-white/20 text-white font-extrabold text-sm px-5 py-4 rounded-xl hover:bg-white/20 transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-primary" strokeWidth={2} />
              </div>
              <div className="text-left">
                <p className="text-white font-extrabold text-base leading-tight">{PHONE}</p>
                <p className="text-white/50 text-[11px] font-normal">Call Our Team</p>
              </div>
            </a>
          </div>

          {/* Privacy note */}
          <div className="flex items-center gap-2 text-white/40 text-xs">
            <Lock className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
            <span>Your information is safe with us. We'll never share it.</span>
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div className="relative hidden lg:block min-h-[480px]">
          <Image
            src="/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/carter-team-cta.png"
            alt="Carter Injury Law legal team"
            fill
            sizes="50vw"
            className="object-cover object-top"
            priority
          />
          {/* Left gradient fade into navy */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/30 to-transparent" />

          {/* ── Top-right badge ── */}
          <div className="absolute top-6 right-6 bg-white/10 border border-primary/40 backdrop-blur-sm rounded-xl px-4 py-3 text-center">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span className="text-white font-extrabold text-[11px] uppercase tracking-widest">Free · Confidential</span>
            </div>
            <p className="text-white/60 text-[11px] uppercase tracking-widest font-semibold">No Obligation</p>
          </div>

          {/* ── Bottom-right badge ── */}
          <div className="absolute bottom-6 right-6 bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-xl max-w-[200px]">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-secondary font-extrabold text-sm leading-snug">Available to Listen &amp; Help</p>
            </div>
          </div>
        </div>

      </div>

      {/* Mobile photo strip */}
      <div className="relative w-full h-64 lg:hidden">
        <Image
          src="/assets/seo-service/tampa-wrongful-death-car-accident-lawyer/carter-team-cta.png"
          alt="Carter Injury Law legal team"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-transparent" />
      </div>
    </section>
  );
};

export default FinalCTASection;
