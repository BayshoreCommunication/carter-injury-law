import ContactHeroSection from "@/components/contact-us/ContactHeroSection";
import GoogleMapSection from "@/components/contact-us/GoogleMapSection";
import AchievementSection from "@/components/shared/AchievementSection";
import CallToAction from "@/components/shared/CallToAction";
import TestimonialSlideSection from "@/components/shared/TestimonialSlideSection";
import Head from "next/head";

export const metadata = {
  title: "Top Tampa Personal Injury Lawyer in florida | Carter Injury Law | Florida Dog bite lawyer ",
  description:
    "Reach out to Carter Injury Law, your trusted personal injury attorneys in Tampa, Florida. Contact us for expert legal advice on auto accidents, slip and falls, medical malpractice, and more. We're here to help with your injury claim!",
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
      <ContactHeroSection />
      <GoogleMapSection />
      <AchievementSection />
      <TestimonialSlideSection className={"my-0 md:my-0 shadow-none"} />
      <CallToAction />
    </>
  );
};

export default page;
