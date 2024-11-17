import React from "react";
import SectionLayout from "./SectionLayout";
import Image from "next/image";

const AchievementSection = () => {
  return (
    <div>
      <SectionLayout bg="bg-[#1E2538]">
        {/* Mobile */}
        <div className="flex flex-col gap-6 md:hidden ">
          <div className="flex items-center gap-6 justify-evenly">
            <Image
              src="/assets/shared/achievement-1.png"
              alt="achievements"
              width={80}
              height={80}
              className="mx-auto"
            />
            <Image
              src="/assets/shared/achievement-2.png"
              alt="achievements"
              width={80}
              height={80}
              className="mx-auto"
            />
            <Image
              src="/assets/shared/achievement-3.png"
              alt="achievements"
              width={65}
              height={80}
              className="mx-auto"
            />
          </div>
          <div className="flex items-center gap-6 justify-evenly">
            <div className="w-14 h-14 flex items-center">
              <Image
                src="/assets/shared/achievement-4.png"
                alt="achievements"
                width={90}
                height={90}
                quality={100}
                className="mx-auto w-full scale-150 translate-y-0.5"
              />
            </div>
            <div className="w-14 h-14">
              <Image
                src="/assets/shared/achievement-5.png"
                alt="achievements"
                width={60}
                height={60}
                className="mx-auto w-full h-full "
              />
            </div>
            <div className="w-14 h-14">
              <Image
                src="/assets/shared/achievement-6.png"
                alt="achievements"
                width={60}
                height={60}
                className="mx-auto w-full h-full"
              />
            </div>
            <div className="w-14 h-14">
              <Image
                src="/assets/shared/achievement-7.png"
                alt="achievements"
                width={60}
                height={60}
                className="mx-auto w-full h-full"
              />
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 justify-between items-center hidden ">
          <Image
            src="/assets/shared/achievement-1.png"
            alt="achievements"
            width={167}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-2.png"
            alt="achievements"
            width={158}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-3.png"
            alt="achievements"
            width={128}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-4.png"
            alt="achievements"
            width={176}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-5.png"
            alt="achievements"
            width={130}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-6.png"
            alt="achievements"
            width={130}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
          <Image
            src="/assets/shared/achievement-7.png"
            alt="achievements"
            width={130}
            height={131}
            className="mx-auto hover:scale-110 duration-300"
          />
        </div>
      </SectionLayout>
    </div>
  );
};

export default AchievementSection;
