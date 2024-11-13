"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { LuUser2 } from "react-icons/lu";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Orbitron } from "next/font/google";
import Image from "next/image";

const orbitron = Orbitron({ subsets: ["latin"] });

// Debounce function to limit the rate of calling the handleScroll function
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
};

const MainNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const [navbarColor, setNavbarColor] = useState(false);

  const menuItems = useMemo(
    () => [
      {
        title: "Areas of Practice",
        slug: "/",
        subMenu: [
          
          {
            title: "Auto Accidents",
            slug: "auto-accidents",
            subList: [
              { title: "Car Accidents", slug: "car-accidents" },
              { title: "Motorcycle Accidents", slug: "motorcycle-accidents" },
              {
                title: "Semi-Truck and Trucking Accidents",
                slug: "semi-truck-and-trucking-accidents",
              },
              {
                title: "Bicycle Accidents",
                slug: "bicycle-accidents",
              },
              {
                title: "Pedestrian Accidents",
                slug: "pedestrian-accidents",
              },
              {
                title: "Golf Cart Accidents",
                slug: "golf-cart-accidents",
              },
              {
                title: "Uber/Lyft/Ridesharing Accidents",
                slug: "uber-lyft-ridesharing-accidents",
              },
              {
                title: "Bus Accidents",
                slug: "bus-accidents",
              },
              {
                title: "RV Accidents",
                slug: "rv-accidents",
              },
              {
                title: "Scooter Accidents",
                slug: "scooter-accidents",
              },
              {
                title: "Delivery Truck Accidents",
                slug: "delivery-truck-accidents",
              },
            ],
          },

          {
            title: "Premises Liability",
            slug: "premises-liability",
            subList: [
              { title: "Slip and Falls", slug: "slip-and-falls" },
              { title: "Trip and Falls", slug: "trip-and-falls" },
              { title: "Dog Bites", slug: "dog-bites" },
              { title: "Negligent Security", slug: "negligent-security" },
              { title: "Burn Injuries", slug: "burn-injuries" },
            ],
          },
          {
            title: "General Negligence",
            slug: "general-negligence",
            subList: [
              { title: "Boating Accidents", slug: "boating-accidents" },
              { title: "Jet Ski Accidents", slug: "jet-ski-accidents" },
              {
                title: "Airline and Aviation Injuries",
                slug: "airline-and-aviation-injuries",
              },
            ],
          },
          {
            title: "Wrongful Death",
            slug: "wrongful-death",
            subList: [
              {
                title: "Car Accident Wrongful Death",
                slug: "car-accident-wrongful-death",
              },
              {
                title: "Premises Liability Wrongful Death",
                slug: "premises-liability-wrongful-death",
              },
              {
                title: "Nursing Home Wrongful Death",
                slug: "nursing-home-wrongful-death",
              },
              {
                title: "Medical Malpractice Wrongful Death",
                slug: "medical-malpractice-wrongful-death",
              },
              {
                title: "Product Liability Wrongful Death",
                slug: "product-liability-wrongful-death",
              },
            ],
          },
          {
            title: "Medical Malpractice",
            slug: "medical-malpractice",
            subList: [
              { title: "Medication Errors", slug: "medication-errors" },
              { title: "Surgical Errors", slug: "surgical-errors" },
              { title: "Birth Injuries", slug: "birth-injuries" },
              { title: "Delayed Diagnosis", slug: "delayed-diagnosis" },
              { title: "Anesthesia Errors", slug: "anesthesia-errors" },
              { title: "Failure to Treat", slug: "failure-to-treat" },
              { title: "Failure to Diagnose", slug: "failure-to-diagnose" },
              { title: "Misdiagnosis", slug: "misdiagnosis" },
            ],
          },
          {
            title: "Nursing Home Abuse",
            slug: "nursing-home-abuse",
            subList: [
              { title: "Physical Abuse", slug: "physical-abuse" },
              {
                title: "Neglect and Abandonment",
                slug: "neglect-and-abandonment",
              },
              { title: "Sexual Abuse", slug: "sexual-abuse" },
              { title: "Financial Abuse", slug: "financial-abuse" },
            ],
          },
          {
            title: "Workers Compensation",
            slug: "workers-compensation",
            subList: [
              {
                title: "Temporary Partial Disability",
                slug: "temporary-partial-disability",
              },
              {
                title: "Cut and Burn Injuries",
                slug: "cut-and-burn-injuries",
              },
              { title: "Broken Bone Injury", slug: "broken-bone-injury" },
              { title: "Catastrophic Injuries", slug: "catastrophic-injuries" },
              {
                title: "Disability Rating Disputes",
                slug: "disability-rating-disputes",
              },
              {
                title: "Overexertion and Overuse Injuries",
                slug: "overexertion-and-overuse-injuries",
              },
              {
                title: "Death Claims",
                slug: "death-claims",
              },
            ],
          },
          {
            title: "Product Liability",
            slug: "product-liability",
            subList: [
              {
                title: "Manufacturing Defects",
                slug: "manufacturing-defects",
              },
              {
                title: "Design Defects",
                slug: "design-defects",
              },
              {
                title: "Marketing Defects and Failure to Warn",
                slug: "marketing-defects-and-failure-to-warn",
              },
              {
                title: "Defective Medical Devices",
                slug: "defective-medical-devices",
              },
              {
                title: "Defective Household Goods and Appliances",
                slug: "defective-household-goods-and-appliances",
              },
            ],
          },
        ],
      },
      {
        title: "Our team",
        slug: "our-team",
        subMenu: [
          {
            title: "David J Carter",
            slug: "david-j-carter",
          },
          { title: "Robert Johnson", slug: "robert-johnson" },
        ],
      },
      {
        title: "About",
        slug: "about",
        subMenu: [
          {
            title: "About Our Firm",
            slug: "about-our-firm",
          },
          { title: "Mission Statement", slug: "mission-statement" },
          { title: "Core Values", slug: "core-values" },
          { title: "How We Handle Cases", slug: "how-we-handle-cases" },
          { title: "The Carter Difference", slug: "the-carter-difference" },
          {
            title: "30-Day No-Fee Satisfaction Guarantee",
            slug: "30-day-no-fee-satisfaction-guarantee",
          },
        ],
      },
      { title: "Testimonials", slug: "/testimonials" },
      {
        title: "FAQs",
        slug: "/faq",
        subMenu: [
          {
            title: "Auto Accident",
            slug: "/faq",
          },
          // { title: "Car Accident", slug: "car-accident" },
          // { title: "Personal Injury", slug: "personal-injury" },
          // { title: "Airline Injuries", slug: "airline-injuries" },
          // {
          //   title: "Boating Accidents",
          //   slug: "boating-accidents",
          // },
        ],
      },
      { title: "Blog", slug: "/blog" },
      {
        title: "Contact",
        slug: "/contact",
      },
    ],
    []
  );

  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = (index) => {
    setActiveMenu(index);
    setActiveSubMenu(null);
  };

  const toggleSubMenu = (subIndex) => {
    setActiveSubMenu(subIndex);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  const handleScroll = useCallback(
    debounce(() => {
      setNavbarColor(window.scrollY >= 100);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section className={"relative z-50"}>
      <div className="bg-gradient-to-r  from-[#1E2538]  from-50% to-primary to-50% border-b-1 hidden md:block">
        <div className="flex px-4 md:px-6 2xl:px-0 2xl:container mx-auto">
          <div
            className="w-[70%] lg:w-[82%] xl:w-[82%] 2xl:w-[68%]
           border-t-[100px] border-t-[#1E2538]
           border-r-[50px] border-r-transparent
           relative"
          >
            <div className="absolute top-0 bottom-0 -mt-20 text-white">
              <div className=" flex items-center gap-x-10 2xl:gap-x-16">
                <Link href={"/"}>
                  <Image
                    src="/assets/site-logo/logo.png"
                    alt="footer logo"
                    width={500}
                    height={500}
                    className="cursor-pointer w-[400px]  h-[46px]"
                  />
                </Link>
                <Image
                  src="/assets/shared/achievement.png"
                  alt="footer logo"
                  width={400}
                  height={500}
                  className="hidden lg:block  lg:w-[240px] xl:w-[400px] 2xl:w-[400px] h-[46px] mx-auto "
                />
              </div>
            </div>
          </div>

          <div className="w-[35%] xl:w-[35%] 2xl:w-[32%] flex items-center justify-end">
            <div className="flex items-center justify-center  gap-x-8">
              <div className="hidden lg:block shrink-0">
                <h2 className="text-white font-bold text-lg 2xl:text-xxl text-center">
                  Call US <br />
                  24/7{" "}
                </h2>
              </div>
              <div className="">
                <h6 className="text-white font-medium text-[14px]  2xl:text-lg">
                  Free Confidential case Evaluation
                </h6>
                <h2 className="text-white font-semibold  text-xl xl:text-2xl 2xl:text-3xl mt-2 xl:mt-0">
                  (813) 922-0228
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div
          className="container py-2 hidden md:block h-[75px]"
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center justify-center">
            <ul className="flex space-x-14 p-4 list-none">
              {menuItems.map((menuItem, index) => (
                <li
                  key={index}
                  onMouseEnter={() => toggleMenu(index)}
                  className={`relative group cursor-pointer nav-item text-md md:text-[18px] font-medium uppercase ${
                    activeMenu === index ? "border-b-2 border-white" : ""
                  } hover:text-white`}
                >
                  <button className="flex items-center justify-between space-x-1">
                    {menuItem.subMenu ? (
                      <div className="flex items-center justify-between">
                        <span>{menuItem.title}</span>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className={`size-5 font-black transform transition-transform duration-200 text-white ${
                              activeMenu === index ? "rotate-0" : "rotate-180"
                            }`}
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </div>
                    ) : (
                      <Link href={menuItem.slug}>{menuItem.title}</Link>
                    )}
                  </button>

                  {menuItem.subMenu && activeMenu === index && (
                    <ul className="absolute top-full left-0 bg-white mt-5 rounded shadow-lg border text-lg min-w-[300px] font-semibold py-4 list-none m-0 capitalize">
                      {menuItem.subMenu.map((subMenuItem, subIndex) => (
                        <li
                          key={subIndex}
                          onMouseEnter={() => toggleSubMenu(subIndex)}
                          className="relative group border-b"
                        >
                          <button className="text-black px-4 py-2 w-full text-left">
                            {subMenuItem.subList ? (
                              <span className="flex items-center justify-between">
                                <button
                                  className={`${activeSubMenu === subIndex ? "text-red-700" : ""}`}
                                >
                                  {subMenuItem.title}
                                </button>
                                <span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className={`size-5 font-black transform transition-transform duration-200 ${
                                      activeSubMenu === subIndex
                                        ? "text-red-700 rotate-180"
                                        : "text-black rotate-90"
                                    }`}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </span>
                            ) : (
                              <Link
                                onClick={handleMouseLeave}
                                href={subMenuItem.slug}
                                className={`${activeSubMenu === subIndex ? "text-red-700" : ""}`}
                              >
                                {subMenuItem.title}
                              </Link>
                            )}
                          </button>

                          {subMenuItem.subList &&
                            activeSubMenu === subIndex && (
                              <ul className="absolute top-0 right-0 translate-x-full bg-white rounded shadow-lg border text-lg min-w-[300px] font-semibold capitalize list-none">
                                {subMenuItem.subList.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <Link
                                      onClick={handleMouseLeave}
                                      href={`/areas-of-practice/${item.slug}`}
                                      className="block py-2 px-3 text-black hover:text-red-700"
                                    >
                                      {item.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:hidden ">
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`!mx-0 !px-0 pb-0 pt-0 pl-0 ml-0  md:pb-3 md:pt-4 bg-primary list-none `}
          >
            <NavbarContent>
              <NavbarBrand>
                <Link href="/">
                  <Image
                    src="/assets/site-logo/logo.png"
                    alt="footer logo"
                    width={500}
                    height={500}
                    className="w-[300px] h-[36px] ml-0 pl-0"
                  />
                </Link>
              </NavbarBrand>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden text-white"
              />
            </NavbarContent>

            <NavbarMenu className="overflow-hidden w-full pl-0 ml-0">
              {isMenuOpen && (
                <ul className="block md:hidden space-y-2 p-4 text-black rounded  list-none w-full">
                  {menuItems.map((menuItem, index) => (
                    <li
                      key={index}
                      className="text-lg font-semibold  list-none "
                    >
                      {menuItem.subMenu ? (
                        <button
                          onClick={() => toggleMenu(index)}
                          className="w-full text-left flex items-center justify-between"
                        >
                          {menuItem.title}
                          {menuItem.subMenu && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className={`size-5 font-black transform transition-transform duration-200 ${activeMenu === index ? "rotate-180" : "rotate-0"}`}
                            >
                              <path
                                fillRule="evenodd"
                                d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </button>
                      ) : (
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          href={menuItem?.slug}
                          className="block py-1 text-black hover:text-red-500"
                        >
                          {menuItem?.title}
                        </Link>
                      )}

                      {menuItem.subMenu && activeMenu === index && (
                        <ul className="mt-2 space-y-2">
                          {menuItem.subMenu.map((subMenuItem, subIndex) => (
                            <li key={subIndex} className="list-none text-black">
                              {subMenuItem.subList ? (
                                <button
                                  onClick={() => toggleSubMenu(subIndex)}
                                  className="flex items-center justify-between w-full pl-3"
                                >
                                  {subMenuItem.title}
                                  {subMenuItem.subList && (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      fill="currentColor"
                                      className={`size-5 transform transition-transform duration-200 ${activeSubMenu === subIndex ? "rotate-180" : "rotate-0"}`}
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  )}
                                </button>
                              ) : (
                                <Link
                                  onClick={() => setIsMenuOpen(false)}
                                  href={subMenuItem?.slug}
                                  className="block py-1 text-black hover:text-red-500 pl-3"
                                >
                                  {subMenuItem.title}
                                </Link>
                              )}

                              {subMenuItem.subList &&
                                activeSubMenu === subIndex && (
                                  <ul className="mt-2 space-y-2 text-sm list-none w-full">
                                    {subMenuItem.subList.map(
                                      (item, itemIndex) => (
                                        <li
                                          key={itemIndex}
                                          className="list-none w-full"
                                        >
                                          <Link
                                            onClick={() => setIsMenuOpen(false)}
                                            href={`/areas-of-practice/${item.slug}`}
                                            className="block py-1 text-black hover:text-red-500 pl-3"
                                          >
                                            {item.title}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </NavbarMenu>
          </Navbar>
        </div>
      </div>
    </section>
  );
};

export default React.memo(MainNavbar);
