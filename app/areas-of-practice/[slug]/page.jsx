// import PracticeAreaHeader from "@/components/practice-area/PracticeAreaHeader";
// import PracticeAreaMain from "@/components/practice-area/PracticeAreaMain";
// import CallToAction from "@/components/shared/CallToAction";
// import Head from "next/head";
// import React from "react";

// const page = () => {
//   return (
//     <>
//       <Head>
//         <title>Practice Areas - Carter Injury Law</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta
//           name="description"
//           content={`At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients.`}
//         />
//       </Head>
//       <PracticeAreaHeader />
//       <PracticeAreaMain />
//       <CallToAction />
//     </>
//   );
// };

// export default page;

import React from "react";
import parse from "html-react-parser";
import { Link } from "@nextui-org/react";
import SectionLayout from "@/components/shared/SectionLayout";
import Head from "next/head";
import { notFound } from "next/navigation";
import PracticeAreaHeader from "@/components/practice-area/PracticeAreaHeader";
import { allServiceData } from "@/config/serviceData";
import PracticeAreaSidebarCard from "@/components/practice-area/PracticeAreaSidebarCard";
import PracticeAreaDetailsHeader from "@/components/practice-area/PracticeAreaDetailsHeader";

const css = `
  h1{
    font-size: 40px;
    font-weight: 900;
    padding-top: 10px;
  }
  h2{
    padding-top: 10px;
    font-size: 26px;
    font-weight: 700;
  }
  p{
    padding-top: 2px;
    padding-bottom: 2px;
  }
  ul{
    list-style-type: disc;
    margin-left: 30px;
    
  }
  li{
    padding-top: 5px;
    padding-bottom: 5px;
  }
  br{
    padding-top: 1px;
    padding-bottom: 1px;
}
nav{
  padding-top: 12px;
}

`;

const page = async ({ params }) => {
  const servicesDetails = allServiceData?.filter(
    (service) => service.slug === params.slug
  );

  if (!servicesDetails || servicesDetails.length === 0) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{servicesDetails[0]?.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
      </Head>
      <style>{css}</style>
      <PracticeAreaDetailsHeader title={servicesDetails[0]?.title} />
      <div>
        <SectionLayout bg="bg-white">
          <div className="grid gap-16 gird-col-1 sm:grid-cols-3">
            {servicesDetails?.map((services, index) => (
              <div className="col-span-2">
                <div className="mt-5 text-base">{parse(services?.details)}</div>
                {/* ============ Practice Area Details =========== */}
                {/* <div className="w-full flex flex-col gap-2 lg:gap-4">
                  <h2 className="text-stone-950 font-semibold text-3xl md:text-4xl lg:text-5xl">
                    Death Claims
                  </h2>
                  <img
                    src="/assets/servicepage/workers-compensation/death-claims.jpg"
                    alt="Overexertion and Overuse Injuries "
                    className="w-full py-3"
                  />
                  <p className="text-base md:text-lg">
                    The loss of a loved one is always a tragic experience, but
                    when their death is caused by someone else’s negligence or
                    wrongful actions, the grief can feel even more unbearable.
                    In Florida, surviving family members may have the option to
                    pursue a wrongful death claim to seek justice and
                    compensation for their loss. A wrongful death claim is a
                    civil lawsuit filed when a person’s death is caused by
                    another party’s negligence, misconduct, or reckless
                    behavior.
                  </p>
                  <div>
                    <p className="text-base md:text-lg font-bold mb-1 pl-5">
                      Who Should File a Claim and Why Having an Attorney Is
                      Essential
                    </p>
                    <p className="text-base md:text-lg">
                      <ul className="list-disc pl-5">
                        <li>
                          <span className="font-bold pr-1">
                            Benefits of Filing:
                          </span>
                          Surviving family members who were financially
                          dependent on the deceased or who suffered emotional
                          distress from their loss can benefit from a wrongful
                          death claim. This includes spouses, children, parents,
                          and sometimes other close relatives.
                        </li>

                        <li>
                          <span className="font-bold pr-1">
                            Consequences Without Representation:
                          </span>
                          Without the guidance of an experienced attorney, the
                          process of filing a wrongful death claim can be
                          challenging.In Florida, the statute of limitations for
                          death claims, such as wrongful death, is governed by
                          Florida Statutes § 95.11(4). This statute sets a time
                          limit of two years from the date of death to file a
                          wrongful death lawsuit.
                        </li>
                        <p>
                          The legal complexities, tight deadlines, and emotional
                          strain of managing the process can lead to missed
                          opportunities for compensation. An attorney ensures
                          that the case is properly handled, helping secure fair
                          compensation for the loss and easing the burden during
                          a difficult time.
                        </p>
                      </ul>
                    </p>
                  </div>
                  <div>
                    <p className="text-base md:text-lg font-bold mb-1 pl-5">
                      Carter Injury Law: Committed to Securing the Justice You
                      Deserve
                    </p>
                    <p className="text-base md:text-lg">
                      <ul className="list-disc pl-5">
                        <li>
                          We provide clear, step-by-step assistance in filing
                          your claim and making sure you meet all deadlines,
                          including the two-year statute of limitations.
                        </li>

                        <li>
                          We will carefully assess the details of your case to
                          help you understand the potential damages you may be
                          entitled to, including medical bills, funeral
                          expenses, and lost wages.
                        </li>

                        <li>
                          We fight for the compensation you deserve, whether
                          through negotiation or in-court representation.
                        </li>

                        <li>
                          With our no-win, no-fee policy, you can focus on
                          healing and taking care of your family, while we
                          handle the legal side without any upfront costs.
                        </li>
                      </ul>
                    </p>
                  </div>
                </div> */}
                {/* ============ Practice Area Details =========== */}
              </div>
            ))}
            {/* =========== PracticeAreaSidebarCard =================== */}
            <div className="hidden md:block">
              <PracticeAreaSidebarCard allServiceData={allServiceData} />
            </div>
          </div>
        </SectionLayout>
      </div>
    </>
  );
};

export default page;
