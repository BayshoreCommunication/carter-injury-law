"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldAlert, Layers, Scale, DollarSign, FileText } from "lucide-react";
import { motion } from "framer-motion";

const WhyRightLawyerSection = () => {
  const points = [
    {
      icon: ShieldAlert,
      title: "Evidence Controlled by Trucking Companies",
      description: "Commercial motor carriers possess direct control over crucial physical accident evidence and internal employee driving records. These massive companies may destroy this sensitive data rapidly if an attorney does not intervene immediately. Professional legal representation forces these commercial carriers to preserve all relevant collision information for your claim safely.",
    },
    {
      icon: Layers,
      title: "Multiple Insurance Policies and Liability Issues",
      description: "Commercial highway accidents usually involve incredibly complex insurance layers and overlapping corporate financial liability structures simultaneously. Complex commercial insurance policies require highly sophisticated legal knowledge to maximize your total financial recovery.",
    },
    {
      icon: Scale,
      title: "Commercial Trucking Regulations and Compliance Records",
      description: "The FMCSA enforces extremely strict safety protocols for all commercial motor carriers operating vehicles nationwide continuously. A strict liability violation of a direct regulating statute is frequently the best basis for your injury case.",
    },
    {
      icon: DollarSign,
      title: "Financial Losses That Extend Beyond Immediate Medical Bills",
      description: "Severe crash injuries create lasting financial burdens extending far beyond your initial emergency room medical care. Victims regularly overlook their future medical rehabilitation needs and diminished earning capacity without proper legal guidance.",
    },
    {
      icon: FileText,
      title: "Statements and Documents That Can Affect a Claim",
      description: "Recorded statements are used by corporate insurance adjusters to twist the truth and to try and under-estimate the settlement amount. A knowledgeable lawyer can communicate with all insurance companies and defend you against unfair insurance proposals to reduce your pay.",
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
                  src={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "best-truck-accident-lawyer-north-tampa").filePath}
                  alt="Why Truck Accident Victims Can Lose Valuable Compensation Without Legal Representation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Protection For Truck Accident Victims
                </p>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  Unrepresented crash victims face significant disadvantages against corporate insurers. Representation protects your recovery.
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
                Protection For Injury Victims
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
                Why Truck Accident Victims Can Lose Valuable Compensation Without Legal Representation
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                Unrepresented crash victims face significant disadvantages when going up against national trucking lines and corporate insurers. Early legal representation ensures that vital evidence remains intact and your rights stay protected.
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
