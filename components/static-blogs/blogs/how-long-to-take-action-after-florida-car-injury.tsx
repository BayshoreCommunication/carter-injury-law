import Link from "next/link";
import type { ReactNode } from "react";

const featuredImage =
  "/assets/static-blogs/how-long-to-take-action-after-florida-car-injury.webp";

export const howLongToTakeActionAfterFloridaCarInjury = {
  slug: "how-long-to-take-action-after-florida-car-injury",
  title: "How Long Do You Have to Take Action After a Florida Auto Injury?",
  category: "Auto Accidents",
  published: true,
  createdAt: "2026-08-17T00:00:00.000Z",
  updatedAt: "2026-08-17T00:00:00.000Z",
  shortDescription:
    "Florida law typically gives you 2 years to take legal action after an auto injury. But deadlines, PIP rules, and legal exceptions can also affect your claim.",
  metaTitle: "Florida Auto Injury Deadline You Can't Afford to Miss",
  metaDescription:
    "Florida law typically gives you 2 years to take legal action after an auto injury. But deadlines, PIP rules, and legal exceptions can also affect your claim.",
  canonicalUrl:
    "https://www.carterinjurylaw.com/blog/how-long-to-take-action-after-florida-car-injury",
  featuredImage: {
    image: {
      url: featuredImage,
    },
    altText:
      "Calendar, accident report clipboard, and calling phone in front of a car crash scene for Florida injury claim timeline.",
    title: "How Long to Take Action After a Florida Auto Injury",
    description:
      "Learn the critical deadlines and statute of limitations for taking legal action following a car accident in Florida to protect your rights and claim compensation.",
    caption:
      "Understand Florida's car accident legal deadlines to protect your rights and file your injury claim on time.",
  },
  body: "<p>If you're dealing with a crash in Florida, there are two major deadlines you need to know about. First, you have two years from the accident date to file a personal injury lawsuit. Second and more urgent, you must get medical treatment within 14 days to protect your PIP benefits. Missing these windows can seriously hurt your claim. It also bars you from recovering anything, regardless of who was at fault.</p>",
};

const keyTakeaways = [
  "Lawsuit deadline is 2 years from the accident date (Florida Statute 95.11)",
  "PIP treatment deadline is 14 days from the crash (Florida Statute 627.736)",
  "Missing either deadline usually means permanent loss of your claim",
  "A few narrow tolling exceptions exist for minors, fraud, or hidden defendants",
];

const injuryDeadlinesTable = [
  [
    "Car accident injury",
    "2 years",
    "Date of crash",
    "Minor victim, fraud",
  ],
  [
    "PIP medical benefits",
    "14 days",
    "Date of crash",
    "None, strictly enforced",
  ],
  [
    "Wrongful death",
    "2 years",
    "Date of death",
    "Estate representative rule",
  ],
  [
    "Claim vs government vehicle",
    "3 years",
    "Date of crash",
    "180-day notice first",
  ],
  [
    "Accident before Mar 24, 2023",
    "4 years",
    "Date of crash",
    "Grandfathered only",
  ],
];

const pipComparisonTable = [
  [
    "PIP benefits denied outright",
    "Up to $10,000 in PIP medical coverage",
  ],
  [
    "Medical bills fall on you personally",
    "Insurer covers 80 percent of care costs",
  ],
  [
    "Adjusters argue injuries are unrelated",
    "Documented, credible injury timeline",
  ],
  [
    "Weaker negotiating position at settlement",
    "Stronger leverage against the insurer",
  ],
];

const tollingExceptions = [
  "The injured person was a minor at the time of the crash",
  "The at-fault driver fled the state or hid to avoid being served",
  "The defendant committed fraud that concealed the cause of injury",
  "The victim was adjudicated incapacitated before the accident occurred",
];

