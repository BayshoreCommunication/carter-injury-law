import React from "react";

export default function ContactSection() {
  return (
    <>
    <section
      className="relative flex items-center justify-center bg-cover bg-center px-8 md:px-24 bg-[#1E2538]"
    >

      {/* Content */}
      <div className="relative w-full max-w-5xl text-white py-16">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact Us For a Free Case <br /> Evaluation
        </h2>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div>
              <label className="block text-sm mb-2">
                FIRST NAME <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="John"
                className="w-full bg-white text-black px-4 py-3 rounded"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                LAST NAME <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full bg-white text-black px-4 py-3 rounded"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                PHONE NUMBER <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="(XXX) XXX-XXXX"
                className="w-full bg-white text-black px-4 py-3 rounded"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">
                EMAIL <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="johndoe@info.com"
                className="w-full bg-white text-black px-4 py-3 rounded"
              />
            </div>

          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">
              PLEASE TELL US ABOUT YOUR MATTER <span className="text-red-400">*</span>
            </label>
            <textarea
              rows={6}
              placeholder="Describe Your Matter Here"
              className="w-full bg-white text-black px-4 py-3 rounded"
            ></textarea>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
            
            <p className="text-sm text-gray-300">
              REQUIRED FIELDS *
            </p>

            <div className="flex justify-center items-center">
                <button
              type="submit"
              className="bg-[#EC1D21] hover:bg-red-700 transition px-8 py-3 rounded font-semibold"
            >
              SEND MESSAGE
            </button>
            </div>

          </div>

        </form>
      </div>
      
    </section>
    {/* White Divider Line */}
      <div className="w-full h-[1px] bg-white"></div>
    </>
  );
}