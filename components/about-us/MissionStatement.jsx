import React from "react";
import SectionLayout from "../shared/SectionLayout";

const MissionStatement = () => {
  return (
    <div className="mt-10 lg:mt-14 ">
      <div bg="container w-full lg:max-w-[60%] mx-auto pb-2">
        <h1
          className={`text-stone-950 !font-semibold text-3xl md:text-5xl mt-10 lg:mt-20  text-center  uppercase`}
        >
          Mission Statement
        </h1>
      </div>
      <SectionLayout>
        <div>
          <p className="text-base lg:text-xl font-medium mb-4">
            At Carter Injury Law, we are all about winning! Without a doubt, we
            want to win cases and maximize injury compensation; but here,
            winning is about so much more. We approach cases in a calm,
            thoughtful manner to prioritize not only client success, but also
            our team’s well-being. We believe that when our team feels
            supported, understood, and empowered, they can go above and beyond
            for our clients.
          </p>
          <p className="text-base lg:text-xl font-medium">
            Now that’s a win-win! We engage every case with gratitude,
            recognizing the privilege of helping others, and we wake up each day
            striving to make a positive impact on our community. We value
            integrity, professionalism, and respect, treating clients and
            employees as people first. We are committed to delivering
            exceptional legal care without compromising our core values. Whether
            you’re a client, a vendor, a medical provider, or a member of our
            legal team, at Carter Injury Law - You are never just a number! YOU
            are a winner!
          </p>
        </div>
      </SectionLayout>
    </div>
  );
};

export default MissionStatement;
