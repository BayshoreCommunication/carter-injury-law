import Image from "next/image";
import React from "react";
export default function UninsuredClaimSection() {
  return (
    <section className="px-4 md:px-8 py-12">
      
      {/* Left aligned container */}
      <div className="">
        
        {/* Top Image Banner */}
      <div className="relative w-full  mb-8">
        <Image
          src="/assets/service/hero-thumb.png"
          alt="Uninsured Driver Claim"
          width={1000}
          height={800}
          className="object-cover w-full"
        />
      </div>

        {/* Paragraph Content */}
        <div className="mt-8 text-gray-700 text-[15px] leading-[1.9] space-y-6">
          <p>
            There are also specialized concerns in serious crashes. Catastrophic injuries, traumatic brain injuries, spinal cord injuries, and complex fractures bring not only higher immediate costs but also a lifetime of altered needs. For those cases, the work of a car crash attorney is intensive and interdisciplinary. We assemble medical experts, rehabilitation specialists, and life care planners to construct an appropriate plan for care and to justify a long-term compensation figure. For families facing the worst outcome, wrongful death actions require both legal rigor and humane handling. We approach these cases with sensitivity, handling the complex proof and procedural rules so families can mourn and heal while their legal team presses for accountability.
          </p>

          <p>
            If you are thinking about next steps after a crash, remember that early documentation and careful legal guidance matter. A complete legal strategy begins with listening to your story, assembling the facts, and mapping the treatment plan into a compensable claim. Carter Injury Law will be straightforward about what is needed, what can be achieved, and how we will pursue that result. Our measure of success as your car injury attorney is not only a financial recovery; it is restoring a client’s stability and giving them the practical means to rebuild a life that the crash interrupted.
          </p>
        </div>

      </div>
    </section>
  );
}