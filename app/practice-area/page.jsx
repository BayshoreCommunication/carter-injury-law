import PracticeAreaHeader from "@/components/practice-area/PracticeAreaHeader";
import PracticeAreaMain from "@/components/practice-area/PracticeAreaMain";
import CallToAction from "@/components/shared/CallToAction";
import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <>
      <Head>
        <title>Practice Areas - Carter Injury Law</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content={`At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients.`}
        />
      </Head>
      <PracticeAreaHeader />
      <PracticeAreaMain />
      <CallToAction />
    </>
  );
};

export default page;
