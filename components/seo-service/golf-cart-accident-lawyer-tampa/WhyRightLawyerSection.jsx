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
      title: "Uncertainty Over Which Insurance Policy Applies",
      description: "Multiple insurance policies often create confusing coverage disputes between personal auto insurers and commercial liability providers. Homeowner insurance and rental insurance policies may also dispute coverage obligations following a serious cart crash. Resolution of overlapping policy exclusions requires deep legal knowledge regarding Florida insurance coverage statutes and laws. Without legal representation, injured claimants risk accepting policy denials from insurers who misapply coverage exclusions.",
    },
    {
      icon: Scale,
      title: "Disagreements Over Golf Cart Roadway Rules",
      description: "Under Florida law, golf carts are categorized as either a standard golf cart or a low speed vehicle and thus have different roadway operating restrictions. The legal conditions for street usage and operator licenses are complex and differ from municipality to municipality. To provide accurate interpretations of Florida traffic safety laws, there must be legal proof of right of way. Insurance companies often use the 'Roadway Restriction' as an excuse to avoid liability and shift the blame to the injured golf cart driver.",
    },
    {
      icon: Scale,
      title: "Disputed Responsibility for Passenger Injuries",
      description: "Cart drivers and vehicle owners frequently shift liability to avoid paying substantial financial claims to injured passengers. Commercial property operators often deny responsibility for unsafe environmental conditions that directly caused the passenger injury. Investigation of conflicting witness statements requires swift action from an experienced legal team committed to recovery. Refusal to pinpoint operator or owner fault allows insurers to delay or outright reject passenger claims.",
    },
    {
      icon: DollarSign,
      title: "Financial Losses That Continue After Initial Treatment",
      description: "Initial medical bills represent only a small fraction of total long term medical care expenses for victims. Future physical therapy, reduced working capacity and ongoing prescription expenses quickly create devastating household financial strains. Assessment of lifetime financial losses demands comprehensive documentation from specialized medical experts and qualified forecasting consultants. Victims who settle early forfeit their right to claim compensation for future medical treatment costs.",
    },
    {
      icon: Clock,
      title: "Missing Records That Could Support a Claim",
      description: "There is often a loss of critical physical evidence and official maintenance logs soon after a major golf cart incident. An unrepresented victim claim suffers from a lack of witness information, video evidence and rental records. Formal maintenance logs are to be kept and must be preserved by issuing timely spoliation letters in order to avoid destruction or loss of evidence. Attorneys of experience save important digital surveillance footage and physical evidence of the vehicles prior to the information going missing for good.",
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
                  src={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "golf-cart-accident-lawyer-tampa").filePath}
                  alt="Why Golf Cart Accident Victims Can Lose Valuable Compensation Without Legal Representation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Protection For Crash Victims
                </p>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  Injured victims frequently struggle to recover full compensation when handling complex legal claims without professional assistance.
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
                Protection For Crash Victims
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
                Why Golf Cart Accident Victims Can Lose Valuable Compensation Without Legal Representation
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                Injured victims frequently struggle to recover full compensation when handling complex legal claims without professional assistance. Insurance representatives actively exploit legal uncertainties to minimize financial settlements or deny legitimate claims entirely.
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

