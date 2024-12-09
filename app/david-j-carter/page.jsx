import HeroSection from "@/components/home/HeroSection";
import DavidJCarter from "@/components/profile/DavidJCarter";
import ProfileSection from "@/components/profile/ProfileSection";
import CallToAction from "@/components/shared/CallToAction";
import FAQ from "@/components/shared/FAQ";
import Head from "next/head";

export const metadata = {
  title: "Profile - Carter Injury Law",
  description: "",
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
