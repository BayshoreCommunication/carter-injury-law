"use client";
import React from "react";
import {
  TrendingUp, Stethoscope, Scale,
  FolderOpen, Calculator, ShieldCheck, Landmark,
  ArrowRight, ChevronDown, Plus,
} from "lucide-react";

const experts = [
  {
    icon: TrendingUp,
    title: "Economic Experts",
    body: "Calculate financial losses and future income impact.",
  },
  {
    icon: Stethoscope,
    title: "Medical Experts",
    body: "Assess medical records, treatment, and long-term care needs.",
  },
  {
    icon: Scale,
    title: "Legal Team",
    body: "Build the legal strategy, gather evidence, and prove full accountability.",
  },
];

const process = [
  {
    icon: FolderOpen,
    title: "Document",
    body: "We gather records, reports, and evidence.",
  },
  {
    icon: Calculator,
    title: "Calculate",
    body: "We quantify current and future losses.",
  },
  {
    icon: ShieldCheck,
    title: "Prove",
    body: "We connect the evidence to the full human impact.",
  },
  {
    icon: Landmark,
    title: "Pursue",
    body: "We negotiate fiercely or litigate if necessary.",
  },
];

const ExpertValuationSection = () => {
  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-[1320px] mx-auto">

        {/* ── Large Dark Navy Card ── */}
        <div className="bg-secondary rounded-[28px] overflow-hidden shadow-xl">

          {/* ── Top: Header Row ── */}
          <div className="px-8 md:px-14 pt-10 md:pt-14 pb-8">
            <div className="flex items-start gap-5 mb-6">
              {/* Number */}
              <span className="text-5xl md:text-6xl font-extrabold text-primary leading-none shrink-0">
                05
              </span>
              {/* Vertical separator */}
              <div className="w-px self-stretch bg-white/20 shrink-0 mx-1" />
              {/* Title + body */}
              <div className="flex-1">
                <h2 className="text-lg md:text-2xl font-extrabold text-white uppercase tracking-wider leading-snug mb-3">
                  Expert Valuation and Case Documentation
                </h2>
                <p className="text-white/65 text-sm md:text-base leading-relaxed max-w-3xl font-medium">
                  We use a careful, professional approach to calculate these deep financial losses. Our firm partners with economic and medical experts to prove every single detail. Every category of loss gets documented properly, valued fairly before any settlement is ever accepted.
                </p>
              </div>
            </div>

            {/* ── Expert Row: 3 columns with + connectors ── */}
            <div className="flex flex-col md:flex-row items-start md:items-start gap-6 mt-8">
              {experts.map((expert, idx) => {
                const Icon = expert.icon;
                const isLast = idx === experts.length - 1;
                return (
                  <React.Fragment key={idx}>
                    {/* Expert Column */}
                    <div className="flex-1 flex flex-col items-start gap-3">
                      {/* Icon circle */}
                      <div className="w-14 h-14 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center mb-1">
                        <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xs font-extrabold text-white uppercase tracking-widest">
                        {expert.title}
                      </h3>
                      <p className="text-white/55 text-xs leading-relaxed font-medium">
                        {expert.body}
                      </p>
                    </div>

                    {/* Plus connector */}
                    {!isLast && (
                      <div className="hidden md:flex items-center justify-center pt-5 shrink-0 px-2">
                        <Plus className="w-5 h-5 text-primary/60" strokeWidth={2} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Down arrow from center expert */}
            <div className="flex justify-center mt-6 mb-0">
              <div className="w-7 h-7 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                <ChevronDown className="w-4 h-4 text-white/60" strokeWidth={2} />
              </div>
            </div>
          </div>

          {/* ── Bottom: 4-Step Process Row ── */}
          <div className="bg-secondary/80 border-t border-white/10 px-8 md:px-14 py-7">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2">
              {process.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === process.length - 1;
                return (
                  <React.Fragment key={idx}>
                    {/* Step */}
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 rounded-lg border border-white/15 bg-white/8 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary/80" strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-xs font-extrabold text-white uppercase tracking-widest mb-0.5">
                          {step.title}
                        </p>
                        <p className="text-white/50 text-[11px] leading-relaxed font-medium">
                          {step.body}
                        </p>
                      </div>
                    </div>
                    {/* Arrow connector */}
                    {!isLast && (
                      <div className="hidden sm:flex items-center shrink-0 px-1">
                        <ArrowRight className="w-4 h-4 text-primary/50" strokeWidth={2} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* ── Bottom Quote Bar ── */}
          <div className="border-t border-white/10 px-8 md:px-14 py-5 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <div className="flex items-center gap-3 shrink-0">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0" strokeWidth={1.5} />
              <p className="text-primary text-sm md:text-[15px] font-extrabold italic leading-snug text-center">
                An experienced Tampa wrongful death car accident lawyer documents these losses before you accept any insurance offer.
              </p>
            </div>
            <div className="flex-1 h-px bg-white/10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExpertValuationSection;