const timelineSteps = [
  [
    "Day 0",
    "Call the police, get the crash report number, photograph the scene",
  ],
  [
    "Day 0 to 1",
    "See a doctor, ER, or urgent care, even if you feel fine",
  ],
  [
    "Day 1 to 3",
    "Notify your auto insurer and open a PIP claim",
  ],
  [
    "Day 3 to 10",
    "Follow up on referrals, keep every bill and note",
  ],
  [
    "Day 14",
    "Deadline to complete initial PIP treatment expires",
  ],
];

const insuranceChecklist = [
  "Medical visit completed within 14 days",
  "Police report number saved and copied",
  "Photos of vehicle damage and injuries",
  "Names and numbers of any witnesses",
  "No recorded statement given without counsel",
];

const faqs = [
  [
    "Does the two year deadline apply to motorcycle accidents too?",
    "Yes. Motorcycle crashes follow the same two year negligence deadline as car accidents in Florida.",
  ],
  [
    "Can I still negotiate with the insurance company after the statute of limitations expires?",
    "Technically yes, but your leverage disappears once the insurer knows you cannot sue anymore.",
  ],
  [
    "Does filing a police report extend my time to file a lawsuit?",
    "No. A police report is evidence, not a legal filing, and it does not pause your deadline.",
  ],
  [
    "How soon should I contact a lawyer after a Florida car accident?",
    "As soon as possible, ideally within days, so evidence and deadlines are both protected early.",
  ],
];

const SectionTitle = ({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) => (
  <h2 className="mt-10 flex items-start gap-3 text-2xl font-bold text-[#1B2639] md:text-3xl">
    <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-[#EC1D21] text-base text-white">
      {number}
    </span>
    <span>{children}</span>
  </h2>
);

const StatCard = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="flex-1 rounded-md border border-gray-200 bg-white !p-5 text-center shadow-sm">
    <p className="text-4xl font-extrabold text-[#EC1D21] md:text-5xl">
      {value}
    </p>
    <p className="mt-2 text-base text-gray-700">{label}</p>
  </div>
);

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    rel="nofollow noopener noreferrer"
    target="_blank"
    className="font-semibold text-[#EC1D21] hover:underline"
  >
    {children}
  </a>
);

