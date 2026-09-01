"use client";
import React from "react";
import { AlertTriangle, Clock, PhoneCall, Camera, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const MistakesSection = () => {
  const mistakes = [
    {
      icon: Clock,
      title: "Delaying Medical Treatment After the Collision",
      description: "The insurance company has an argument if you wait a few days to see a doctor. Their response will be if it was really bad, you'd have gone straight away. Without adequate medical treatment, you may not be sure about your injuries or even if they were caused by the accident.",
    },
    {
      icon: PhoneCall,
      title: "Speaking With Insurance Adjusters Without Legal Advice",
      description: "The adjuster who calls you after the accident is doing a job and his job is to minimize what the company pays. There's no need to record a statement before meeting with an attorney. This will provide them with an early chance to get information they may be able to use against your claim in the future.",
    },
    {
      icon: Camera,
      title: "Failing to Preserve Evidence From the Scene",
      description: "Photographs at the accident site are some of the most useful pieces of evidence you can have if you were physically able after the accident. It is important to document any road conditions, crosswalk markings, where the vehicles came to rest and any visible injuries before these are moved or cleaned. That record can prove to be the difference in the case when fault is in question.",
    },
    {
      icon: Share2,
      title: "Discussing the Accident on Social Media",
      description: "Insurance companies may review any public social media accounts for evidence of injuries or any comments that could be used to refute a claim. The best thing to do is to not post anything on social media about the accident until the case is resolved.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 font-bold text-xs uppercase tracking-wider mb-3">
            <AlertTriangle className="w-4 h-4" />
            <span>Avoid Costly Missteps</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
            Mistakes That Can Weaken Your Tampa Pedestrian Accident Claim
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            The choices you make in the first few days after a pedestrian accident follow you through the entire claims process. Some of the most damaging mistakes are also the easiest ones to make.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mistakes.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-[20px] bg-gray-50 border border-gray-100 hover:border-red-100 hover:bg-red-50/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-100/60 text-amber-800 flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-3">
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

export default MistakesSection;
