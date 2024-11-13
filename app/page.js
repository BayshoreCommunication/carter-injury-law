import AboutSection from "@/components/home/AboutSection";
import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import AchievementSection from "@/components/shared/AchievementSection";
import CallToAction from "@/components/shared/CallToAction";
import PracticeAreasSection from "@/components/shared/PracticeAreasSection";
import TestimonialSlideSection from "@/components/shared/TestimonialSlideSection";

export const metadata = {
  title: "Carter Injury Law",
  description:
    "At Carter Injury Law, you’re family. We offer open lines of communication to foster personal relationships and optimize case outcomes for our clients. Every client gets the personal cell phone number of the attorney.",
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
