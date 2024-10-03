import React from "react";
import SectionLayout from "./SectionLayout";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";

const PracticeAreasSection = () => {
  return (
    <div>
      <SectionLayout>
        <div className="w-full lg:max-w-[60%] mx-auto">
          <h2
            className={`text-stone-950 !font-semibold text-3xl md:text-5xl mb-5 lg:mb-10  text-center uppercase`}
          >
            PRACTICE AREAS
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8  h-full text-center">
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="p-8 rounded-2xl border-1 border-[#] flex flex-col gap-3 h-full">
              <Link
                href={`/areas-of-practice/tampa-bay-auto-accidents-lawyer`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Tampa Bay Auto Accidents Lawyer
              </Link>

              <Link
                href={`/areas-of-practice/auto-accident-personal-injury-litigation`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Auto Accident Personal Injury Litigation
              </Link>
              <Link
                href={`/areas-of-practice/delivery-truck-accidents`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Delivery Truck Accidents
              </Link>
              <Link
                href={`/areas-of-practice/boating-accidents`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Boating Accidents
              </Link>
              <Link
                href={`/areas-of-practice/boating-accidents`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                RV Accidents
              </Link>
              <Link
                href={`/areas-of-practice/airline-injuries`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Airline Injuries
              </Link>
              <Link
                href={`/areas-of-practice/uber-and-lyft-accidents`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Uber & Lyft Accidents
              </Link>
            </div>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="p-8 rounded-2xl border-1 border-[#] flex flex-col gap-4 h-full">
              <Link
                href={`/areas-of-practice/tampa-bay Truck Accident Lawyer`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Tampa Bay Truck Accident Lawyer
              </Link>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Motorcycle Accidents
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                DUI Injuries
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Bicycle Accidents
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Catastrophic Injuries
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Motorist Insurance Claims Litigation
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Pedestrian Personal Injury Litigation
              </a>
            </div>
          </ScrollMotionEffect>
          <ScrollMotionEffect effect="fade-up" duration="2000">
            <div className="p-8 rounded-2xl border-1 border-[#] flex flex-col gap-4 h-full">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Tampa Bay Personal Injury Lawyer
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Pain & suffering Personal Injury Litigation
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Plastic Surgery Personal Injury Litigation
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Slip And Fall Personal Injury Litigation
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Wrongful Personal Injury Litigation
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Dog Bites Personal Injury Litigation
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Premises Liability Personal Injury Litigation
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-[#CE2523] hover:text-black duration-500"
              >
                Medical Malpractice Personal Injury Litigation
              </a>
            </div>
          </ScrollMotionEffect>
        </div>
      </SectionLayout>
    </div>
  );
};

export default PracticeAreasSection;
