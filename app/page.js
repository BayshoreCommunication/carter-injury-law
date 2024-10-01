import AboutSection from "@/components/home/AboutSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import AchievementSection from "@/components/shared/AchievementSection";
import CallToAction from "@/components/shared/CallToAction";
import PracticeAreasSection from "@/components/shared/PracticeAreasSection";
import TestimonialSlideSection from "@/components/shared/TestimonialSlideSection";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutSection />
      <AchievementSection />
      <PracticeAreasSection />
      <TestimonialSlideSection />
      <FeaturedSection />
      <CallToAction />
    </main>
  );
}
