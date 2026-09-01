"use client";
import React from "react";
import { Shield, FileSearch, Wrench, Handshake, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Shield,
      title: "Reviewing the Facts and Identifying Responsible Parties",
      description: "Every case starts with the facts. The crash report, your firsthand account, available photographs, and any witness information are reviewed together to get an accurate picture of what happened. From there, the firm identifies who bears legal responsibility, whether that's one party or several, and what evidence needs to be locked down immediately.",
    },
    {
      step: "02",
      icon: FileSearch,
      title: "Preserving Critical Evidence to Support the Claim",
      description: "Legal hold letters go out right away to any business, property manager, or traffic authority that may have relevant footage or records. Witnesses are contacted while their memories are fresh. Accident scene conditions get documented before the road is repaved or lighting is replaced. Every piece of physical and digital evidence that still exists gets requested and secured.",
    },
    {
      step: "03",
      icon: Wrench,
      title: "Calculating the Full Extent of Your Damages",
      description: "Medical bills from the accident are just the starting point. The firm works with your treating physicians to document prognosis, future care requirements, and the ongoing limitations your injuries create. Employment records establish the wages already lost. Expert opinions address what permanent impairment will cost over a lifetime. The damaged picture is built to reflect the full reality of what happened to you.",
    },
    {
      step: "04",
      icon: Handshake,
      title: "Negotiating for a Fair Financial Recovery",
      description: "When Carter Injury Law sends a demand, it comes with a complete case file behind it. The negotiation starts from a documented position, and low offers get pushed back on with evidence. Insurance companies negotiate differently when they can see the case is trial-ready. Carter Injury Law makes sure they can see that from the beginning.",
    },
    {
      step: "05",
      icon: Gavel,
      title: "Taking the Case to Court When Justice Requires It",
      description: "Some insurance companies are not willing to come to the table no matter how good the case is. They're hoping that you will become impatient or run out of funds. Carter Injury Law prepares every pedestrian accident case for trial from day one, and if a Pinellas County courtroom is where fair compensation has to come from, that's where the firm goes.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Disciplined Legal Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Established Legal Process for Handling Largo Pedestrian Accident Claims
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Carter Injury Law works through every pedestrian accident claim the same way, with careful attention to each stage and no shortcuts.
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
