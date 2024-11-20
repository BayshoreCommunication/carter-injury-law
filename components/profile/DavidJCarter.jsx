"use client"; // Explicitly mark this component as client-side

import React from "react";
import SectionLayout from "../shared/SectionLayout";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";
import Link from "next/link";

const DavidJCarter = () => {
  return (
    // <div className="shadow-[rgba(0,0,0,0.15)_0px_13px_25px] mb-16">
    <div className="mb-16">
      <SectionLayout>
        <div className="flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-20 items-center">
            <div className="w-full md:w-[60%]">
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <div className="mb-6">
                  <h2 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-1 lg:mb-2 ">
                    David Carter
                  </h2>
                  {/* <h4 className="text-stone-800 !font-semibold text-xl md:text-3xl mb-1 lg:mb-3 ">
                    Over Years of Experience
                  </h4> */}
                  <p className=" text-base md:text-xl mb-3 lg:mb-6 ">
                    David Carter is a skilled personal injury lawyer with years
                    of experience, dedicated to helping clients recover
                    compensation for accidents, medical malpractice, and
                    wrongful death cases. Compassionate and results-driven.
                  </p>
                  <div className="text-white flex gap-2">
                    <Link
                      href="https://www.facebook.com/CarterInjuryLaw/"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/company/carter-injury-law/"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaLinkedinIn />
                    </Link>
                    <Link
                      href="https://x.com/CarterInjuryLaw"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      href="https://www.instagram.com/carterinjurylaw/"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaInstagram />
                    </Link>
                    <Link
                      href="https://www.youtube.com/@CarterInjuryLaw"
                      target="_blank"
                      className="inline-block p-2 rounded bg-[#EC1D21] hover:bg-white hover:text-[#EC1D21] duration-300"
                    >
                      <FaYoutube />
                    </Link>
                  </div>
                </div>

                <div className=" w-full h-1 bg-primary my-6 lg:my-8"></div>
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold mb-2 ">
                    Profile
                  </h4>
                  <p className="text-base md:text-xl ">
                    David Carter has made it his life’s work to seek justice for
                    those who have been wronged or injured. As a
                    fifth-generation attorney, David is focused on building
                    longstanding relationships with his clients and providing
                    personalized support throughout the entire case and beyond.
                    Having gained experience at several personal injury law
                    firms, including one of the nation’s largest, David founded
                    Carter Injury Law, PA with the vision of delivering big-firm
                    results to his clients while also providing a small-firm
                    feel.
                  </p>
                </div>
              </ScrollMotionEffect>
            </div>
            <div className="w-full md:w-[40%] ">
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <Image
                  src="/assets/profilepage/certer.png"
                  className="mx-auto"
                  width={500}
                  height={500}
                  alt="David Carter"
                />
              </ScrollMotionEffect>
            </div>
          </div>
          {/* Education */}

          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 ">
              Education
            </h4>
            <ul class=" space-y-1  list-disc list-outside ">
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  Jesuit High School
                </p>
                <p className="text-xm md:text-base text-gray-600"> Tampa, FL</p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  University of Florida – Bachelor of the Arts (Honors Program)
                </p>
                <p className="text-xm md:text-base text-gray-600">
                  {" "}
                  Gainesville, FL
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  Florida State University College of Law – Juris Doctor
                </p>
                <p className="text-xm md:text-base text-gray-600">
                  Graduated with Honors || Business Law Certificate, with Honors
                  || Tallahassee, FL
                </p>
              </li>
            </ul>
          </div>

          {/* Admission */}
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 ">
              Admission
            </h4>
            <ul class=" space-y-1  list-disc list-outside ">
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  State of Florida
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  US Federal Court – Middle District
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  EAGLE Member of Florida Justice Association
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  Member of Tampa Bay Trial Lawyers Association
                </p>
              </li>
            </ul>
          </div>

          {/* Awards */}
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 ">Awards</h4>
            <ul class=" space-y-1  list-disc list-outside ">
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  FSU College of Law Pro Bono Certificate
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  AV Preeminent Rated by Martindale-Hubbell
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  Super Lawyers Rising Stars
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  Avvo Clients’ Choice Award
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  Martindale-Hubbell Platinum Client Champion
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  National Trial Lawyers
                </p>
              </li>
            </ul>
          </div>
          {/* Others */}
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 ">Others</h4>
            <ul class=" space-y-1  list-disc list-outside ">
              <li className="ms-5 pb-2">
                <Link
                  href="#"
                  className="text-base lg:text-xl font-medium text-gray-950 hover:text-primary duration-300"
                >
                  Top 25 Motor Vehicle Lawyers
                </Link>
              </li>
              <li className="ms-5 pb-2">
                <Link
                  href="#"
                  className="text-base lg:text-xl font-medium text-gray-950 hover:text-primary duration-300"
                >
                  Top 10 Trucking Lawyers
                </Link>
              </li>
              <li className="ms-5 pb-2">
                <Link
                  href="#"
                  className="text-base lg:text-xl font-medium text-gray-950 hover:text-primary duration-300"
                >
                  Top 40 under 40
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default DavidJCarter;
