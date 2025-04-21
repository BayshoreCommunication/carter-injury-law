"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoCall, IoCloseOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import Link from "next/link";

export default function BlogPopupDesign() {
  // const pathname = usePathname();
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const isBlogRoute = pathname === "/blog" || pathname.startsWith("/blog/");

  //   if (isBlogRoute) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // }, [pathname]);

  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const isBlogRoute = pathname === "/blog" || pathname.startsWith("/blog/");

    if (isBlogRoute) {
      timeoutId = setTimeout(() => {
        setIsVisible(true);
      }, 10000); // 10 seconds
    } else {
      // Immediately hide if not on blog route
      setIsVisible(false);
    }

    // Clear timeout if pathname changes before 10 seconds
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  // useEffect(() => {
  //   if (isVisible) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "";
  //   }

  //   return () => {
  //     document.body.style.overflow = "";
  //   };
  // }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative max-w-[600px] max-w-full rounded-md overflow-hidden shadow-lg border border-gray-300 mx-3 md:mx-0">
        {/* Top Section */}
        <div className="bg-[#0D3E8A] text-white flex relative pt-8 md:pt-20 pl-10 pr-10">
          <div className="flex-1">
            <h5 className="text-xl md:text-3xl font-bold capitalize">
              Click to start your free consultation
            </h5>
            <h6 className="!mt-1 !md:mt-2 text-[9px] md:text-base font-light tracking-wide !lg:mt-4">
              OUR TEAM IS AVAILABLE 24/7
            </h6>
          </div>
          <div className="ml-4 flex-1">
            <Image
              height={500}
              width={500}
              src="/assets/homepage/carter.png"
              alt="Consultant"
              className="w-[400px] scale-x-[-1]"
            />
          </div>
          <button
            className="absolute top-2 right-2 border border-white rounded-full p-0 md:p-1 hover:bg-gray-700"
            onClick={handleClose}
          >
            <IoCloseOutline className="size-5 text-white" />
          </button>
        </div>

        {/* Bottom Section */}
        <Link
          href="tel:+18139220228"
          className="bg-[#D12222] px-4 py-3 flex items-center justify-center space-x-2 md:space-x-4 text-white cursor-pointer "
        >
          <div className="bg-white p-2 rounded-full">
            <IoCall className="size-5 text-[#D12222]" />
          </div>
          <div>
            <h5 className="font-semibold text-base md:text-xl">
              CALL DAVID CARTER <br /> RIGHT NOW
            </h5>
            {/* <h6 className="text-xs md:text-xs underline !mt-0 !md:mt-0">
              CHAT WITH A REAL PERSON
            </h6> */}
          </div>
          <GoArrowUpRight className="size-6 text-white" />
        </Link>
      </div>
    </div>
  );
}
