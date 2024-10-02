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
      { title: "Our team", slug: "/out-team" },
      { title: "About", slug: "/about" },
      { title: "Testimonials", slug: "/testimonials" },
      { title: "FAQs", slug: "/faqs" },
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
    <section className={""}>
      <div className="bg-gradient-to-r from-[#1E2538]  to-primary  border-b-1">
        <div className="flex  container">
          <div
            className="w-[68%]
           border-t-[100px] border-t-[#1E2538]
           border-r-[50px] border-r-transparent
           relative"
          >
            <div className="absolute top-0 bottom-0 -mt-20 text-white">
              <div className=" flex items-center gap-x-8">
                <Image
                  src="/assets/site-logo/logo.png"
                  alt="footer logo"
                  width={500}
                  height={500}
                  className=""
                />
                <Image
                  src="/assets/shared/achievement.png"
                  alt="footer logo"
                  width={400}
                  height={500}
                  className=""
                />
              </div>
            </div>
          </div>

          <div className="w-[32%] flex items-center justify-end">
            <div className="flex items-center gap-x-10">
              <div className="">
                <h2 className="text-white font-bold text-2xl">
                  Call US <br />
                  24/7{" "}
                </h2>
              </div>
              <div className="">
                <h6 className="text-white font-medium text-lg">
                  Free Confidential case Evaluation
                </h6>
                <h2 className="text-white font-bold text-3xl">
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
            <div className="flex items-center justify-end gap-x-16">
              {menuItems.map((el) => (
                <Link
                  key={el.slug}
                  href={el.slug}
                  className={`nav-item text-md md:text-[16px] font-medium uppercase ${pathname === el.slug ? " border-b-2 border-white" : ""} hover:text-white`}
                >
                  {el.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            className={`!mx-0 !px-0 pb-0 pt-2 md:pb-3 md:pt-4 fixed top-0 transition-colors duration-300 ${navbarColor || pathname !== "/" ? "!bg-secondary shadow-small" : "bg-transparent"}`}
          >
            <NavbarContent>
              <NavbarBrand>
                <Link href="/">
                  <h2
                    className={`font-semibold text-[30px] ${orbitron.className}`}
                  >
                    Arjo Neel
                  </h2>
                </Link>
              </NavbarBrand>
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden"
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
