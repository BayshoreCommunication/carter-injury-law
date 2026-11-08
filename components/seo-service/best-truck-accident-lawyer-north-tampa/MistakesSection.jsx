"use client";
import React from "react";
import { AlertTriangle, Clock, FileCheck, PhoneCall, Camera, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const MistakesSection = () => {
  const mistakes = [
    {
      icon: Clock,
      title: "Delaying Medical Care After the Collision",
      description: "Corporate insurance companies use gaps in medical treatment to argue your physical injuries are actually quite minor. Seek a professional medical evaluation immediately to accurately document all physical harm completely for your legal file.",
    },
    {
      icon: FileCheck,
      title: "Accepting an Insurance Settlement Before Understanding the Full Loss",
      description: "Initial corporate settlement offers rarely cover the total long term financial impact of your severe physical injuries. Accepting a fast settlement check legally bars you from ever seeking additional necessary financial compensation later.",
    },
    {
      icon: PhoneCall,
      title: "Providing Recorded Statements Without Legal Guidance",
      description: "Aggressive adjusters ask leading questions specifically designed to make you accidentally admit partial fault for the crash. You must never provide a recorded audio statement until you consult directly with your trusted legal team.",
    },
    {
      icon: Camera,
      title: "Failing to Preserve Photos, Records, and Accident Evidence",
      description: "Clear photographs of the accident scene and vehicle damage serve as undeniable physical proof for your case. Please keep all medical receipts and related vehicle repair documents extremely safe for your dedicated legal file.",
    },
    {
      icon: Share2,
      title: "Discussing the Accident or Injuries on Social Media",
      description: "Corporate defense attorneys actively monitor public social media accounts to undermine serious physical injury severity claims continuously. You should keep your physical recovery journey completely private and entirely offline throughout the entire legal process.",
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
            Mistakes That Can Weaken Your North Tampa Truck Accident Claim
          </h2>

          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />

          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Certain errors made immediately following a crash can compromise your legal rights and reduce your financial recovery. The Best Truck Accident Lawyer in North Tampa can explain which mistakes may harm your claim and help you protect your right to seek compensation.
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
                className={`p-8 rounded-[20px] bg-gray-50 border border-gray-100 hover:border-red-100 hover:bg-red-50/20 transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
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

