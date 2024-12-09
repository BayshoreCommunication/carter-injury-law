import AboutOurFirm from "@/components/about-us/AboutOurFirm";
import CoreValues from "@/components/about-us/CoreValues";
import TeamSection from "@/components/about-us/TeamSection";
import HeroSection from "@/components/home/HeroSection";
import AchievementSection from "@/components/shared/AchievementSection";
import CallToAction from "@/components/shared/CallToAction";
import PracticeAreasSection from "@/components/shared/PracticeAreasSection";

export const metadata = {
  title: "",
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
      <CoreValues />
      <PracticeAreasSection />
      <AchievementSection />
      <TeamSection />
      <CallToAction />
    </>
  );
};

export default page;
