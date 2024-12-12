import HeroSection from "@/components/home/HeroSection";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import CallToAction from "@/components/shared/CallToAction";

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
const page = () => {
  return (
    <>
      <HeroSection />
      <PrivacyPolicy />
      <CallToAction />
    </>
  );
};

export default page;
