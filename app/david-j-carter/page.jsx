import HeroSection from "@/components/home/HeroSection";
import DavidJCarter from "@/components/profile/DavidJCarter";
import ProfileSection from "@/components/profile/ProfileSection";
import CallToAction from "@/components/shared/CallToAction";
import FAQ from "@/components/shared/FAQ";
import Head from "next/head";

export const metadata = {
  title: "Profile - Carter Injury Law",
  description: ` David Carter is a skilled personal injury lawyer with years
                    of experience, dedicated to helping clients recover
                    compensation for accidents, medical malpractice, and
                    wrongful death cases. Compassionate and results-driven.`,
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-USA",
    },
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
};
const page = () => {
  return (
    <>
      <HeroSection />
      <DavidJCarter />
      <CallToAction />
    </>
  );
};

export default page;
