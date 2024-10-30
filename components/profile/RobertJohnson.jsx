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

const RobertJohnson = () => {
  return (
    // <div className="shadow-[rgba(0,0,0,0.15)_0px_13px_25px] mb-16">
    <div className="mb-16">
      <SectionLayout>
        <div className="flex flex-col gap-6 lg:gap-10">
          <div className="flex flex-col md:flex-row gap-6 lg:gap-20 items-center">
            <div className="w-full md:w-[60%]">
              <ScrollMotionEffect effect="fade-right" duration="2000">
                <div className="mb-6">
                  <h2 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-1 lg:mb-3 ">
                    Robert Johnson
                  </h2>
                  <p className=" text-base md:text-xl mb-3 lg:mb-6 ">
                    Rob is the son of an Army Veteran who was born at Elmendorf
                    Air Force Base in Alaska.  He grew up moving from one
                    military base to another and because of that and his travels
                    later in life, he has been fortunate to visit all fifty (50)
                    states in The United States of America.  Although he moved
                    often due to his father’s military orders, he had the
                    opportunity to spend much of his young life growing up in
                    central Florida and because of that he considers Florida,
                    more specifically the Tampa Bay area, to be his home.
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
                {/* Profile */}
                <div>
                  <h4 className="text-xl md:text-2xl font-semibold mb-2 ">
                    Profile
                  </h4>
                  <p className="text-base md:text-xl mb-4">
                    Rob graduated from The University of Tampa with both a
                    Bachelor of Science in Criminology and a Bachelor of Arts in
                    Government & World Affairs. During his time at The
                    University of Tampa, Rob was very involved in service to
                    others and his community and held several leadership roles,
                    including his elected positions as Student Government
                    President and President of his fraternity.  The University
                    of Tampa is also where he met his wife Ainsley.
                  </p>
                </div>
              </ScrollMotionEffect>
            </div>
            <div className="w-full md:w-[40%]">
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <Image
                  src="/assets/profilepage/rob.png"
                  className="mx-auto"
                  width={500}
                  height={500}
                  alt="David Carter"
                />
              </ScrollMotionEffect>
            </div>
          </div>
          {/* Profile Bottom */}
          <div>
            <p className="text-base md:text-xl mb-4">
              While attending law school at Western Michigan University Thomas
              M. Cooley Law School, Rob earned his way onto the Dean’s list and
              honor roll and was the recipient of the book award for his Gaming
              Law course.  Additionally, Rob was awarded the Leadership
              Achievement Award and served as President of the Student Bar
              Association, President of the Mock Trial Board, and was a member
              of the Moot Court Board, Honor Council, Law Journal, Phi Alpha
              Delta, and Phi Delta Phi Legal Honor Society.
            </p>
            <p className="text-base md:text-xl mb-4">
              Rob’s strong work ethic is a reflection of his previous experience
              from working at one of the country’s largest personal injury law
              firms.  A passionate advocate for his clients, Rob specializes in
              all types of personal injury cases to include, but not limited to:
              auto accidents, truck accidents, slip and fall injuries, and
              wrongful death cases.
            </p>
            <p className="text-base md:text-xl mb-4">
              Rob is licensed with The Florida Bar and is eligible to practice
              in all Florida State Courts and the Federal Courts in the Southern
              and Middle Districts of Florida.  He is also a member of the
              Florida Bar Trial Lawyers Section, Florida Bar Appellate Practice
              Section, Workers Compensation Law Section, Solo & Small Firm
              Section, Animal Law Section, Florida Justice Association, Southern
              Trial Lawyers Association, Hillsborough County Bar Association and
              Tampa Bay Inn of Court (American Inn of Courts).
            </p>
            <p className="text-base md:text-xl">
              When he is not advocating for his clients, Rob enjoys traveling,
              fishing, volunteering with various local charities, attending
              concerts, cheering on Tampa Bay’s local sports teams, and spending
              time with his wife, family and friends.
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 ">
              Education
            </h4>
            <ul class=" space-y-1  list-disc list-outside ">
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2005 - Bachelor of Science, The University of Tampa
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2005 - Bachelor of Arts, The University of Tampa
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2018 - Juris Doctorate, cum laude, Western Michigan University
                  Thomas M. Cooley Law School (Tampa){" "}
                </p>
              </li>
            </ul>
          </div>

          {/* Admission */}
          <div>
            <h4 className="text-xl md:text-2xl font-semibold mb-2 ">
              Admissions and Associations
            </h4>
            <ul class=" space-y-1  list-disc list-outside ">
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2019 – Admitted into The Florida Bar{" "}
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2020 – Admitted into the Federal U.S. Middle District Court of
                  Florida{" "}
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2020 – Admitted into the Federal U.S. Southern District Court
                  of Florida{" "}
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2019 – Hillsborough County Bar Association Member (HCBA)
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2019 – Tampa Bay Inn of Court Member
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2020 – Tampa Bay Trial Lawyers’ Association Member (TBTLA)
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2021 – American Justice Association Member / Association of
                  Trial Lawyers (AAJ)
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2021 – Florida Justice Association Member (FJA)
                </p>
              </li>
              <li className="ms-5 pb-2">
                <p className="text-base lg:text-xl font-medium text-gray-950">
                  2021 – Southern Trial Lawyers Association Member (STLA)
                </p>
              </li>
            </ul>
          </div>

          {/* Awards */}
          {/* <div>
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
          </div> */}
        </div>
      </SectionLayout>
    </div>
  );
};

export default RobertJohnson;