const DefenseVersusFails = ({
  defense,
  whyFails,
}: {
  defense: string;
  whyFails: string;
}) => (
  <div className="my-6 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
    <div className="bg-[#1B2639] !px-5 !py-3 !text-white">
      <h3 className="!mt-0 !mb-0 text-sm font-bold uppercase tracking-[0.16em] !text-white">
        DEFENSE SAYS vs WHY IT FAILS
      </h3>
    </div>
    <div className="grid divide-y divide-gray-200 md:grid-cols-2 md:divide-x md:divide-y-0">
      <div className="!p-5 bg-red-50/40">
        <h4 className="!mt-0 text-sm font-bold uppercase tracking-wider text-red-700">
          What the defense lawyer will say
        </h4>
        <p className="!mb-0 mt-2 text-base leading-7 text-gray-700 text-justify">
          {defense}
        </p>
      </div>
      <div className="!p-5 bg-green-50/40">
        <h4 className="!mt-0 text-sm font-bold uppercase tracking-wider text-green-700">
          Why this argument fails
        </h4>
        <p className="!mb-0 mt-2 text-base leading-7 text-gray-700 text-justify">
          {whyFails}
        </p>
      </div>
    </div>
  </div>
);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.carterinjurylaw.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.carterinjurylaw.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "How Long Do You Have to Take Action After a Florida Auto Injury?",
          "item": "https://www.carterinjurylaw.com/blog/how-long-to-take-action-after-florida-car-injury"
        }
      ]
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.carterinjurylaw.com/blog/how-long-to-take-action-after-florida-car-injury"
      },
      "headline": "How Long Do You Have to Take Action After a Florida Auto Injury?",
      "name": "Florida Auto Injury Deadline You Can't Afford to Miss",
      "description": "Florida law typically gives you 2 years to take legal action after an auto injury. But deadlines, PIP rules, and legal exceptions can also affect your claim.",
      "url": "https://www.carterinjurylaw.com/blog/how-long-to-take-action-after-florida-car-injury",
      "image": "https://www.carterinjurylaw.com/_next/image?url=%2Fassets%2Fstatic-blogs%2Fhow-long-to-take-action-after-florida-car-injury.webp&w=1200&q=75",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.carterinjurylaw.com/blog"
      },
      "about": {
        "@type": "Thing",
        "name": "Florida Auto Accident Injury Deadlines",
        "description": "An overview of Florida auto accident legal deadlines, including the 2-year statute of limitations under HB 837, 14-day PIP rule, exceptions, and immediate post-crash action steps."
      },
      "keywords": [
        "Florida auto injury deadline",
        "statute of limitations Florida car accident",
        "14 day PIP rule Florida",
        "Florida car accident lawsuit deadline",
        "House Bill 837 Florida car accident",
        "Florida injury claim timeline",
        "car accident lawyer Tampa",
        "Florida auto accident attorney"
      ],
      "author": {
        "@type": "Organization",
        "name": "Carter Injury Law, PA"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Carter Injury Law, PA",
        "url": "https://www.carterinjurylaw.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.carterinjurylaw.com/_next/image?url=%2Fassets%2Fsite-logo%2Flogo.png&w=1080&q=75"
        }
      },
      "datePublished": "2026-08-17",
      "dateModified": "2026-08-17"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does the two year deadline apply to motorcycle accidents too?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Motorcycle crashes follow the same two year negligence deadline as car accidents in Florida."
          }
        },
        {
          "@type": "Question",
          "name": "Can I still negotiate with the insurance company after the statute of limitations expires?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Technically yes, but your leverage disappears once the insurer knows you cannot sue anymore."
          }
        },
        {
          "@type": "Question",
          "name": "Does filing a police report extend my time to file a lawsuit?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A police report is evidence, not a legal filing, and it does not pause your deadline."
          }
        },
        {
          "@type": "Question",
          "name": "How soon should I contact a lawyer after a Florida car accident?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As soon as possible, ideally within days, so evidence and deadlines are both protected early."
          }
        }
      ]
    }
  ]
};

