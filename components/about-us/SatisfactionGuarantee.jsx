import React from "react";
import SectionLayout from "../shared/SectionLayout";

const SatisfactionGuarantee = () => {
  return (
    <div className="mt-10 lg:mt-14 ">
      <div bg="container w-full lg:max-w-[60%] mx-auto pb-2">
        <h1
          className={`text-stone-950 !font-semibold text-3xl md:text-5xl mt-10 lg:mt-20  text-center  uppercase`}
        >
          30-Day No-Fee Satisfaction Guarantee
        </h1>
      </div>
      <SectionLayout>
        <div>
          <p className="text-base lg:text-xl font-medium mb-4">
            We’re so confident you’ll be satisfied with our personal injury
            services that we offer a “30-Day No-Fee Satisfaction Guarantee.”
            This means that within the first 30 days, if you decide not to move
            forward with us or that you’d like to hire a different attorney, you
            won’t owe us any attorney fees.
          </p>
          <p className="text-base lg:text-xl font-medium mb-4">
            That’s right – zero! We believe that you will quickly see our
            dedication to clear communication, client care, and aggressive
            advocacy, and we want you to feel completely comfortable with your
            decision to hire us. This guarantee reflects our commitment to your
            satisfaction and our belief in the high-quality service and results
            we provide.
          </p>
          <p className="text-base lg:text-xl font-medium mb-4">
            The “30-Day No-Fee Satisfaction Guarantee” does not include
            reasonable investigative costs, but you will never get a bill for
            attorney’s fees from us if you decide to terminate our services
            within the first 30 days for any reason.
          </p>
        </div>
      </SectionLayout>
    </div>
  );
};

export default SatisfactionGuarantee;
