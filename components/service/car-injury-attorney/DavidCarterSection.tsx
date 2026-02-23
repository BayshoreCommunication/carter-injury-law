import Image from "next/image";
import React from "react";
import { FiPhoneCall } from "react-icons/fi";

export default function DavidCarterSection() {
  return (
    <section className="px-4 md:px-8 pb-4">
  <div className="bg-[#113667] text-white rounded-lg overflow-hidden">

    {/* Content Wrapper */}
    <div className="flex flex-col lg:flex-row items-center justify-between p-5 gap-5">

      {/* Left Content */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          David Carter
        </h2>

        <div className="text-sm leading-relaxed text-slate-200 space-y-3">
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
            As seen in the <span className="text-[#EC1D21] font-medium">
              AV Preeminent award.
            </span>
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0">
        <div className="relative w-[200px] h-[230px]">
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
    <div className="bg-[#0B2E5D] px-6 py-4 flex flex-col sm:flex-row gap-3 justify-center">

      <button className="bg-[#EC1D21] hover:bg-red-700 transition text-white px-5 py-2 rounded-full font-semibold text-sm">
        FREE CASE CONSULTATION
      </button>

      <button className="bg-[#0D3E8A] hover:bg-blue-700 transition text-white px-5 py-2 rounded-full font-semibold text-sm flex items-center gap-2 justify-center">
        <a
                    href="tel:+8139220228"
                    className="inline-flex items-center gap-2 bg-[#0D3E8A] hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold text-white"
                  >
                    <FiPhoneCall size={20} />
                    (813) 922-0228
                  </a>
      </button>

    </div>

  </div>
</section>
  );
}