export default function HowLongToTakeActionAfterFloridaCarInjury() {
  return (
    <article className="space-y-7">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-4">
        <span>
          <strong>Published:</strong> August 17, 2026
        </span>
        <span>
          <strong>Last Updated:</strong> August 17, 2026
        </span>
      </div>

      <p className="text-justify">
        If you&apos;re dealing with a crash in Florida, there are two major deadlines you need to know about. First, you have two years from the accident date to file a personal injury lawsuit. Second and more urgent, you must get medical treatment within 14 days to protect your PIP benefits. Missing these windows can seriously hurt your claim. It also bars you from recovering anything, regardless of who was at fault.
      </p>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="!p-6 md:!p-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#EC1D21]">
            Key Takeaways
          </h2>
          <ul className="mt-4 grid gap-3 !pl-0 md:grid-cols-2">
            {keyTakeaways.map((point) => (
              <li key={point} className="flex gap-3 !text-base text-gray-700">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1D21]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="my-8 rounded-lg border border-gray-200 bg-[#F7F8FA] !p-6 shadow-sm">
        <h3 className="!mt-0 text-xl font-bold text-[#1B2639]">
          Critical Florida Auto Injury Deadlines
        </h3>
        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <StatCard value="2 Years" label="TO FILE A FLORIDA CAR ACCIDENT LAWSUIT" />
          <StatCard value="14 Days" label="TO SEEK TREATMENT FOR PIP BENEFITS" />
        </div>
      </div>

      <p className="text-justify">
        Under{" "}
        <ExternalLink href="https://www.flsenate.gov/Laws/Statutes/2023/95.11">
          Florida Statute Section 95.11
        </ExternalLink>
        , the state recently slashed the deadline to file an auto injury lawsuit from four years down to just two. Local firms like Carter Injury Law report a massive surge in calls this year from stranded Tampa Bay drivers who waited to take action, only to discover their claims are already legally dead.
      </p>
      <p className="text-justify">
        Worse yet, the{" "}
        <ExternalLink href="https://www.flhsmv.gov">
          Florida Department of Highway Safety and Motor Vehicles
        </ExternalLink>{" "}
        enforces a strict 10-day crash reporting rule under{" "}
        <ExternalLink href="https://www.flsenate.gov/Laws/Statutes/2023/316.066">
          Section 316.066
        </ExternalLink>
        , while{" "}
        <ExternalLink href="https://www.flsenate.gov/Laws/Statutes/2023/627.736">
          Florida Statute Section 627.736
        </ExternalLink>{" "}
        gives you 14 days to seek medical care or forfeit your $10,000 PIP benefits. Missing these government-mandated windows means insurance companies can legally deny your claim entirely. Here is exactly how these timelines operate and what can pause the clock.
      </p>

      <SectionTitle number="1">
        The Florida Auto Injury Deadline Is Now Two Years, Not Four
      </SectionTitle>
      <p className="text-justify">
        You have 2 years from the date of your crash to sue. That is the rule for any accident on or after March 24, 2023.
      </p>
      <p className="text-justify">
        Florida lawmakers have just changed the law, in 2023, with{" "}
        <ExternalLink href="https://www.flsenate.gov/Session/Bill/2023/837">
          House Bill 837
        </ExternalLink>
        , cutting the four-year statute of limitations in half. This law governs almost all negligence claims, including auto collisions, commercial vehicle collisions, and motorcycle crashes. Wrongful death claims governed by this law still have a two-year statute of limitations, but that is measured from the date of death, not the date of the crash.
      </p>
      <p className="text-justify">
        When we have done our statewide surveys of Florida drivers, asking them what the statute of limitations is for a car accident, overwhelmingly, they answer &quot;four years&quot;, which means many families have already lost their opportunity to recover damages, with no one even reviewing their case.
      </p>
      <p className="text-justify">
        Our surveys show most Florida drivers still believe the old four-year rule applies. That misunderstanding has cost some victims their entire case before a lawyer even reviewed the file.
      </p>

      <div className="my-6 border-l-4 border-amber-500 bg-amber-50/50 !p-6 rounded-r-lg shadow-sm">
        <h3 className="!mt-0 text-lg font-bold text-amber-950">
          WARNING: WATCH OUT FOR THIS DEADLINE TRAP
        </h3>
        <p className="mt-2 text-base leading-7 text-gray-700 text-justify">
          If your accident happened before March 24, 2023, the older four year deadline may still apply. Do not assume either way. Get your exact date checked.
        </p>
      </div>

      <SectionTitle number="2">
        When Does the Two-Year Clock Actually Start Ticking?
      </SectionTitle>
      <p className="text-justify">
        The clock starts on the date of the crash itself, not when symptoms appear or when insurance denies your claim.
      </p>
      <p className="text-justify">
        Florida does not use a discovery rule for most car accident injuries. Whiplash that shows up three weeks later does not reset anything. A torn rotator cuff diagnosed after an MRI months later does not either. The date of impact is the date that counts.
      </p>
      <p className="text-justify">
        This is where opposing insurance lawyers get aggressive. A defense attorney will often argue something like this in a demand letter response: &ldquo;Your client waited eleven months before seeking an orthopedic opinion, which suggests the injury was unrelated to the collision.&rdquo; That argument does not erase your filing deadline, but it can gut your damages if you gave insurers ammunition by delaying care.
      </p>
      <p className="text-justify">
        Carter Injury Law has seen this tactic used against Tampa Bay car accident victims who felt fine at the scene, then developed pain days later. Get checked immediately and let a lawyer manage the paperwork trail.
      </p>

      <DefenseVersusFails
        defense="Your client waited eleven months before seeking an orthopedic opinion, which suggests the injury was unrelated to the collision."
        whyFails="Immediate medical evaluations and clear symptom progression documentation prevent insurers from claiming the delay disproves accident causation."
      />

      <h3 className="!mt-8 text-xl font-bold text-[#1B2639]">
        Florida Injury Deadlines At A Glance
      </h3>
      <div className="overflow-x-auto rounded-lg border border-gray-200 mt-4">
        <table className="min-w-[720px] w-full border-collapse bg-white text-left text-sm">
          <thead className="bg-[#1B2639] !text-white">
            <tr>
              <th className="!px-4 !py-3">Claim Type</th>
              <th className="!px-4 !py-3">Deadline</th>
              <th className="!px-4 !py-3">Clock Starts</th>
              <th className="!px-4 !py-3">Key Exception</th>
            </tr>
          </thead>
          <tbody>
            {injuryDeadlinesTable.map(([claimType, deadline, clockStarts, exception]) => (
              <tr key={claimType} className="border-t border-gray-200">
                <td className="!px-4 !py-3 font-semibold text-[#1B2639]">
                  {claimType}
                </td>
                <td className="!px-4 !py-3 text-gray-700 font-medium">{deadline}</td>
                <td className="!px-4 !py-3 text-gray-700">{clockStarts}</td>
                <td className="!px-4 !py-3 text-gray-700">{exception}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle number="3">
        The 14-Day PIP Rule Punishes Florida Drivers Who Wait
      </SectionTitle>
      <p className="text-justify">
        You must see a qualifying medical provider within 14 days of the crash or you forfeit PIP coverage entirely.
      </p>
      <p className="text-justify">
        Florida runs on no-fault insurance. Your own PIP policy pays medical bills first, no matter who caused the wreck. That coverage only exists if you get treated inside the 14-day window. Miss it, and the insurer can deny the claim.
      </p>
      <p className="text-justify">
        There is a second trap layered on top. A doctor must document an emergency medical condition or your PIP payout drops from ten thousand dollars to twenty-five hundred.
      </p>

      <h3 className="!mt-8 text-xl font-bold text-[#1B2639]">
        Before and After, Acting Fast vs Waiting It Out
      </h3>
      <div className="overflow-x-auto rounded-lg border border-gray-200 mt-4">
        <table className="min-w-[720px] w-full border-collapse bg-white text-left text-sm">
          <thead className="bg-[#1B2639] !text-white">
            <tr>
              <th className="!px-4 !py-3 w-1/2 bg-red-900/90 text-white">Waiting Past 14 Days</th>
              <th className="!px-4 !py-3 w-1/2 bg-emerald-800/90 text-white">Acting Within 14 Days</th>
            </tr>
          </thead>
          <tbody>
            {pipComparisonTable.map(([waiting, acting], index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="!px-4 !py-3 text-red-700 bg-red-50/30 font-medium">
                  {waiting}
                </td>
                <td className="!px-4 !py-3 text-emerald-800 bg-emerald-50/30 font-medium">
                  {acting}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-justify mt-4">
        Carter Injury Law walks every new client through this rule on day one. It is the single fastest way an injured Floridian loses money they were legally owed.
      </p>

      <div className="rounded-lg bg-[#1B2639] !p-6 text-white md:!p-8 my-8">
        <h2 className="!mt-0 text-xl font-bold !text-white">
          Do Not Let the Clock Run Out On Your Claim
        </h2>
        <p className="mt-3 !text-white">
          Carter Injury Law offers a free, no-obligation case review for Tampa Bay accident victims.
        </p>
        <p className="mt-2 font-bold text-[#F87171] text-lg">
          Call{" "}
          <a href="tel:8139220228" className="hover:underline text-[#F87171]">
            (813) 922-0228
          </a>
        </p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-[#EC1D21] !px-7 !py-3.5 text-sm font-bold !text-white shadow-sm hover:bg-[#B91C1C] !no-underline transition duration-200"
          >
            Get Free Case Evaluation
          </Link>
        </div>
      </div>

      <SectionTitle number="4">
        Can Anything Pause or Extend the Florida Filing Deadline?
      </SectionTitle>
      <p className="text-justify">
        Yes, but only in narrow situations, and courts apply these exceptions strictly.
      </p>

      <div className="my-6 rounded-lg border border-gray-200 bg-white !p-6 shadow-sm">
        <ul className="space-y-3 !pl-0 list-none">
          {tollingExceptions.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-gray-700">
              <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#EC1D21] text-white text-xs font-bold flex-shrink-0">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-justify">
        These tolling grounds come from{" "}
        <ExternalLink href="https://www.flsenate.gov/Laws/Statutes/2023/95.051">
          Florida Statute 95.051
        </ExternalLink>
        , and Florida courts read this list narrowly. Judges rarely stretch it for sympathy alone.
      </p>

      <p className="text-justify">
        Picture a defense lawyer facing a late-filed claim. They will almost always say something close to this: &ldquo;The statute of limitations is jurisdictional, and this court has no discretion to revive an expired claim.&rdquo; That argument wins more often than victims expect.
      </p>

      <blockquote className="my-6 border-l-4 border-[#EC1D21] bg-[#F9FAFB] !p-6 italic text-gray-600 shadow-sm">
        <p className="!mb-4 text-lg leading-7">
          &ldquo;Most people call us thinking they have years to decide. In reality, evidence disappears fast, insurers close files, and the two-year window closes faster than anyone expects. Acting early is not paranoia; it is strategy.&rdquo;
        </p>
        <cite className="block text-sm font-bold text-[#1B2639] not-italic">
          — David Carter, Founder, Carter Injury Law
        </cite>
      </blockquote>

      <SectionTitle number="5">
        What Florida Drivers Should Do in the First 14 Days
      </SectionTitle>
      <p className="text-justify">
        Seek medical care immediately, report the crash, and document everything before memories or evidence fade.
      </p>
      <p className="text-justify">
        The first two weeks after a wreck decide most of what happens later. Insurers watch this window closely, and so should you.
      </p>

      <h3 className="!mt-8 text-xl font-bold text-[#1B2639]">
        The First 14 Days, Step by Step
      </h3>
      <div className="overflow-x-auto rounded-lg border border-gray-200 mt-4">
        <table className="min-w-[720px] w-full border-collapse bg-white text-left text-sm">
          <thead className="bg-[#1B2639] !text-white">
            <tr>
              <th className="!px-4 !py-3 w-1/3">Timeframe</th>
              <th className="!px-4 !py-3 w-2/3">Action Required</th>
            </tr>
          </thead>
          <tbody>
            {timelineSteps.map(([timeframe, action]) => (
              <tr key={timeframe} className="border-t border-gray-200">
                <td className="!px-4 !py-3 font-semibold text-[#1B2639]">
                  {timeframe}
                </td>
                <td className="!px-4 !py-3 text-gray-700">{action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="my-8 rounded-lg border border-gray-200 bg-white !p-6 shadow-sm">
        <h3 className="!mt-0 text-xl font-bold text-[#1B2639]">
          Quick Checklist Before You Talk to Insurance
        </h3>
        <ul className="mt-4 space-y-3 !pl-0 list-none">
          {insuranceChecklist.map((item) => (
            <li key={item} className="flex items-center gap-3 text-base text-gray-700">
              <span className="flex h-6 w-6 items-center justify-center rounded-md border border-[#EC1D21] bg-red-50 text-[#EC1D21] font-bold">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-justify">
        Carter Injury Law reviews this exact checklist with every auto accident personal injury client during the free case evaluation, before a single form gets signed with the insurer.
      </p>

      <SectionTitle number="6">
        Why Do Tampa Bay Victims Need a Lawyer Before the Deadline Hits?
      </SectionTitle>
      <p className="text-justify">
        Because insurers negotiate harder once they know your filing window is closing.
      </p>
      <p className="text-justify">
        A lawsuit threat only works if there is real time left to file it. Adjusters track your deadline closely, sometimes more closely than victims do. Our surveys show that claimants who hire counsel within the first month recover meaningfully more than those who negotiate alone for over a year. Early legal pressure changes how insurers value a file from day one.
      </p>
      <p className="text-justify">
        Carter Injury Law serves Tampa, Largo, and the wider Tampa Bay area from offices on N. Boulevard and Bay Drive. The firm works on contingency, so clients pay nothing upfront and nothing at all unless the case wins.
      </p>
      <p className="text-justify">
        For accidents involving a loss of life, review the firm&apos;s{" "}
        <Link
          href="/areas-of-practice/wrongful-death"
          className="font-semibold text-[#EC1D21] hover:underline"
        >
          wrongful death resources
        </Link>
        , since those cases carry their own two year clock from date of death. According to the{" "}
        <ExternalLink href="https://www.iii.org">
          Insurance Information Institute
        </ExternalLink>
        , Florida remains one of the more litigation heavy states for auto claims. That keeps insurers motivated to deny or delay whenever the law allows it.
      </p>
      <p className="text-justify">
        A separate review from{" "}
        <ExternalLink href="https://www.flcourts.gov">
          Florida Courts
        </ExternalLink>{" "}
        confirms civil filings dropped noticeably after HB 837 shortened deadlines statewide.
      </p>

      <div className="my-8 rounded-lg border border-gray-200 bg-[#F7F8FA] !p-6 shadow-sm">
        <h3 className="!mt-0 text-xl font-bold text-[#1B2639]">
          Key Case Statistics
        </h3>
        <div className="mt-4 flex flex-col gap-4 md:flex-row">
          <StatCard value="50%" label="SHORTER FILING WINDOW SINCE HB 837 PASSED" />
          <StatCard
            value="$0"
            label="UPFRONT COST FOR A CARTER INJURY LAW CASE REVIEW"
          />
        </div>
      </div>

      <SectionTitle number="7">Frequently Asked Questions</SectionTitle>
      <div className="space-y-4">
        {faqs.map(([question, answer]) => (
          <div
            key={question}
            className="rounded-md border border-gray-200 bg-white !p-5 shadow-sm"
          >
            <h3 className="!mt-0 text-lg font-bold text-[#1B2639]">
              {question}
            </h3>
            <p className="!mb-0 text-base text-gray-700 leading-7 text-justify">
              {answer}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-[#EC1D21] !p-6 text-white md:!p-8 my-8">
        <h2 className="!mt-0 text-xl font-bold !text-white">
          Your Deadline Is Already Running
        </h2>
        <p className="mt-3 !text-white">
          Talk to Carter Injury Law today for a free, no pressure review of your Florida auto injury claim.
        </p>
        <p className="mt-2 text-black font-bold text-lg">
          Call{" "}
          <a href="tel:8139220228" className="hover:underline !text-black font-extrabold">
            (813) 922-0228
          </a>{" "}
          or{" "}
          <a href="tel:7279551922" className="hover:underline text-black font-extrabold">
            (727) 955-1922
          </a>
        </p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-[#1B2639] !px-7 !py-3.5 text-sm font-bold !text-white shadow-sm hover:bg-[#111827] !no-underline transition duration-200"
          >
            Get Free Case Evaluation
          </Link>
        </div>
      </div>

      <p className="rounded-md bg-gray-50 !p-4 text-sm text-gray-600 mt-6 text-justify">
        Disclaimer: This article is for general information only and is not legal advice. Consult a licensed Florida attorney about your specific deadline.
      </p>
    </article>
  );
}
