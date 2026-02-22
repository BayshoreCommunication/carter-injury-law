import Image from "next/image";
import React from "react";

export default function MedicalFinancialSection() {
  return (
    <section className="px-4 md:px-8 py-12">
      
      <div className="">
        
        {/* Top Image */}
        <div className="relative w-full  rounded-lg overflow-hidden mb-10">
          <Image
            src="/assets/service/medical.png" 
            alt="Carter Injury Law Office"
            width={1000}
            height={800}
            className="object-cover w-full"
            priority
          />
        </div>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold mb-4 text-black">
          Medical Documentation That Strengthens Your Case
        </h2>

        <div className="text-[15px] leading-[1.9] text-gray-700 space-y-5">
          <p>
            Medical documentation is the backbone of any successful injury claim.
            Without clear, consistent records, even legitimate injuries can be
            questioned. A lawyer works closely with medical providers to ensure
            that records accurately reflect diagnosis, treatment, and prognosis.
            This includes emergency care, follow-up visits, imaging studies,
            physical therapy notes, and specialist evaluations.
          </p>

          <p>
            In Florida injury cases, insurers often scrutinize gaps in treatment
            or vague medical notes. An attorney helps prevent these issues by
            advising clients on the importance of following treatment plans and
            by requesting detailed records that connect injuries directly to the
            crash. Narrative reports from treating physicians can explain
            causation, severity, and long-term limitations in a way that raw
            charts cannot.
          </p>

          <p>
            Strong documentation also captures how injuries affect daily life.
            Pain levels, reduced mobility, sleep disruption, and inability to
            perform work duties all matter. When these details are properly
            recorded, they support claims for noneconomic damages such as pain
            and suffering. An auto accident attorney translates medical language
            into legal evidence that insurers and juries understand and respect.
          </p>
        </div>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold mt-12 mb-4 text-black">
          Calculating Long-Term Financial Impact
        </h2>

        <div className="text-[15px] leading-[1.9] text-gray-700 space-y-5">
          <p>
            The true cost of a serious crash often reveals itself over time.
            Initial bills may be only a fraction of the financial impact.
            An attorney looks ahead, calculating long-term medical expenses,
            future procedures, medication, assistive devices, and rehabilitation.
            For working clients, this also includes lost income and reduced
            earning capacity.
          </p>

          <p>
            In more severe cases, Carter Injury Law works with economists,
            vocational experts, and life care planners to project future needs.
            These projections are grounded in medical opinions and employment
            data, making them difficult for insurers to dismiss. A personal
            injury lawyer uses these calculations to demand compensation that
            reflects reality, not optimism.
          </p>

          <p>
            By addressing long-term financial consequences early, the legal
            strategy avoids settlements that feel adequate now but fall short
            later. The goal is stability, not short-term relief. With careful
            analysis and experienced advocacy, compensation supports recovery
            and protects the future long after the case is closed.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-[#1E2538] rounded-2xl p-8 text-center text-white">
          
          <h3 className="text-md tracking-widest uppercase mb-6 text-gray-300">
            Contact Our Injury Attorneys in St. Petersburg, FL
          </h3>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <button className="bg-[#ED1B24] hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold">
              FREE CASE CONSULTATION
            </button>

            <button className="bg-[#0D3E8A] hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold">
              📞 (813) 536-3437
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}