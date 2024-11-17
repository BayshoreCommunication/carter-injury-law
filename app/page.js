import AboutSection from "@/components/home/AboutSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import AchievementSection from "@/components/shared/AchievementSection";
import CallToAction from "@/components/shared/CallToAction";
import PracticeAreasSection from "@/components/shared/PracticeAreasSection";
import TestimonialSlideSection from "@/components/shared/TestimonialSlideSection";

export const metadata = {
  title:
    "Experienced Personal Injury Attorney in Tampa, Florida | Carter Injury Law",
  description:
    "Need expert legal help after an accident? Our  Experienced personal injury attorney in Tampa, Florida, is here to fight for your rights and secure the compensation you deserve. Call today for a free consultation!",
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

export default function Home() {
  return (
    <main className="w-full">
      {/* hero section  */}
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
