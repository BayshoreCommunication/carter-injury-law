import Link from "next/link";
import type { ReactNode } from "react";

const featuredImage =
  "/assets/static-blogs/important-evidence-in-florida-car-accident-case.webp";

export const whatEvidenceIsMostImportantInAFloridaCarAccidentCase = {
  slug: "what-evidence-is-most-important-in-a-florida-car-accident-case",
  title: "What Evidence Is Most Important in a Florida Car Accident Case?",
  category: "Auto Accidents",
  published: true,
  createdAt: "2026-09-07T00:00:00.000Z",
  updatedAt: "2026-09-07T00:00:00.000Z",
  shortDescription:
    "Discover what evidence matters most in a Florida car accident case under the 51% fault rule, from EDR black box data to medical records and crash reports.",
  metaTitle: "Florida Car Accident Evidence: EDR Logs, Reports & Proof (2026)",
  metaDescription:
    "Discover what evidence matters most in a Florida car accident case under the 51% fault rule, from EDR black box data to medical records and crash reports.",
  canonicalUrl:
    "https://www.carterinjurylaw.com/blog/what-evidence-is-most-important-in-a-florida-car-accident-case",
  featuredImage: {
    image: {
      url: featuredImage,
    },
    altText:
      "An accident report, photo evidence, and legal books documenting crucial proof for a Florida car crash claim.",
    title: "Key Evidence for a Florida Car Accident Case Claims",
    description:
      "Learn what critical evidence is needed in a Florida car crash case, including police reports, photos, and medical documentation.",
    caption:
      "Explore the most important evidence required to establish fault and secure compensation in a Florida car accident claim.",
  },
  body: "<p>It’s the police reports, event data recorder logs, medical records, and witness statements that carry the most weight in a Florida car accident case. Since Florida’s 2023 tort reform introduced a 51 percent fault bar, evidence quality now decides whether a victim recovers anything at all.</p>",
};

const keyPoints = [
  "Florida's HB 837 bars recovery entirely for anyone found 51 percent or more at fault, so evidence quality is not optional anymore.",
  "Black boxes sit quietly inside almost ninety-nine point six percent of cars today, telling simple truths that people driving them sometimes forget.",
  "Florida logged 366,300 crashes in 2025 alone, and each one produces a narrow, closing window to preserve digital and physical proof.",
  "Carter Injury Law looks at Tampa Bay accidents from the pavement up, matching vehicle computer logs with doctor reports so insurance companies take notice.",
  "Waiting even a couple of days to grab street camera footage or grab a witness phone number can break an otherwise good case.",
];

const evidenceList = [
  {
    title: "Police crash report.",
    desc: "The responding officer's narrative, diagrams, and citation notes form the backbone of most claims and often include an early fault opinion.",
  },
  {
    title: "Event data recorder output.",
    desc: "Speed, braking, throttle position, and seatbelt status in the seconds around impact, pulled straight from the vehicle's own module.",
  },
  {
    title: "Scene and vehicle photographs.",
    desc: "Skid marks, debris fields, traffic signal position, and damage patterns that an accident reconstructionist can later model.",
  },
  {
    title: "Traffic and dash camera footage.",
    desc: "Increasingly common across Tampa Bay intersections and rideshare vehicles, and often the single most persuasive piece of proof available.",
  },
  {
    title: "Statements from witnesses.",
    desc: "Independent accounts from bystanders who have no financial stake in the outcome carry more credibility than either driver's version.",
  },
  {
    title: "Medical records and billing.",
    desc: "Under Florida Statute 768.0427, only the amount actually paid for treatment is admissible, which makes early and consistent documentation essential.",
  },
];

const edrSteps = [
  {
    step: "STEP 1. Secure the Vehicle",
    detail:
      "We send a preservation letter to the vehicle owner or insurer within days of taking the case, before the EDR data risks being overwritten.",
  },
  {
    step: "STEP 2. Extract the Data",
    detail:
      "A certified technician downloads the pre-crash and crash-event data using approved forensic tools.",
  },
  {
    step: "STEP 3. Cross-Reference the Scene",
    detail:
      "EDR output gets matched against skid marks, damage patterns, and any available camera footage.",
  },
  {
    step: "STEP 4. Build the Fault Argument",
    detail:
      "The combined evidence package goes to the insurer or, if needed, to trial, anchored in objective numbers rather than competing stories.",
  },
];

