import AboutOurFirm from "@/components/about-us/AboutOurFirm";
import CoreValues from "@/components/about-us/CoreValues";
import TeamSection from "@/components/about-us/TeamSection";
import HeroSection from "@/components/home/HeroSection";
import AchievementSection from "@/components/shared/AchievementSection";
import CallToAction from "@/components/shared/CallToAction";
import PracticeAreasSection from "@/components/shared/PracticeAreasSection";

export const metadata = {
  title:
    "Trusted Personal Injury Attorneys | Experts in Auto Accidents, Medical Malpractice & More",
  description:
    "Learn more about our dedicated team of personal injury attorneys. Specializing in Auto Accidents, Premises Liability, Wrongful Death, Medical Malpractice, and more, we’re here to fight for your rights in Tampa, Florida.",
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
      <CoreValues />
      <PracticeAreasSection />
      <AchievementSection />
      <TeamSection />
      <CallToAction />
    </>
  );
};

export default page;
