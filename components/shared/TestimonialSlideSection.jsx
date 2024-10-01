import React from "react";
import SectionLayout from "./SectionLayout";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TestimonialSlideSection = ({ className }) => {
  return (
    <div
      className={`shadow-[rgba(0,0,0,.5)_0px_0px_30px] my-6 md:my-8 bg-white ${className}`}
    >
      <SectionLayout>
        <div className=" w-full lg:w-[80%] text-center mx-auto flex flex-col gap-6 lg:gap-10 py-10">
          {/* Testimonial content */}
          <p className="text-lg md:text-2xl lg:text-3xl font-semibold italic">
            "Words cannot express the gratitude I have for you and your team. As
            soon as you took over my case, you and your team worked diligently
            on a resolution. Thank you so much for treating me as a person and
            showing so much care. You definitely made me feel at ease that my
            case was in great hands. Thank you so much!!"
          </p>

          <div className="flex items-center gap-8 justify-center">
            {/* Left arrow */}
            <button className=" text-gray-500 hover:text-gray-800 p-3 border-1 border-gray-500 rounded-full">
              <IoIosArrowBack size={24} />
            </button>
            <div>
              {/* Star rating */}
              <div className="font-bold text-gray-800">Diane F.</div>
              <div className="flex justify-center items-center ">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <span key={index} className="text-yellow-500 text-xl">
                      &#9733;
                    </span>
                  ))}
              </div>
            </div>
            {/* Right arrow */}
            <button className=" text-gray-500 hover:text-gray-800 p-3 border-1 border-gray-500 rounded-full">
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>
      </SectionLayout>
    </div>
  );
};

export default TestimonialSlideSection;
