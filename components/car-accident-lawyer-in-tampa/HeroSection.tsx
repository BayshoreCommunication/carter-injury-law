"use client";

import { FiPhoneCall } from "react-icons/fi";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[700px] flex items-center bg-[url('/assets/car-accident/bg.png')] bg-cover bg-center bg-no-repeat">
      {/* Optional Overlay (remove if not needed) */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Main Container */}
      <div className="relative w-full max-w-[1620px] mx-auto px-8 md:px-16 py-20">
        <div className="grid lg:grid-cols-2 lg:gap-24 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:pr-8">
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#ED1B24] leading-tight">
              Car Accident <br /> Lawyer in Miami
            </h1>

            <p className="mt-6 text-gray-700 text-lg max-w-xl">
              Lorem ipsum dolor amet, consectetur adipiscing elit. Nibh
              tristique nascetur nostra convallis, senectus maximus odio. Nam
              dapibus gravida praesent dui tincidunt nulla sem.
            </p>

            <div className="mt-8">
              <p className="font-semibold text-gray-900 tracking-wide">
                FREE CONFIDENTIAL CASE EVALUATION
              </p>

              <a
                href="tel:8139220228"
                className="mt-3 inline-flex items-center gap-2 text-[#ED1B24] text-xl font-bold hover:underline"
              >
                <FiPhoneCall size={30} />
                <span className="text-[#ED1B24] text-[32px]">
                  (813) 922-0228
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="w-full max-w-[550px] lg:ml-auto lg:pl-8 mt-12 lg:mt-0">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Card Header */}
              <div className="bg-[#0D3E8A] text-white text-center py-5 text-2xl font-bold">
                FREE CASE REVIEW
              </div>

              {/* Form */}
              <form className="p-8 space-y-6">
                {/* Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone"
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="How may we help you?"
                    className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 resize-none transition"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-[#ED1B24] hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
