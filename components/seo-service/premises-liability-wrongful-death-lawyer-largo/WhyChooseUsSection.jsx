"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldCheck, Clock, UserCheck, Gavel, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: ShieldCheck,
      title: "Focused Investigation of Property Owner Negligence",
      description: "Carter Injury Law does not build its case from what the property owner's insurance company is willing to share. The firm runs its own independent investigation, issues its own preservation demands, locates its own witnesses, and draws its own conclusions from the physical and documentary evidence. What gets found that way is sometimes exactly what the opposing side hoped would never surface.",
    },
    {
      icon: Clock,
      title: "Strategic Case Preparation From Day One",
      description: "Every case at Carter Injury Law is treated as a trial case from the first conversation. The evidence gathered, the experts retained, and the legal theory developed all reflect a firm that does not assume the case will settle before a jury sees it. That preparation also happens to produce better settlement outcomes, because the insurer's legal team knows what is waiting for them if negotiations fail.",
    },
    {
      icon: UserCheck,
      title: "Personal Attention Throughout the Legal Process",
      description: "There is no point in the process at which a Carter Injury Law client gets redirected to someone who was not managing their case. Attorney David Carter is accessible. When questions arise, they go to the attorney. When the case moves to a new stage, the client hears about it directly. That level of contact is how the firm operates.",
    },
    {
      icon: Gavel,
      title: "Strong Negotiation With Commercial Insurance Carriers",
      description: "David Carter has negotiated directly against the commercial carriers that back large property owners and real estate operators across Pinellas County. The firm presents demands backed by documented evidence and does not treat the carrier's opening position as a reasonable midpoint. Families receive honest guidance about every offer, and no settlement is accepted without the client's fully informed decision.",
    },
    {
      icon: MapPin,
      title: "Proven Litigation Experience in Complex Wrongful Death Cases",
      description: "When an insurer decides that the cost of defending the case is lower than paying what the family deserves, Carter Injury Law takes it to court. Attorney David Carter has stood in front of Florida juries and come back with results. Families are never pushed toward a settlement that falls short simply because the firm wants to avoid the work of a trial.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Why Choose Carter Injury Law
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            Why Largo Families Choose Our Law Firm During Their Darkest Hours
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Choosing legal representation after a fatal accident is not a decision that should be made under pressure or by default. These are the reasons Largo and Pinellas County families have specifically chosen Carter Injury Law when the case is this serious and the stakes are this high.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-7 space-y-6">
            {reasons.map((item, idx) => {
              const IconComp = item.icon;
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
                    <IconComp className="w-5 h-5" />
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

          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl bg-slate-900 border border-gray-100 h-[500px]">
              <Image
                src={getSeoImage("local-representation", "premises-liability-wrongful-death-lawyer-largo").filePath}
                alt="Why Largo Families Choose Our Law Firm"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-8 text-white">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Dedicated & Responsive
                </p>
                <p className="text-lg font-bold leading-snug">
                  Personal Attention Throughout the Legal Process
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
