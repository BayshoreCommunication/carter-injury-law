"use client";
import React from "react";
import { AlertTriangle, Clock, Wrench, Shield, FileText, CheckCircle2, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const MistakesSection = () => {
  const mistakes = [
    {
      icon: Clock,
      title: "Delaying Medical Evaluation After a Collision",
      description: "Delays in medical care can harm your health and weaken your claim. Insurance companies argue that delayed treatment means minor injuries. Adrenaline can mask the severe pain of internal injuries initially. Visit an emergency room immediately after a crash happens. Prompt medical records establish a direct link to the collision.",
    },
    {
      icon: Wrench,
      title: "Repairing or Discarding a Damaged Bicycle Before Documentation",
      description: "Your damaged bicycle is a crucial piece of physical evidence. Do not repair or discard it before taking comprehensive photographs. The damage patterns help accident reconstruction experts prove collision angles. Store the broken bicycle safely in its exact post crash condition. Photos of your bicycle and other damaged property can support your claim for fair compensation.",
    },
    {
      icon: Shield,
      title: "Failing to Preserve Helmet Clothing and Cycling Equipment",
      description: "A cracked helmet proves the severity of a head impact. Torn clothing shows how you were thrown onto the pavement. Keep all damaged gear in a secure storage bag immediately. Do not wash the clothes you wore during the crash. This physical evidence demonstrates the violent force of the impact.",
    },
    {
      icon: FileText,
      title: "Giving Incomplete Information About Preexisting Injuries",
      description: "Always be completely honest with your doctor about past injuries. Failing to disclose pre-existing medical conditions can damage your credibility during the claims process. Insurance companies will disclose your past medical records during their investigation. Explain how the recent crash worsened your old injury symptoms. Truthful medical histories make your current injury claim much stronger.",
    },
    {
      icon: CheckCircle2,
      title: "Accepting Compensation Before Understanding Future Treatment Needs",
      description: "Never sign a settlement release without knowing your future prognosis. Early offers will not cover your upcoming surgeries or rehabilitation. Once you accept a settlement your case is closed forever. We consult medical experts to project your lifelong care needs. Protect your future by waiting for a complete medical assessment.",
    },
    {
      icon: Share2,
      title: "Posting Accident Related Content That Conflicts With Your Injury Records",
      description: "Insurance investigators monitor your social media accounts after a crash. Pictures of you exercising will ruin a severe injury claim. Avoid posting anything about your accident or physical recovery online. Even innocent updates can be twisted to deny your compensation. Stay entirely off social media while your legal case continues.",
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
            Mistakes That Can Weaken Your Tampa Bicycle Accident Claim
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Simple errors can accidentally destroy your chance at fair compensation. Relevant evidence must be preserved and all losses must be documented promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

