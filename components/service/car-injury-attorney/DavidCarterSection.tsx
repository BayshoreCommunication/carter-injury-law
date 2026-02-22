import Image from "next/image";
import React from "react";

export default function DavidCarterSection() {
  return (
    <section className="px-4 md:px-8 pb-12">
      
      <div className=" bg-[#113667] text-white rounded-lg overflow-hidden">
        
        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 gap-8">
          
          {/* Left Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4">
              David Carter
            </h2>

            <div className="text-[15px] leading-[1.9] text-gray-200 space-y-4">
              <p>
                With more than 30 years of experience, Paul specializes in
                personal injury cases, auto accidents, wrongful death, and
                medical malpractice. As a co-founder of Catania & Catania,
                alongside his brother, he earned his Bachelor of Arts degree
                from the University of South Florida and his Juris Doctor from
                Stetson University.
              </p>

              <p>
                Licensed to practice in all Florida courts, including the
                Florida Supreme Court and federal courts, this Tampa attorney
                is committed to advocating for justice in the community.
                As seen in the <span className="text-[#EC1D21] font-medium">AV Preeminent award.</span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0">
            <div className="relative w-[220px] h-[260px]">
              <Image
                src="/assets/service/catania.png" 
                alt="David Carter"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>

        {/* Bottom CTA Section */}
        <div className="bg-[#0B2E5D] px-8 py-6 flex flex-col sm:flex-row gap-4 justify-center">
          
          <button className="bg-[#EC1D21] hover:bg-red-700 transition text-white px-6 py-3 rounded-full font-semibold">
            FREE CASE CONSULTATION
          </button>

          <button className="bg-[#0D3E8A] hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-semibold">
            📞 CALL US 813-222-8656
          </button>

        </div>

      </div>
    </section>
  );
}