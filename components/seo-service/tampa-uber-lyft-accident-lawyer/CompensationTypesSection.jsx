"use client";
import React from "react";
import Link from "next/link";
import { Activity, DollarSign, Shield, Heart, Wrench, Users, FileText } from "lucide-react";
import { motion } from "framer-motion";

const CompensationTypesSection = () => {
  const types = [
    {
      icon: Activity,
      title: "Emergency Treatment, Hospitalization and Rehabilitation Expenses",
      description: "Ambulance rides and emergency room visits cost thousands. Surgeries and overnight hospital stays create massive debt. We seek funds to cover all these medical bills. Future surgeries must be included in your final demand.",
    },
    {
      icon: DollarSign,
      title: "Lost Wages and Reduced Future Earning Capacity",
      description: "Time away from work means missed paychecks. Severe injuries might force you to change careers completely. You deserve money for the income you can no longer earn. Vocational experts help us calculate these lifetime financial losses.",
    },
    {
      icon: Shield,
      title: "Continuing Care for Long-Term or Permanent Injuries",
      description: "Spinal cord damage or brain injuries require lifelong care. We hire experts to calculate future medical costs. You should not pay for someone else's mistake. In-home nursing care gets extremely expensive over a lifetime.",
    },
    {
      icon: Heart,
      title: "Physical Pain and Emotional Distress",
      description: "Car crashes cause intense physical pain and mental trauma. Nightmares and anxiety are very real crash symptoms. We fight for non-economic damages to address this suffering. Psychological injuries deserve just as much compensation as physical ones.",
    },
    {
      icon: Wrench,
      title: "Vehicle Repair Costs and Other Recoverable Property Losses",
      description: "Your wrecked car needs repairs or complete replacement. Broken phones or laptops inside the car matter too. We help you recover the value of damaged property. Property damage checks often process faster than injury claims.",
    },
    {
      icon: Users,
      title: "Wrongful Death Damages Available to Eligible Surviving Family Members",
      description: (
        <>
          Fatal crashes devastate families emotionally and financially. Surviving relatives can seek money for funeral expenses. We manage these sensitive claims with deep respect. When a fatal accident involves unsafe property conditions rather than a vehicle collision, different liability questions may arise. Our{" "}
          <Link href="/premises-liability-wrongful-death-lawyer-tampa" className="text-primary hover:underline font-semibold">
            premises liability wrongful death lawyer Tampa
          </Link>{" "}
          service addresses the legal options available to eligible families pursuing wrongful death claims involving premises liability.
        </>
      ),
    },
    {
      icon: FileText,
      title: "Supporting Compensation Requests With Medical and Financial Evidence",
      description: "Available compensation depends on liability and Florida law. Your medical records must prove the extent of injuries. Property damage claims often use different coverage provisions. Strong documentary evidence forces insurers to pay fair values.",
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-20">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest text-primary uppercase block mb-2">
            Full Value Recovery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-secondary tracking-tight leading-tight">
            The True Value of Full Compensation, Medical Expenses, Lost Income and Other Damages
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            A serious crash affects every part of your life. We demand compensation that reflects your total suffering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-gray-50/80 p-8 rounded-[20px] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-primary flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-3">
                    {item.title}
                  </h3>
                  <div className="text-gray-600 text-sm leading-relaxed font-medium">
                    {item.description}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CompensationTypesSection;

