"use client";
import { getSeoImage } from "@/lib/seo-service-images";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, margin: "-100px" }
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CommonCausesSection = () => {
  const causes = [
    {
      number: "01",
      title: "Rollovers on Turns, Slopes and Uneven Ground",
      image: getSeoImage("dangerous-left-turn-right-turn-collisions-tampa.webp", "golf-cart-accident-lawyer-tampa").filePath,
      description: "The narrow golf carts can tip over on uneven Florida roads when making sharp turns at high speeds. Hillsides or other uncompromised areas of ground can dramatically increase the potential for dangerous rollover vehicle accidents. Excessive weight distribution on the center of gravity can cause sudden side-overs during fast/aggressive handling, resulting in the crushing of occupants. These overturns often result in victims being subjected to crushing chest trauma, severe spinal damage and complex bone fractures.",
      location: "Turns, Slopes & Uneven Ground",
    },
    {
      number: "02",
      title: "Passenger Injuries During Sudden Stops",
      image: getSeoImage("speeding-residential-neighborhoods-tampa.webp", "golf-cart-accident-lawyer-tampa").filePath,
      description: "Unrestrained passengers are sometimes thrown forward against hard surfaces inside the vehicle or onto the paved roadway, when the brakes are applied suddenly. Falls often result in serious injuries as well as dangerous ejection of passengers from carts, often due to violent impact with stationary objects. Many golf carts do not have additional safety features such as doors, side airbags or a lap belt. People landing on pavement frequently sustain both traumatic brain injury and facial lacerations along with severe road rash.",
      location: "Paved Roadways & Pathways",
    },
    {
      number: "03",
      title: "Inexperienced Drivers and Unsafe Operation",
      image: getSeoImage("drivers-failing-yield-crosswalks-tampa.webp", "golf-cart-accident-lawyer-tampa").filePath,
      description: "The lack of the proper driving skills in the handling of a vehicle usually makes unqualified drivers incapable of dealing with congested pedestrian/vehicle areas. Routine crashes involving significant personal injury are caused by careless driving, horseplay and improper vehicle operation. Younger operators frequently misjudge safe stopping distances when carrying heavy passenger loads down steep paved slopes. Distracted operation and sharp erratic wheel movements dramatically elevate the danger of losing control completely.",
      location: "Congested Pedestrian & Vehicle Areas",
    },
    {
      number: "04",
      title: "Crashes at Road Crossings and Community Entrances",
      image: getSeoImage("traffic-congestion.png", "golf-cart-accident-lawyer-tampa").filePath,
      description: (
        <>
          Golf carts face extreme dangers when entering busy public roadways or crossing multi lane suburban intersection corridors. Larger passenger automobiles frequently fail to yield right of way to slow carts entering public traffic lanes. Heavy sun glare and obstructed lines of sight at community gates severely increase intersection collision risks. Drivers of heavy passenger cars frequently misjudge the slow speed of crossing golf carts at intersections. Motorcyclists face similar roadway risks and our{" "}
          <Link href="/tampa-motorcycle-accidents-lawyer" className="text-primary hover:underline font-semibold">
            Tampa motorcycle accidents lawyer
          </Link>{" "}
          helps injured riders pursue compensation for their losses.
        </>
      ),
      location: "Road Crossings & Community Gates",
    },
    {
      number: "05",
      title: "Mechanical Defects and Poor Maintenance",
      image: getSeoImage("distracted-driving-busy-urban-areas-tampa.webp", "golf-cart-accident-lawyer-tampa").filePath,
      description: "Worn brake pads and failing steering components make golf carts completely uncontrollable during sudden traffic emergency situations. Neglected battery systems, bald tires and broken throttle linkages frequently lead to sudden loss of control. Commercial operators who defer routine mechanical maintenance create direct safety hazards for all golf cart drivers. Sudden brake failure on downhill paths often leads directly to catastrophic crashes with immovable physical obstacles.",
      location: "Downhill Paths & Roadways",
    },
    {
      number: "06",
      title: "Nighttime Crashes Caused by Limited Visibility",
      image: getSeoImage("poor-visibility-nighttime-severe-weather-tampa.webp", "golf-cart-accident-lawyer-tampa").filePath,
      description: "Inadequate headlights and missing reflective markers make golf carts nearly invisible during dark early morning or evening hours. Drivers of surrounding motor vehicles rarely spot unlit golf carts until a dangerous impact becomes totally unavoidable. Low mounted factory lights fail to illuminate road hazards adequately during nighttime operation on dark residential streets. Poor lighting conditions prevent other motorists from estimating the distance to an oncoming slow vehicle correctly.",
      location: "Residential Streets & Night Roads",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f6] py-12 md:py-16">
      <div className="max-w-[1320px] mx-auto w-full px-4 sm:px-6 md:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 
            className="text-3xl md:text-[44px] font-extrabold text-secondary tracking-tight leading-[1.15]"
          >
            Common Causes of Golf Cart Accidents <br />
            <span className="text-primary block mt-1">in Tampa</span>
          </h2>
          <div className="w-24 h-[3px] bg-primary mx-auto mt-6 mb-6" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
            Golf cart accidents are common in the residential neighborhoods, golf communities and commercial properties throughout Tampa. An extensive analysis of these harmful occurrences enables harmed victims to discover who is responsible for any damages that might have occurred.
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {causes.map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative w-full h-[220px] overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-primary text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Cause {item.number}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg md:text-xl font-extrabold text-secondary mb-3 group-hover:text-primary transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-gray-600 text-sm leading-relaxed font-medium">
                    {item.description}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 font-bold uppercase tracking-wider">
                <span>{item.location}</span>
                <span className="text-primary font-extrabold group-hover:translate-x-1 transition-transform">
                  &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default CommonCausesSection;

