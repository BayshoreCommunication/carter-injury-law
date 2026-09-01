"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldAlert, Clock, Layers, Scale } from "lucide-react";
import { motion } from "framer-motion";

const WhyRightLawyerSection = () => {
  const points = [
    {
      icon: ShieldAlert,
      title: "Disputed Liability Between Drivers and Pedestrians",
      description: "Insurance Companies don't do this occasionally. It is a common way of doing business for them. They'll argue the pedestrian stepped out without warning, or crossed against the light, or wasn't visible. Under Florida Statute 768.81, if a court decides you were more than 50% responsible, your right to recover anything disappears entirely. Carter Injury Law investigates these situations early and builds the evidence picture before the adjuster's version of events goes unchallenged.",
    },
    {
      icon: Clock,
      title: "Incomplete Medical Documentation Affecting Claim Value",
      description: "An emergency room visit captures what's visibly wrong right after a crash. It does not document everything. Nerve damage, post-concussion complications, and chronic pain conditions develop over weeks. If a treating physician never connects those later symptoms to the accident in writing, the insurance company has an easy argument that the accident didn't cause them. Carter Injury Law coordinates with your doctors to make sure the full picture ends up in the medical record.",
    },
    {
      icon: Layers,
      title: "Insurance Companies Minimizing Serious Injuries",
      description: "Adjusters are not reading your records to understand what happened to you. They're reading them to find language they can use against you. A serious fracture becomes a \"soft tissue complaint.\" A documented concussion gets reframed as a pre-existing headache condition. Pushing back on those mischaracterizations requires attorneys who have seen the same tactics hundreds of times and know how to counter them with hard evidence.",
    },
    {
      icon: Scale,
      title: "Delays That Can Reduce Available Evidence",
      description: "A gas station camera two doors from the accident might have caught everything. But that footage is probably gone within 72 hours if nobody asks for it. Skid marks fade. Witnesses stop responding. The Largo Police Department crash report, which needs to be reviewed quickly for factual errors, only gets harder to correct with time. Each day without legal counsel is a day the evidence case gets a little thinner.",
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
                  src={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "pedestrian-accidents-lawyer-largo").filePath}
                  alt="Why Injured Pedestrians Lose Out on Compensation Without Legal Representation After an Accident"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Protection For Injury Victims
                </p>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  Insurance adjusters move quickly to minimize claims. Dedicated counsel protects your financial recovery.
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
                Protection For Pedestrian Victims
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
                Why Injured Pedestrians Lose Out on Compensation Without Legal Representation After an Accident
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                Unrepresented pedestrians routinely suffer delays, reductions, or outright denials of insurance claims with the regular use of standard playbooks by the insurance companies. Having dedicated legal counsel ensures these unfair defense processes are challenged before the financial recovery they are entitled to receive.
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
                    className="flex items-start gap-4 p-5 rounded-2xl bg-gray-50/80 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-primary flex items-center justify-center shrink-0 mt-1">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-secondary mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
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
