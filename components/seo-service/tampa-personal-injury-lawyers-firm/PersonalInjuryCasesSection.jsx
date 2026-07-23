"use client";
import React from "react";
import { 
  Car, Truck, Bike, Footprints, Navigation, Smartphone, 
  ShieldAlert, Home, Construction, Stethoscope, Heart, 
  Anchor, Activity, Brain, Bone, Scale, ChevronRight 
} from "lucide-react";
import { motion } from "framer-motion";

const cases = [
  {
    icon: Car,
    title: "Car Accidents",
    body: "Auto accidents are the most commonly filed personal injury claims in Hillsborough County today for victims. Collisions produce injuries ranging from whiplash to traumatic brain injuries and permanent disability for our clients. As a reputable tampa personal injury lawyers firm, we build cases that reflect the full economic and personal cost of your specific injuries.",
  },
  {
    icon: Truck,
    title: "Truck Accidents",
    body: "Collisions involving semi trucks cause devastating injuries that smaller vehicle crashes rarely match in severity daily. These cases involve federal motor carrier regulations and driver qualification records and maintenance logs for trucks. Our tampa personal injury lawyers firm has the resources to pursue these complex claims for you.",
  },
  {
    icon: Bike,
    title: "Motorcycle Accidents",
    body: "Motorcyclists involved in crashes face serious injury risks that conventional vehicle occupants do not face daily. We advocate without compromise for full and fair compensation for every motorcycle rider in Tampa.",
  },
  {
    icon: Footprints,
    title: "Pedestrian Accidents",
    body: "Pedestrians struck by motor vehicles face some of the most severe injury outcomes of accidents today. These cases often involve disputes about crosswalk compliance and driver inattention and road design safety.",
  },
  {
    icon: Navigation,
    title: "Bicycle Accidents",
    body: "Cyclists sharing roads face serious exposure when drivers fail to yield or pass too closely daily. We handle these claims by securing witness accounts and presenting a complete damages picture today.",
  },
  {
    icon: Smartphone,
    title: "Uber and Lyft Accidents",
    body: "Rideshare accidents involve multiple overlapping insurance policies that apply differently depending on the status of drivers. Our attorneys are experienced in navigating Uber and Lyft insurance structures for your maximum recovery.",
  },
  {
    icon: ShieldAlert,
    title: "Slip and Fall Accidents",
    body: "Property owners owe a legal duty of care to lawful visitors on their premises in Tampa. When wet floors or broken steps cause a fall the owner may be liable today. We represent slip and fall victims throughout Tampa daily.",
  },
  {
    icon: Home,
    title: "Premises Liability Claims",
    body: "Premises liability covers a range of property injuries beyond simple slip and fall incidents for victims. If unsafe property conditions caused your injury a valid liability claim likely exists for you.",
  },
  {
    icon: ShieldAlert,
    title: "Dog Bite Injuries",
    body: "Florida law holds dog owners strictly liable for bites that cause injury to people in Tampa. Attacks produce serious lacerations, nerve damage, and lasting psychological trauma for the victim involved.",
  },
  {
    icon: Construction,
    title: "Workplace and Construction Accidents",
    body: "Tampa construction generates a significant volume of serious injury claims for workers each year in the city. Third party claims against contractors often produce substantially higher recoveries than workers compensation alone.",
  },
  {
    icon: Stethoscope,
    title: "Medical Malpractice Claims",
    body: "When a healthcare provider fails to meet the standard of care the consequences are severe today. These cases require specialized legal knowledge and qualified medical expert testimony for successful case outcomes.",
  },
  {
    icon: Heart,
    title: "Nursing Home Abuse and Neglect",
    body: "Elderly residents have the right to safe and dignified care in nursing facilities throughout Tampa daily. When facilities fail to provide adequate staffing they bear legal responsibility for the harm caused.",
  },
  {
    icon: Anchor,
    title: "Boating Accidents",
    body: "Tampa Bay waterways attract significant recreational boating activity throughout the entire year. Operator negligence and intoxication cause accidents. We handle boating injury and wrongful death claims.",
  },
  {
    icon: Activity,
    title: "Catastrophic Injury Claims",
    body: "Catastrophic injuries fundamentally change every aspect of a victim's life and their future plans forever. Extensive rehabilitation and permanent care requirements must be accounted for.",
  },
  {
    icon: Brain,
    title: "Traumatic Brain Injuries",
    body: "Traumatic brain injuries range from concussions to closed head injuries that alter cognitive function permanently. We work with neurological experts to document the impact of your brain injury.",
  },
  {
    icon: Bone,
    title: "Spinal Cord Injuries",
    body: "Spinal cord damage produces paralysis requiring lifelong medical management and expensive personal care. Our attorneys work with medical economists to calculate the complete financial impact.",
  },
  {
    icon: Scale,
    title: "Wrongful Death Claims",
    body: "When someone loses their life because of negligence the family has a legal right for justice. Recoverable damages include funeral costs and lost financial support and loss of guidance for families.",
  },
];

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 25 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const PersonalInjuryCasesSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[13px] font-extrabold tracking-widest text-primary uppercase block mb-4">
            Practice Areas
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-secondary leading-[1.15] tracking-tight">
            Personal Injury Cases Our <br />
            <span className="text-primary">Tampa Law Firm Handles</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Carter Injury Law represents clients across a wide range of personal injury matters in Tampa now. Each case brings unique legal challenges and our team applies the right strategy for you.
          </p>
        </motion.div>

        {/* 17 Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-[#faf9f6] rounded-[20px] border border-gray-100 p-6 md:p-8 flex flex-col justify-between hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <h3 
                      className="text-base md:text-lg font-extrabold text-secondary tracking-tight group-hover:text-primary transition-colors duration-200"
                      style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif' }}
                    >
                      {c.title}
                    </h3>
                  </div>
                  <div className="w-full h-px bg-gray-200/60 mb-4" />
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {c.body}
                  </p>
                </div>

                <div 
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="mt-6 flex items-center gap-1.5 text-primary text-[10px] font-extrabold uppercase tracking-wider cursor-pointer group-hover:underline"
                >
                  <span>Request Consultation</span>
                  <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2.5} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default PersonalInjuryCasesSection;
