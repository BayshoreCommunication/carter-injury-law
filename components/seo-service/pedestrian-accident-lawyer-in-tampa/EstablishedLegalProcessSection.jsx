"use client";
import React from "react";
import { Shield, FileSearch, Wrench, Handshake, Gavel } from "lucide-react";
import { motion } from "framer-motion";

const EstablishedLegalProcessSection = () => {
  const steps = [
    {
      step: "01",
      icon: Shield,
      title: "Reviewing the Accident and Identifying Liability",
      description: "The firm starts by going through everything available about the crash. Crash reports, photographs, video, and the road conditions at the scene are all examined. The goal at this stage is to understand what happened and who bears responsibility before any other steps are taken.",
    },
    {
      step: "02",
      icon: FileSearch,
      title: "Collecting Medical Records and Supporting Evidence",
      description: "Every medical record connected to the injuries gets pulled, from the first emergency room visit through ongoing treatment. This documentation creates the direct link between the accident and the harm suffered. It is also what the compensation demand is built on.",
    },
    {
      step: "03",
      icon: Wrench,
      title: "Preparing a Strong Demand for Compensation",
      description: "The demand letter lays out the liability, the evidence, and what the client has lost. Medical costs, lost income, pain and suffering, and future care needs are all addressed. The number in the demand reflects what the case is genuinely worth.",
    },
    {
      step: "04",
      icon: Handshake,
      title: "Negotiating With Insurance Companies",
      description: "Carter Injury Law handles every negotiation directly. The firm does not accept offers that fall short of a fair recovery for the client. Negotiations move forward with trial preparation already running in the background, which changes how the other side approaches the conversation.",
    },
    {
      step: "05",
      icon: Gavel,
      title: "Presenting Your Case in Court When Necessary",
      description: "Some cases do not settle, and that outcome does not catch Carter Injury Law off guard. The firm has the trial experience to take a pedestrian accident case before a Hillsborough County jury. Clients are never pushed into a bad settlement because going to court feels too uncertain.",
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
            Established Legal Process for Handling Tampa Pedestrian Accident Claims
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Carter Injury Law follows a clear process on pedestrian accident cases. Each stage is built around protecting the client&apos;s position and pushing toward the strongest possible outcome.
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
