import HeroSection from "@/components/home/HeroSection";
import RobertJohnson from "@/components/profile/RobertJohnson";
import CallToAction from "@/components/shared/CallToAction";

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
      <RobertJohnson />
      <CallToAction />
    </>
  );
};

export default page;
