import HeroSection from "@/components/home/HeroSection";
import ProfileSection from "@/components/profile/ProfileSection";
import CallToAction from "@/components/shared/CallToAction";
import FAQ from "@/components/shared/FAQ";
import Head from "next/head";

export const metadata = {
  title: "Meet Our Personal Injury Attorneys in Tampa | Carter Injury Law",
  description:
    "Get to know the dedicated team of personal injury attorneys at Carter Injury Law in Tampa, Florida. Our experienced lawyers handle auto accidents, slip & falls, medical malpractice, and more. Discover the professionals fighting for your rights.",
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
      <ProfileSection />
      <FAQ toH1={false} />
      <CallToAction />
    </>
  );
};

export default page;
