"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldAlert, Scale, FileText, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const WhyRightLawyerSection = () => {
  const points = [
    {
      icon: ShieldAlert,
      title: "Insurance Coverage Questions After a Bicycle Collision",
      description: "It can be difficult to determine which insurance policy applies after a crash. Your own auto policy might provide certain injury benefits. The at fault driver insurance should cover your remaining losses. Our legal team reviews all policies to maximize your compensation. We prevent insurers from unfairly denying your legitimate injury claim.",
    },
    {
      icon: Scale,
      title: "Disputes Over the Driver Responsibility for the Crash",
      description: "At fault drivers frequently try to blame the injured rider instead. Insurance adjusters use these disputes to minimize your financial recovery. An attorney gathers strong evidence to prove the driver's negligence. We protect you from unfair accusations of comparative fault. We ensure the true cause of the crash is officially established.",
    },
    {
      icon: FileText,
      title: "Medical Evidence Required to Establish Injury Related Losses",
      description: "You must prove how the collision caused your specific injuries. Incomplete medical records can severely damage your personal injury claim. We help coordinate proper medical documentation with your healthcare providers. This proves the exact extent of your physical limitations. Comprehensive medical evidence prevents insurance companies from undervaluing your physical suffering.",
    },
    {
      icon: Clock,
      title: "Evidence That Can Disappear Before a Claim Is Filed",
      description: "Critical crash evidence vanishes very quickly after an accident occurs. Traffic camera footage gets overwritten within a few short days. Skid marks on the pavement fade with rain and regular traffic. A lawyer acts quickly to preserve these vital physical proofs. Missing evidence makes proving fault much more difficult later on.",
    },
    {
      icon: DollarSign,
      title: "Settlement Offers That Fail to Account for Future Medical Needs",
      description: "Initial settlement offers rarely cover your long term medical care costs. An early settlement may leave you responsible for future medical expenses. We calculate all anticipated surgeries and ongoing physical therapy expenses. Our team fights for a settlement that covers your entire future. You deserve complete financial security for your entire medical recovery.",
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
                  src={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "bicycle-accident-lawyer-tampa-fl").filePath}
                  alt="Why Bicycle Accident Victims Can Lose Valuable Compensation Without Legal Representation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Protection For Injured Cyclists
                </p>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  If you handle a claim alone, insurers may deny it or offer less. Legal representation protects your recovery.
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
                Protection For Cyclists
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
                Why Bicycle Accident Victims Can Lose Valuable Compensation Without Legal Representation
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                If you handle an insurance claim alone, the insurance company may deny it or offer less compensation than you deserve. An attorney protects you from common difficulties that ruin cases.
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