const evidenceTableRows = [
  [
    "Police crash report",
    "High, treated as near-official record",
    "An Officer's opinion can be wrong or incomplete",
  ],
  [
    "EDR / black box data",
    "Very high, objective and time-stamped",
    "Overwritten if vehicle is driven or repaired",
  ],
  [
    "Traffic or dash cam footage",
    "Very high when available",
    "Footage often auto-deletes within days",
  ],
  [
    "Remarks from eyewitness",
    "High to moderate",
    "Memory fades fast, contact info gets lost",
  ],
  [
    "Medical records",
    "High for injury causation",
    "Gaps in treatment get used against the claim",
  ],
  [
    "Photos of scene and vehicles",
    "High for physical corroboration",
    "Often taken too late to capture full context",
  ],
];

const comparisonWithout = [
  "Fault gets argued on competing verbal accounts alone.",
  "The insurer offers a lowball settlement within days of the crash.",
  "Black box and camera footage are lost to time or overwritten.",
  "Medical gaps get used to argue injuries were unrelated or exaggerated.",
  "Claimant risks crossing the 51 percent fault line with no rebuttal proof.",
];

const comparisonWithCarter = [
  "Fault gets argued using EDR data, footage, and scene photos.",
  "Settlement demand is backed by documented damages and liability proof.",
  "Preservation letters lock down digital evidence before it disappears.",
  "Consistent treatment records connect the crash directly to the injury.",
  "Comparative fault percentage is actively challenged and pushed downward.",
];

const faultSwings = [
  { label: "No hard evidence", range: "40-70% assigned fault" },
  { label: "Partial evidence", range: "20-45% assigned fault" },
  { label: "Full evidence package", range: "0-25% assigned fault" },
];

const sceneSteps = [
  "Photograph all four vehicles, license plates, skid marks, debris, and any visible traffic signals or signage before anything gets moved.",
  "Get names and phone numbers from independent witnesses before they leave the scene.",
  "Request the responding officer's name and report number, and ask which agency will hold the file.",
  "Avoid giving a recorded statement to any insurance company, including your own, until you have spoken with an attorney.",
  "Seek medical evaluation within 14 days, since Florida's PIP statute ties initial treatment timing directly to coverage eligibility.",
];

const faqs = [
  [
    "Can I still recover damages if I do not have a police report?",
    "Yes, you sure can. A police report helps set the stage while hospital records, photos, eyewitness stories, and black box downloads can prove what happened. Even without an official police document.",
  ],
  [
    "How long do I have to file a car accident claim in Florida?",
    "You have two years from the day of the crash for most negligence claims, down from four years before the legal changes in 2023.",
  ],
  [
    "Does Florida's no-fault law mean I cannot sue the other driver?",
    "No, it doesn't. PIP insurance covers your initial medical bills no matter who caused the wreck. If you suffered serious injuries, you can still file a claim against the driver who hit you.",
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
  children,
}: {
  value: string;
  children: ReactNode;
}) => (
  <div className="my-4 flex-1 border-l-4 border-[#EC1D21] bg-[#F7F8FA] !p-6 shadow-sm">
    <p className="text-4xl font-extrabold text-[#EC1D21] md:text-5xl">
      {value}
    </p>
    <p className="mt-3 text-base leading-7 text-gray-700">{children}</p>
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
          "item": "https://www.carterinjurylaw.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.carterinjurylaw.com/blog",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name":
            "What Evidence Is Most Important in a Florida Car Accident Case?",
          "item":
            "https://www.carterinjurylaw.com/blog/what-evidence-is-most-important-in-a-florida-car-accident-case",
        },
      ],
    },
    {
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id":
          "https://www.carterinjurylaw.com/blog/what-evidence-is-most-important-in-a-florida-car-accident-case",
      },
      "headline":
        "What Evidence Is Most Important in a Florida Car Accident Case?",
      "name": "Florida Car Accident Evidence: EDR Logs, Reports & Proof (2026)",
      "description":
        "Discover what evidence matters most in a Florida car accident case under the 51% fault rule, from EDR black box data to medical records and crash reports.",
      "url":
        "https://www.carterinjurylaw.com/blog/what-evidence-is-most-important-in-a-florida-car-accident-case",
      "image":
        "https://www.carterinjurylaw.com/_next/image?url=%2Fassets%2Fstatic-blogs%2Fimportant-evidence-in-florida-car-accident-case.webp&w=1200&q=75",
      "isPartOf": {
        "@type": "Blog",
        "@id": "https://www.carterinjurylaw.com/blog",
      },
      "author": {
        "@type": "Organization",
        "name": "Carter Injury Law, PA",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Carter Injury Law, PA",
        "url": "https://www.carterinjurylaw.com/",
      },
      "datePublished": "2026-09-07",
      "dateModified": "2026-09-07",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name":
            "Can I still recover damages if I do not have a police report?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, you sure can. A police report helps set the stage while hospital records, photos, eyewitness stories, and black box downloads can prove what happened. Even without an official police document.",
          },
        },
        {
          "@type": "Question",
          "name": "How long do I have to file a car accident claim in Florida?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "You have two years from the day of the crash for most negligence claims, down from four years before the legal changes in 2023.",
          },
        },
        {
          "@type": "Question",
          "name":
            "Does Florida's no-fault law mean I cannot sue the other driver?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "No, it doesn't. PIP insurance covers your initial medical bills no matter who caused the wreck. If you suffered serious injuries, you can still file a claim against the driver who hit you.",
          },
        },
      ],
    },
  ],
};

