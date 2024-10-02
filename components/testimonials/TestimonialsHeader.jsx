import Image from "next/image";
import React from "react";
import HeaderForm from "../shared/HeaderForm";

const TestimonialsHeader = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/shared/testimonials-bg.png"
        alt="testimonials Bg"
        width={2400}
        height={1240}
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h2
          className={`text-white !font-semibold text-3xl md:text-5xl lg:text-[80px]  text-center uppercase drop-shadow-[1px_0_10px_#000000]`}
        >
          Testimonials
        </h2>
      </div>
      {/* <div className="absolute w-full max-w-[530px] -bottom-[22%] right-[11%] bg-white rounded-[22px]">
        <div className="text-center">
          <h1 className=" text-[96px] font-bold text-[#EC1D21] leading-none">
            DON’T GO
          </h1>
          <h1 className=" text-[100px] font-bold text-[#EC1D21] leading-none">
            IT ALONE
          </h1>
          <span className=" text-[22px] font-bold text-">
            FREE CONFIDENTIAL CASE EVALUATION
          </span>
        </div>
        <div className="rounded-2xl p-2 bg-[#0D3E8A] mt-2 shadow-2xl">
          <div className="bg-white p-4 rounded-xl border-5 border-[#1E2538] shadow-2xl">
            <form className="max-w-md mx-auto">
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#0D3E8A] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-lg font-medium text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0D3E8A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                  >
                    Name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#0D3E8A] peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-lg font-medium text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0D3E8A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                  >
                    Phone
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#0D3E8A] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-lg font-medium  text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#0D3E8A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <textarea
                  id="message"
                  rows="4"
                  type="password"
                  name="floating_password"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#0D3E8A] peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-lg font-medium text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#0D3E8A]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
                >
                  How may we help you?
                </label>
              </div>

              <div className=" text-center">
                <button
                  type="submit"
                  className="text-white bg-[#EC1D21] hover:bg-[#E40004] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-lg w-full sm:w-auto px-10 py-2.5 text-center uppercase space-x-4 tracking-[.3em] "
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <div>
        <HeaderForm className="bg-white" />
      </div>
    </div>
  );
};

export default TestimonialsHeader;
