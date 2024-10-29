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
      { title: "Areas of practice", slug: "/" },
      { title: "Our team", slug: "/our-team" },
      { title: "About", slug: "/about-our-firm" },
      { title: "Testimonials", slug: "/testimonials" },
      { title: "FAQs", slug: "/faq" },
      { title: "Blog", slug: "/blog" },
      { title: "Contact", slug: "/contact" },
    ],
    []
  );

  const navLogoList = useMemo(
    () => [{ title: "Areas of practice", url: "" }],
    []
  );

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
                    className="cursor-pointer w-[400px]  h-auto"
                  />
                </Link>
                <Image
                  src="/assets/shared/achievement.png"
                  alt="footer logo"
                  width={400}
                  height={500}
                  className="hidden lg:block  lg:w-[240px] xl:w-[400px] 2xl:w-[400px] h-auto mx-auto "
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
        <div className="container py-5 hidden md:block">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-end gap-x-8  xl:gap-x-16">
              {menuItems.map((el) => (
                <Link
                  key={el.slug}
                  href={el.slug}
                  className={`cursor-pointer nav-item text-md md:text-[16px] font-medium uppercase ${pathname === el.slug ? " border-b-2 border-white" : ""} hover:text-white`}
                >
                  {el.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden ">
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`!mx-0 !px-0 pb-0 pt-0  md:pb-3 md:pt-4 bg-primary`}
          >
            <NavbarContent>
              <NavbarBrand>
                <Link href="/">
                  <Image
                    src="/assets/site-logo/logo.png"
                    alt="footer logo"
                    width={500}
                    height={500}
                    className="w-[300px] h-auto"
                  />
                </Link>
              </NavbarBrand>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden text-white"
              />
            </NavbarContent>

            <NavbarMenu className="overflow-hidden">
              {menuItems.map((el, index) => (
                <NavbarMenuItem key={el.slug} className="flex flex-row">
                  <Link
                    className={`w-full text-black text-center !text-xl font-medium py-1 ${pathname === el.slug ? "!text-primary" : ""} ${index === 0 ? "mt-6" : ""}`}
                    href={el.slug}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {el.title}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
        </div>
      </div>
    </section>
  );
};

export default React.memo(MainNavbar);
