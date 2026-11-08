"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldAlert, DollarSign, Activity, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";

const WhyRightLawyerSection = () => {
  const points = [
    {
      icon: ShieldAlert,
      title: "Confusion Over the Insurance Company Duty to Pay",
      description: "Rideshare crashes involve multiple layers of corporate insurance that change based on the active app status. You need deep legal policy analysis to figure out which massive insurance corporation actually owes money.",
    },
    {
      icon: DollarSign,
      title: "Medical Expenses That Continue After an Initial Settlement Offer",
      description: "Insurance adjusters love offering quick checks before you know exactly how much your medical care costs. You will pay for all future doctor visits out of pocket if you accept early money.",
    },
    {
      icon: Activity,
      title: "Disagreements Over Pre Existing Conditions and New Injuries",
      description: "The insurance company will likely claim your back pain existed long before the actual car crash. We gather targeted medical evidence to prove the recent accident directly caused your current physical suffering.",
    },
    {
      icon: Clock,
      title: "Pressure to Resolve a Claim Before Its Value Is Clear",
      description: "Massive financial stress forces many injured people to accept terrible settlement offers out of pure desperation. We shield you from this aggressive pressure so your final check covers all actual financial losses.",
    },
    {
      icon: Users,
      title: "Difficulties Establishing Each Party Share of Fault",
      description: "Multi car pileups often lead to everyone pointing fingers at each other to avoid legal liability. We conduct an independent crash investigation to make sure nobody unfairly blames you for the wreck.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[24px] overflow-hidden shadow-2xl bg-slate-900 border border-gray-100"
            >
              <div className="relative w-full h-[400px] sm:h-[480px]">
                <Image
                  src={getSeoImage("dedicated-uber-accident-lawyer-tampa.webp", "uber-accident-lawyer-tampa").filePath}
                  alt="Why Injured Tampa Uber Accident Victims Risk Losing Compensation Without Legal Representation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Uber Claim Protection
                </p>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  Unrepresented victims who take on massive insurance companies alone usually receive a severely undervalued claim payout. An experienced legal advocate protects you from deceptive corporate tactics designed to minimize your final check.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
                Uber Claim Protection
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
                Why Injured Tampa Uber Accident Victims Risk Losing Compensation Without Legal Representation
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                Unrepresented victims who take on massive insurance companies alone usually receive a severely undervalued claim payout. An experienced legal advocate protects you from deceptive corporate tactics designed to minimize your final check.
              </p>
            </motion.div>

            <div className="space-y-6">
              {points.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-4 p-5 rounded-2xl bg-[#f8f9fa] border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mt-1">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRightLawyerSection;

