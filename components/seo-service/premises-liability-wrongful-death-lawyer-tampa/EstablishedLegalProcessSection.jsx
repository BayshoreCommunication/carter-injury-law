"use client";
import React from "react";
import { Shield, FileSearch, Wrench, Handshake, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Shield,
      title: "Immediate Preservation of Property Evidence",
      description: "Legal hold notices go out at the start of every case. They put property owners, management companies, security contractors, and every other relevant party on formal notice that all documents, video footage, electronic records, and physical evidence related to the fatal accident must be retained. That first move is often the most consequential one the firm makes.",
    },
    {
      step: "02",
      icon: FileSearch,
      title: "Reviewing Building Maintenance and Safety Records",
      description: "Carter Injury Law pulls every available maintenance log, safety inspection report, prior incident report, and tenant or guest complaint that relates to the property and the condition at issue. These records regularly surface a pattern of neglect the property owner hoped would stay buried. Hillsborough County building permit histories and code enforcement records get pulled as well where they're relevant to the claim.",
    },
    {
      step: "03",
      icon: Wrench,
      title: "Consulting Premises Safety and Engineering Experts",
      description: "Qualified experts examine the site, review the construction and maintenance records, and give formal opinions about what was wrong, what the applicable standards required, and how the property owner's failure caused the death. The Florida Building Code and OSHA standards provide the framework. Expert testimony is what makes the legal theory concrete enough to take into a negotiation or a courtroom.",
    },
    {
      step: "04",
      icon: Handshake,
      title: "Negotiating With Property Owners and Commercial Insurers",
      description: "By the time Carter Injury Law sits down with a property owner's insurance company, the firm has documented evidence, expert support, and a complete legal theory of liability. Most cases settle at this stage. Property insurers know when a firm is genuinely prepared for trial, and that preparation is what moves them toward fair numbers rather than lowball offers.",
    },
    {
      step: "05",
      icon: Gavel,
      title: "Courtroom Representation When Litigation Becomes Necessary",
      description: "Some insurance companies don't move until they're in front of a jury. Carter Injury Law is built for that. David Carter has experience presenting complex premises liability cases at trial. Every piece of evidence is courtroom-ready before a trial date is ever set. Families don't get handed off to a different attorney when the case goes to litigation. The same attorney who built the case tries it.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Structured & Rigorous Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Established Legal Process for Handling Tampa Premises Liability Wrongful Death Cases
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Every case follows a deliberate sequence designed to build the strongest possible foundation before a single negotiation begins. Skipping steps in that process is how cases that should win end up settling for less.
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gray-50/80 rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col md:flex-row items-start md:items-center gap-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-3xl font-extrabold text-primary">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-extrabold text-secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default EstablishedLegalProcessSection;
