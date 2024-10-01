"use client";
import React, { memo } from "react";
import SectionLayout from "../shared/SectionLayout";
import HeaderForm from "../shared/HeaderForm";

const HeroSection = () => {
  const text = "Hardam Tripathi, Esq.".split(" ");

  return (
    <div
      className=" w-full"
      style={{
        backgroundImage: "url('/assets/shared/header-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "auto",
      }}
    >
      <SectionLayout bg="">
        <div className="h-[65vh] flex justify-end ">
          <HeaderForm />
        </div>
      </SectionLayout>
    </div>
  );
};

export default memo(HeroSection);
