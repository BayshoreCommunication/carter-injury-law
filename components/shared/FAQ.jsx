"use client";
import React from "react";
import SectionLayout from "./SectionLayout";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ScrollMotionEffect from "../motion/ScrollMotionEffect";

const FAQ = ({ toH1 }) => {
  return (
    <SectionLayout bg="py-4 lg:py-0">
      <div className="w-full lg:w-[80%]  mx-auto">
        {toH1 ? (
          <h1 className="text-stone-950 !font-semibold text-3xl md:text-5xl mb-5   text-center uppercase">
            FAQ
          </h1>
        ) : (
          <h2
            className={`text-stone-950 !font-semibold text-3xl md:text-5xl mb-5   text-center uppercase`}
          >
            FAQ
          </h2>
        )}

        <Accordion className="w-full" dividerProps={"border-red"}>
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                How much will it cost me to hire you?
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p className="mb-4">
              Great news. Hiring our law firm is completely free unless you win
              your case. We do not require a fee retainer or a cost retainer
              upfront. We pay all the costs on your case all the way through
              trial, and in the event that you are unsuccessful, you owe us
              nothing. Our fees work on what is called a “contingency basis,”
              meaning that our fee is contingent upon you getting a settlement,
              a judgment, or a money award of some kind. If that doesn’t happen,
              you owe us nothing, simple as that. Our standard fee structure is
              33.3% of any total settlement before a lawsuit is filed, and the
              fee increases to 40% of the total settlement or judgment after a
              lawsuit is filed. The fees are lower on cases against government
              agencies and go down after $1 million of recovery. We offer
              no-risk, no-obligation, free consultations to discuss your
              potential case with you. Contacting us costs you nothing and
              retaining us costs you nothing unless you win your case.
            </p>
          </AccordionItem>

          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                How long will my personal injury case take?
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p className="mb-4">
              We are going to give you a lawyer answer here, which is: “It
              depends.” The length of your case can depend on a number of
              factors, but we will give you a general timeline here using a
              motor vehicle accident case as an example. For the first month or
              so after you sign up with us, we engage in an investigation where
              we document the accident, document your injuries, gather
              information, send letters to the insurance companies letting them
              know we represent you, and eventually find out how much insurance
              coverage there is available for your case. After that, assuming an
              ongoing injury, you will need to generally treat for about six to
              seven months, and even longer if you’re still in pain. Around that
              six to seven month mark is when we send a demand letter to the
              insurance company or defendant to try to settle the case. At that
              time, we give them 30 days to respond. So generally, between about
              eight and ten months, you know whether your case is going to
              settle or whether you might have to file a lawsuit; and then
              between ten and twelve months, you are either coming in to get
              your settlement check and sign your closing documents, or your
              case is headed to court through a lawsuit. To summarize, the
              presuit process usually takes about one year.
            </p>

            <p className="mb-4">
              If your case does end up in a lawsuit, it can take a bit longer.
              This timeline varies from court to court and county to county on
              how long it will take, but most trial courts try to have that case
              on a trial docket within two years from the date of filing the
              lawsuit. Within that time, depositions will be taken, a mediation
              will occur, and you may have to attend a medical examination with
              a doctor chosen by the defense attorney. We generally try to set
              mediation within about a year of filing your lawsuit, but other
              factors can interfere with that. Essentially, if your case ends up
              in litigation you may be looking at an additional two to three
              years to resolve your case, assuming you don’t get pushed back on
              the court docket, in which case it can take even longer. That’s
              sort of a worst-case scenario, and most of our cases do not take
              that long to resolve. We do our best to resolve your case quickly
              and efficiently for maximum compensation, but we are not afraid to
              fight for our clients in court even if that takes additional time
              and money.
            </p>
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                How much is my case worth?
              </span>
            }
            className="text-lg text-[#4A4A4A]   "
          >
            <p className="mb-4">
              Ultimately, a jury decides how much your case is worth. However, a
              number of factors go into determining and evaluating your case
              value prior to trial. Some things that your attorney and the
              insurance company may look at are:
            </p>
            <ul class=" space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400">
              <li className="ms-5 pb-3">
                <p className="mb-3">
                  Who is at fault for the accident? Whether it’s a motor vehicle
                  accident or a slip and fall incident at a grocery store, you
                  must prove that someone else’s negligence caused your
                  injuries. This is a little bit more straightforward in the
                  context of a rear-end motor vehicle accident case, for
                  example, than it is in a “he said, she said” case where two
                  people are alleging that the other ran a red light.{" "}
                </p>
                <p>
                  It can also get complicated in a slip and fall at a grocery
                  store, for example, when the grocery store is claiming that
                  they didn’t have sufficientnotice of water on the floor or
                  that the dangerous condition that caused the fall was “open
                  and obvious.” Ultimately, a jury will decide who is at fault
                  for an accident and your injuries. As you move along through
                  the case, your attorneys and the insurance company, or
                  defendant, will use their estimation of liability to help
                  determine the value of your case. If an insurance company or
                  defendant thinks that you’re at fault for your own accident,
                  they will take a reduction in the value of your case.
                  Additionally, after March of 2023, if a jury finds that you’re
                  over 50% at fault for the accident, your judgment will be
                  reduced to zero and you will receive nothing. It is important
                  that you present your case in the best light possible.
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p>
                  Photographs, videos, and other documented evidence of the
                  scene and the damage to the vehicles. How bad is it?
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p>
                  How fast did you get medical treatment? What kind of medical
                  treatment did you get? Did you go by ambulance to the
                  emergency room, did you start out at an urgent care, or did
                  you go to a chiropractor first? Did you go from the scene of
                  the accident for your first medical treatment or did it take a
                  few days, a few weeks, or maybe even a few months?
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p>
                  How much are your medical bills and are those medical bills
                  reasonable? It may seem counterintuitive, but a lot of times,
                  the more medical bills somebody has the higher the insurance
                  company or defendant is going to value that case. Do you still
                  owe all of your medical bills? Did health insurance pay any of
                  those medical bills? How much? Do you have to pay them back at
                  100% or will they take a discount? Who paid? Private health
                  insurance, Medicaid, or Medicare?
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p className="mb-3">
                  What type of medical treatment did you get? There’s kind of a
                  sliding scale between the most conservative treatment you can
                  get to the most invasive treatment you can get. Generally, the
                  more invasive the treatment, the more money the insurance
                  company or defendant is willing to pay on that case.
                  Conservative treatment is generally chiropractic therapy and
                  physical therapy.
                </p>
                <p>
                  A little bit more invasive treatment is pain management, such
                  as epidural steroid, injections, medial branch blocks,
                  radiofrequency ablations, and stem cell therapy. Finally, the
                  most invasive surgery treatments range from, at the lower end,
                  a minimally invasive surgery all the way up to a full-on
                  invasive surgery like an anterior cervical discectomy and
                  fusion, for example. An insurance company, a defendant, or a
                  jury is more likely to value a case higher depending on the
                  invasiveness of treatment needed.
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p className="mb-3">
                  How consistent were you with your medical treatment? And did
                  you follow doctors’ orders? Insurance companies and defendants
                  love to rely on what they call “gaps in treatment” in order to
                  devalue your claim. If you were injured, and if you are in
                  pain, the most important thing for your case is consistent
                  medical treatment where you try to get better and you have
                  medical records documenting your injuries and pain levels.
                </p>
                <p>
                  Without this, the insurance company or defendant is likely to
                  undercut the value of your case. The medical records will
                  reflect doctors’ orders, such as refraining from lifting
                  anything over a certain weight, getting an MRI, or following
                  up with a different doctor. If you follow the doctors’ orders,
                  it is more likely that the insurance company and the jury will
                  take your case and your injury seriously.
                </p>
              </li>

              <li className="ms-5 pb-3">
                <p>
                  Objective medical findings. What are the objective medical
                  findings in the case? These are what we call diagnostic
                  imaging studies, including x-rays, CT scans, and MRIs.
                  Although a defendant may argue that some of these findings
                  pre-dated the accident, the best evidence of what is actually
                  going on with your body is in these diagnostic imaging
                  studies. So, your attorney and the insurance company use these
                  diagnostic imaging findings to help determine the value of the
                  case and the injuries which you have sustained. These films
                  are hard evidence that, while some experts may disagree on
                  what they see, are not nearly as subjective as pain
                  complaints, for example.
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p>
                  Subjective medical findings. Subjective medical findings are
                  those which are not easily ascertainable from a diagnostic
                  test, such as a traumatic brain injury test, an MRI, or some
                  other type of tool used by doctors to document and objectively
                  document injuries. These subjective findings are what you tell
                  your doctor. Do you have pain in your left shoulder? Do you
                  have pain in your neck? Do you have pain in your lower back?
                  Do you have pain in your knees? And on a scale of 1 to 10, how
                  bad is the pain? These are subjective complaints of injury and
                  pain. They will also determine the value of your case to the
                  extent that they are consistent and long-lasting. Did you ever
                  complain about these things before the accident?
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p className="mb-3">
                  Prior accidents and injuries. If you have sustained an injury
                  in the past that is similar to the injury that you are
                  alleging in your new case, or even if you’ve just been in an
                  accident before, the insurance company and their attorneys, or
                  the defendant, will happily lean on those events to discredit
                  your case. It is vitally important that you are upfront and
                  honest with your attorney about prior injuries and accidents,
                  because inevitably the defense will find out about them. Yes,
                  they affect the value of the case. We usually disagree with
                  the defense as to the extent of the decrease in value of the
                  case due to prior injuries and accidents.
                </p>
                <p>
                  These are just some of the ways that your attorney and the
                  defense can value your case, but there are other factors, such
                  as prior felony convictions, or prior convictions for crimes
                  involving dishonesty that can affect your credibility as a
                  witness. To get a better idea of the value of your case, it is
                  better to consult with an attorney so we can consider the
                  specific facts and circumstances of your case and give you a
                  customized case opinion.
                </p>
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Accordion 4"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                Who pays my medical bills after an accident?
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p className="mb-4">
              In the context of motor vehicle accidents in Florida, the first
              person to pay your medical bills is your own automobile insurance
              company. You may have heard that Florida is a “No-Fault” state?
              What that means is that no matter who is at fault for an auto
              accident, the person to pay your own medical bills is your own
              insurance company.
            </p>
            <p className="mb-4">
              This is also called “PIP” or “Personal Injury Protection”
              coverage, which pays medical bills at 80% up to a maximum of
              $2,500 or $10,000. If you do not have your own automobile
              insurance policy, you may also qualify for this coverage through a
              vehicle in which you are a passenger or the vehicle who hit you if
              you are a cyclist or pedestrian.
            </p>
            <p className="mb-4">
              After this “PIP” coverage option is exhausted, you will look to
              several additional sources of payment for your medical bills:
            </p>
            <ul class=" space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400">
              <li className="ms-5 pb-3">
                <p>
                  Cash payments. This is money that you pay out-of-pocket for
                  medical treatments.
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p>
                  Med Pay coverage. If the “PIP” policy you used has medical
                  payments coverage, you will qualify for additional medical
                  bill payments up to the maximum of that coverage.{" "}
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p>
                  Health insurance coverage. If you have health insurance
                  coverage, some of your medical bills may be paid from this
                  source. Usually, health insurance is entitled to be reimbursed
                  from any settlement or judgment proceeds you receive.
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p>
                  Other arrangements. If you do not have health insurance and
                  you cannot afford to pay medical bills out-of-pocket, some
                  doctors may be willing to work with you on a credit plan,
                  where their bills would end up being paid out of your
                  settlement or judgment proceeds directly so you can get the
                  medical attention you need while your case is ongoing.
                </p>
              </li>
            </ul>
            <p className="mb-4">
              Ultimately, the person who is responsible for paying your medical
              bills is the defendant who negligently caused your injuries and
              their insurance company, if applicable. As you can see, satisfying
              owing and future medical bills is not such a straightforward
              matter. It is imperative that you speak with an experienced
              attorney to make sure your medical bills are paid properly
              following an accident in the correct order, from the correct
              sources to maximize your case outcome.
            </p>
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="Accordion 5"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                How long do I have to file my claim?
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p className="mb-4">
              The length of time you have to bring your claim in Florida depends
              on what type of case you have. However, for general negligence the
              statute of limitations is 2 years from the date of the accident.
              If you file a lawsuit after that date, it will likely be thrown
              out of court.
            </p>
            <p className="mb-4">
              The statutes of limitations are potentially, but not necessarily,
              different for cases against out-of-state insurance companies,
              medical malpractice cases (generally also 2 years with
              exceptions), wrongful death (generally also 2 years with
              exceptions), nursing home abuse (generally also 2 years with
              exceptions), maritime cases, aviation cases, and workers’
              compensation claims (generally also 2 years with exceptions).
            </p>
            <p className="mb-4">
              It is also important to note that many of these statutes of
              limitations changed as of March 24, 2023. If your case predates
              March 24, 2023, you may entitled to a 4-year statute of
              limitations.
            </p>
            <p className="mb-4">
              As you can see, we cannot fully answer how long you have to bring
              your claim in this post as it depends on when the claim accrued,
              when you knew or should have known about the claim, and/or what
              type of claim it is. It is vitally important that you consult with
              an attorney experienced in these matters so that you can receive a
              customized opinion on how long you have to bring your claim.
            </p>
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="Accordion 6"
            indicator={({ isOpen }) =>
              isOpen ? (
                <IoIosArrowUp color="#EC1D21" className="!rotate-90" />
              ) : (
                <IoIosArrowDown color="#EC1D21" />
              )
            }
            title={
              <span className="text-lg lg:text-2xl font-medium">
                Will my insurance go up if I make a claim?
              </span>
            }
            className="text-lg text-[#4A4A4A] "
          >
            <p className="mb-4">
              We completely understand the anxiety you may have about your own
              insurance rates going up after an accident. You may be wondering
              if you should even make a claim. This is a result of careful
              efforts made by the marketing departments of the largest insurers
              to dissuade you from making a claim and using the insurance policy
              you paid for. The reality is that your insurance may go up, and
              there is not much we can do about that. However, before you make
              your decision, consider the effects of not making a claim and what
              you could be losing out on.
            </p>
            <p className="mb-4">
              The reality is that making an auto insurance claim can lead to a
              rate increase, but it depends on several factors. Insurers often
              raise premiums after a claim because they see the driver or
              claimant as a higher risk. The amount of the increase and whether
              it applies at all depend on the type of claim (e.g., at-fault
              accident, comprehensive claim, or not-at-fault incident) and your
              specific insurance company’s policies.
            </p>
            <p className="mb-4">Here are some scenarios:</p>
            <ul class=" space-y-1 text-gray-500 list-disc list-outside dark:text-gray-400">
              <li className="ms-5 pb-3">
                <p>
                  At-Fault Claims: If you’re found at fault in an accident, it’s
                  more likely your rates will go up. Insurance companies see
                  at-fault accidents as indicators of risk.
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p>
                  Not-At-Fault Claims: Many companies don’t raise rates for
                  not-at-fault claims, but some do. It’s worth checking with
                  your insurer, as policies vary.
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p>
                  Comprehensive Claims: Claims for things like weather damage,
                  theft, or vandalism may not affect your rates as much as
                  collision claims, though some companies still raise premiums
                  slightly.
                </p>
              </li>
              <li className="ms-5 pb-3">
                <p>
                  Accident Forgiveness: If you have accident forgiveness as part
                  of your policy, your rates may not increase after your first
                  at-fault claim.
                </p>
              </li>
            </ul>
            <p className="mb-4">
              It’s always wise to assess your damage and the financial impact an
              accident may have on you before deciding whether or not to make a
              claim. An experienced attorney can walk you through your options.
              Many times, the benefit to be obtained by making an insurance
              claim outweighs the risk of a rate increase. However, sometimes
              the damage is so minimal and your deductible is so high that it
              makes more sense not to make a claim. We offer free consultations
              to help you with your decision.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </SectionLayout>
  );
};

export default FAQ;
