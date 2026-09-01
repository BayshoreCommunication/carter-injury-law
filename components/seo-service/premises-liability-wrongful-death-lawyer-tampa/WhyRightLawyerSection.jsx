"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import { ShieldAlert, Clock, Layers, Scale } from "lucide-react";
import { motion } from "framer-motion";

const WhyRightLawyerSection = () => {
  const points = [
    {
      icon: Clock,
      title: "Property Owners Begin Protecting Their Interests Immediately",
      description: "The moment a fatal accident happens on a property, the owner&apos;s commercial insurer activates. Risk managers document the scene. Adjusters take photographs. Defense attorneys get retained. All of this happens while your family is still sitting in a hospital or making funeral arrangements. Waiting even a few days without legal representation gives the other side an open runway to shape what the evidence looks like before anyone is there to push back.",
    },
    {
      icon: ShieldAlert,
      title: "Missing Maintenance Records and Inspection Reports",
      description: "Maintenance logs are some of the most revealing documents in a premises liability case. They show what the property owner knew, when they knew it, and what they chose not to do about it. Without a formal preservation demand delivered quickly, those records follow routine destruction schedules. An attorney can issue a legal hold notice that stops that clock and obligates the property owner to keep every relevant document intact.",
    },
    {
      icon: Layers,
      title: "Multiple Liable Parties Can Complicate a Claim ",
      description: "One fatal accident can involve a landlord, a management company, a maintenance contractor, a security firm, and a commercial insurance company, each with their own attorney pointing responsibility at someone else. Families navigating that without legal counsel usually end up caught in the middle of a blame loop that benefits everyone except them. Sorting out who actually owes what requires someone who has done it before.",
    },
    {
      icon: Scale,
      title: "Corporate Insurance Defense Strategies",
      description: "Commercial insurance carriers defending property owners don&apos;t approach these claims neutrally. They look for ways to reduce the payout. That might mean arguing the deceased was partly at fault, that the hazard was obvious, or that the property owner had no prior notice of the condition. These arguments can be dismantled with the right evidence and legal preparation, but they&apos;re genuinely difficult to counter without an experienced attorney in your corner.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Card & Quote */}
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
                  src={getSeoImage("Dedicated Legal Counsel Tampa Wrongful Death Claims.webp", "premises-liability-wrongful-death-lawyer-tampa").filePath}
                  alt="Why Grieving Tampa Families Need Legal Representation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
                  Immediate Protection Required
                </p>
                <p className="text-base sm:text-lg font-bold leading-snug">
                  The property owner&apos;s side is organized before a family has had time to grieve.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Text & List */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
                Legal Guidance Needed
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-secondary tracking-tight leading-tight">
                Why Grieving Tampa Families Lose Out on Justice Without Legal Representation After a Fatal Premises Liability Accident
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-4 font-medium leading-relaxed">
                Most families don&apos;t realize how quickly the deck gets stacked against them. The property owner&apos;s side is organized before a family has had time to grieve. So, the most important thing now is to understand what happens in those early hours.
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
