"use client";
import React from "react";
import SectionLayout from "./SectionLayout";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const FAQ = () => {
  return (
    <SectionLayout bg="py-4 lg:py-0">
      <div className="w-full lg:w-[80%]  mx-auto">
        <h2
          className={`text-stone-950 !font-semibold text-3xl md:text-5xl mb-5   text-center uppercase`}
        >
          FAQ
        </h2>

        <Accordion className="w-full" dividerProps={"border-red"}>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                WHEN DO I NEED A FLORIDA PERSONAL INJURY LAWYER?
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              David Carter is a skilled personal injury lawyer with [number]
              years of experience, dedicated to helping clients recover
              compensation for accidents, medical malpractice, and wrongful
              death cases. Compassionate and results-driven.
            </p>
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                HOW MUCH DOES A FLORIDA CAR CRASH LAWYER COST?
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              David Carter is a skilled personal injury lawyer with [number]
              years of experience, dedicated to helping clients recover
              compensation for accidents, medical malpractice, and wrongful
              death cases. Compassionate and results-driven.
            </p>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                HOW DO I KNOW WHAT MY CASE IS WORTH?
              </span>
            }
            className="text-lg text-[#4A4A4A]   "
          >
            <p>
              David Carter is a skilled personal injury lawyer with [number]
              years of experience, dedicated to helping clients recover
              compensation for accidents, medical malpractice, and wrongful
              death cases. Compassionate and results-driven.
            </p>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                PERSONAL INJURY PROTECTION COVERAGE
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              David Carter is a skilled personal injury lawyer with [number]
              years of experience, dedicated to helping clients recover
              compensation for accidents, medical malpractice, and wrongful
              death cases. Compassionate and results-driven.
            </p>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                CONSULT AN EXPERIENCED INJURY LAWYER
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              David Carter is a skilled personal injury lawyer with [number]
              years of experience, dedicated to helping clients recover
              compensation for accidents, medical malpractice, and wrongful
              death cases. Compassionate and results-driven.
            </p>
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion 6"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                AFTER YOUR FLORIDA CAR ACCIDENT
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              David Carter is a skilled personal injury lawyer with [number]
              years of experience, dedicated to helping clients recover
              compensation for accidents, medical malpractice, and wrongful
              death cases. Compassionate and results-driven.
            </p>
          </AccordionItem>
          <AccordionItem
            key="7"
            aria-label="Accordion 7"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                CLAIM TIMELINE
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p>
              David Carter is a skilled personal injury lawyer with [number]
              years of experience, dedicated to helping clients recover
              compensation for accidents, medical malpractice, and wrongful
              death cases. Compassionate and results-driven.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </SectionLayout>
  );
};

export default FAQ;