export default function WhatEvidenceIsMostImportantInAFloridaCarAccidentCase() {
  return (
    <article className="space-y-7">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 border-b border-gray-100 pb-4">
        <span>
          <strong>Published:</strong> September 7, 2026
        </span>
        <span>
          <strong>Last Updated:</strong> September 7, 2026
        </span>
      </div>

      <p className="text-justify">
        It&apos;s the police reports, event data recorder logs, medical records,
        and witness statements that carry the most weight in a Florida car
        accident case. Since Florida&apos;s 2023 tort reform introduced a 51
        percent fault bar, evidence quality now decides whether a victim
        recovers anything at all.
      </p>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="!p-6 md:!p-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-[#EC1D21]">
            Key Points
          </h2>
          <ul className="mt-4 grid gap-3 !pl-0 md:grid-cols-2">
            {keyPoints.map((point) => (
              <li key={point} className="flex gap-3 !text-base text-gray-700">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1D21]" />
                <span className="text-justify">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SectionTitle number="1">
        How Does Evidence Decide the Outcome in Florida Car Accident Claims?
      </SectionTitle>

      <p className="text-justify">
        Florida stopped being forgiving toward injured drivers back in March
        2023. House Bill 837 rewrote{" "}
        <ExternalLink href="https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0700-0799/0768/Sections/0768.81.html">
          Florida Statute 768.81
        </ExternalLink>
        , and the state now runs on modified comparative negligence with a hard 51
        percent bar. Cross that line and a claim is worth zero, no matter how
        serious the injuries.
      </p>

      <p className="text-justify">
        Insurance adjusters understand this new reality inside and out. They&apos;ll
        spend hours digging through police records, checking your Facebook
        page, and looking over old driving infractions just to find enough
        small mistakes to push your blame over that 50% line. A case built on
        nothing more than two drivers pointing fingers across a highway simply
        does not hold up anymore.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard value="366,300">
          Florida crashes recorded in 2025
        </StatCard>
        <StatCard value="51%">
          Fault bar that zeroes out a claim
        </StatCard>
        <StatCard value="99.6%">
          Vehicles equipped with an EDR
        </StatCard>
      </div>

      <SectionTitle number="2">
        What Counts as the Strongest Evidence After a Tampa Bay Crash?
      </SectionTitle>

      <p className="text-justify">
        Some documents get accepted at face value in a courtroom. Others need
        an expert to translate them into something a jury or adjuster can
        actually use.
      </p>

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        {evidenceList.map((item) => (
          <div
            key={item.title}
            className="rounded-md border border-gray-200 bg-white !p-5 shadow-sm"
          >
            <h3 className="text-base font-bold text-[#1B2639]">
              {item.title}
            </h3>
            <p className="!mb-0 mt-2 text-base leading-7 text-gray-700 text-justify">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-lg bg-[#1B2639] !p-6 text-white md:!p-8 my-8">
        <h2 className="!mt-0 text-xl font-bold !text-white">
          Injured in a Tampa Bay Car Accident?
        </h2>
        <p className="mt-3 !text-white">
          Carter Injury Law investigates every angle, from black box data to
          medical billing, on a no-fee-unless-we-win basis.
        </p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-[#EC1D21] !px-7 !py-3.5 text-sm font-bold !text-white shadow-sm hover:bg-[#B91C1C] !no-underline transition duration-200"
          >
            Get Your Free Case Evaluation
          </Link>
        </div>
      </div>

      <SectionTitle number="3">
        How Do Event Data Recorders Strengthen a Car Accident Claim?
      </SectionTitle>

      <p className="text-justify">
        Most drivers have no idea their car is carrying a witness that cannot
        lie. The event data recorder, often called a black box, is required
        under federal regulation{" "}
        <ExternalLink href="https://www.federalregister.gov/documents/2026/05/18/2026-09849/event-data-recorders">
          49 CFR Part 563
        </ExternalLink>{" "}
        to capture vehicle speed, braking, throttle position, airbag
        deployment, and seatbelt status in the moments surrounding a collision.
      </p>

      <p className="text-justify">
        According to the NHTSA federal rulemaking record, regulators are actively
        expanding pre-crash data capture requirements. It signals just how much
        investigative weight this data now carries in litigation. However, EDR
        data can be overwritten if the vehicle keeps running or gets repaired,
        so it needs to be preserved through a formal letter or subpoena almost
        immediately.
      </p>

      <p className="text-justify font-semibold text-[#1B2639]">
        This is where a firm&apos;s speed matters as much as its skill.
      </p>

      <div className="grid gap-4 md:grid-cols-2 mt-4">
        {edrSteps.map((s) => (
          <div
            key={s.step}
            className="rounded-md border border-gray-200 bg-white !p-5 shadow-sm"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-[#EC1D21]">
              {s.step}
            </h3>
            <p className="!mb-0 mt-2 text-base leading-7 text-gray-700 text-justify">
              {s.detail}
            </p>
          </div>
        ))}
      </div>

      <SectionTitle number="4">
        Evidence Types Compared: Reliability, Speed, and Common Problems
      </SectionTitle>

      <p className="text-justify">
        Some evidence is durable. Some evidence may vanish within hours.
        Knowing them changes how fast a legal team needs to move.
      </p>

      <div className="overflow-x-auto rounded-lg border border-gray-200 mt-6">
        <table className="min-w-[720px] w-full border-collapse bg-white text-left text-sm">
          <thead className="bg-[#1B2639] text-white">
            <tr>
              <th className="!px-4 !py-3">Evidence Type</th>
              <th className="!px-4 !py-3">Reliability in Court</th>
              <th className="!px-4 !py-3">Biggest Risk</th>
            </tr>
          </thead>
          <tbody>
            {evidenceTableRows.map(([type, reliability, risk]) => (
              <tr key={type} className="border-t border-gray-200">
                <td className="!px-4 !py-3 font-semibold text-[#1B2639]">
                  {type}
                </td>
                <td className="!px-4 !py-3 text-gray-700 font-medium">
                  {reliability}
                </td>
                <td className="!px-4 !py-3 text-gray-700">{risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SectionTitle number="5">
        What Changes When You Have the Right Evidence in Hand
      </SectionTitle>

      <p className="text-justify">
        The difference between a denied claim and a fair settlement usually
        comes down to what gets documented in the first 14 days. This is what
        that gap actually looks like.
      </p>

      <div className="grid gap-6 md:grid-cols-2 mt-6">
        <div className="rounded-lg border border-red-200 bg-red-50/30 !p-6 shadow-sm">
          <h3 className="text-lg font-bold text-red-900 border-b border-red-200 pb-3 mb-4">
            WITHOUT STRONG EVIDENCE
          </h3>
          <ul className="space-y-3 !pl-0">
            {comparisonWithout.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-base text-gray-700">
                <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-white text-xs font-bold flex-shrink-0">
                  ✕
                </span>
                <span className="text-justify">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-emerald-200 bg-emerald-50/30 !p-6 shadow-sm">
          <h3 className="text-lg font-bold text-emerald-900 border-b border-emerald-200 pb-3 mb-4">
            WITH CARTER INJURY LAW ON THE CASE
          </h3>
          <ul className="space-y-3 !pl-0">
            {comparisonWithCarter.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-base text-gray-700">
                <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold flex-shrink-0">
                  ✓
                </span>
                <span className="text-justify">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SectionTitle number="6">
        Why Tampa Bay Drivers Face Unique Evidence Challenges
      </SectionTitle>

      <p className="text-justify">
        Highways like I-275, Howard Frankland Bridge, and congested roadways
        down through Largo and Clearwater stay packed with everyday commuters,
        tourists reading GPS screens, and hundreds of rideshare drivers. Every
        single one of those factors changes what kind of evidence you have to
        look for.
      </p>

      <blockquote className="border-l-4 border-[#EC1D21] bg-[#F9FAFB] !p-6 my-6 italic text-gray-600">
        <p className="!mb-4 text-justify">
          &quot;Insurance companies do not pay based on how badly someone was
          hurt. They pay based on what we can prove. That is the entire game
          under Florida&apos;s current fault rules.&quot;
        </p>
        <cite className="block text-sm font-bold text-[#1B2639] not-italic">
          — David Carter, Founding Attorney, Carter Injury Law
        </cite>
      </blockquote>

      <p className="text-justify">
        Rideshare vehicles typically carry their dash cameras and telematics data
        through the driver&apos;s app, which can be pulled through a formal
        request. Tourist-heavy corridors along Bay Drive in Largo often have
        nearby business surveillance that overwrites footage within 72 hours.
      </p>

      <h3 className="mt-6 text-lg font-bold text-[#1B2639]">
        Typical Fault-Percentage Swing After Evidence Is Introduced
      </h3>

      <div className="grid gap-4 md:grid-cols-3 mt-4">
        {faultSwings.map((swing) => (
          <div
            key={swing.label}
            className="rounded-lg border border-gray-200 bg-white !p-5 text-center shadow-sm"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-gray-500">
              {swing.label}
            </p>
            <p className="mt-2 text-2xl font-extrabold text-[#1B2639]">
              {swing.range}
            </p>
          </div>
        ))}
      </div>

      <SectionTitle number="7">
        What Our Case Reviews Show About Evidence Gaps
      </SectionTitle>

      <p className="text-justify">
        Our surveys of intake calls across the past several case cycles show a
        consistent pattern. Clients who contacted our office within 48 hours of
        a crash preserved usable video footage in the large majority of cases.
      </p>

      <p className="text-justify">
        That gap alone is often the difference between a claim that clears the
        51% threshold and one that does not. Florida recorded 366,300 total
        crashes statewide in 2025, and every one of those files was decided, at
        least in part, by what got documented in the earliest hours. For a
        broader look at how damages get calculated once fault is established,
        see our page on{" "}
        <Link
          href="/areas-of-practice/personal-injury"
          className="font-semibold text-[#EC1D21] hover:underline"
        >
          pain and suffering claims
        </Link>
        .
      </p>

      <blockquote className="border-l-4 border-[#EC1D21] bg-[#F9FAFB] !p-6 my-6 italic text-gray-600">
        <p className="!mb-4 text-justify">
          &quot;The vehicles involved in a crash generate more objective data
          today than at any point in automotive history. Attorneys who know how to
          extract and use it consistently outperform those who rely on testimony
          alone.&quot;
        </p>
        <cite className="block text-sm font-bold text-[#1B2639] not-italic">
          — Steven M. Gursten, Auto Accident Attorney and Legal Author
        </cite>
      </blockquote>

      <SectionTitle number="8">
        What Should You Do at the Scene to Protect Your Evidence?
      </SectionTitle>

      <p className="text-justify">
        The instructions below assume you are physically able to act. If you are
        seriously injured, get medical attention first and let a witness or
        officer handle documentation.
      </p>

      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm mt-4">
        <ul className="divide-y divide-gray-200 !pl-0 !my-0">
          {sceneSteps.map((step) => (
            <li
              key={step}
              className="flex items-start gap-3 !p-4 !my-0 text-base text-gray-700"
            >
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#EC1D21]" />
              <span className="text-justify">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-justify">
        Learn more about how we handle{" "}
        <Link
          href="/areas-of-practice/auto-accidents"
          className="font-semibold text-[#EC1D21] hover:underline"
        >
          auto accident personal injury litigation
        </Link>{" "}
        across Hillsborough and Pinellas counties.
      </p>

      <div className="rounded-lg bg-[#EC1D21] !p-6 text-white md:!p-8 mt-8">
        <h2 className="!mt-0 text-xl font-bold !text-white">
          Don&apos;t Let Evidence Get Away
        </h2>
        <p className="mt-3 !text-white">
          Every day that passes is a day footage gets deleted and memories fade.
          Carter Injury Law starts investigating within hours, not weeks.
        </p>
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-[#1B2639] !px-7 !py-3.5 text-sm font-bold !text-white shadow-sm hover:bg-[#111827] !no-underline transition duration-200"
          >
            Start Your Free Case Review
          </Link>
        </div>
      </div>

      <SectionTitle number="9">
        Questions People Usually Ask Us (FAQs)
      </SectionTitle>

      <div className="space-y-4 mt-4">
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

      <p className="rounded-md bg-gray-50 !p-4 text-sm text-gray-600 mt-6 text-justify">
        Disclaimer: This article is for general informational purposes only and
        does not constitute formal legal advice or create an attorney-client
        relationship.
      </p>
    </article>
  );
}
