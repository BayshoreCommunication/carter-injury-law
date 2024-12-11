import HeroSection from "@/components/home/HeroSection";
import RobertJohnson from "@/components/profile/RobertJohnson";
import CallToAction from "@/components/shared/CallToAction";

export const metadata = {
  title: "Profile - Carter Injury Law",
  description: `Rob is the son of an Army Veteran who was born at Elmendorf
                    Air Force Base in Alaska.  He grew up moving from one
                    military base to another and because of that and his travels
                    later in life, he has been fortunate to visit all fifty (50)
                    states in The United States of America.  Although he moved
                    often due to his father’s military orders, he had the
                    opportunity to spend much of his young life growing up in
                    central Florida and because of that he considers Florida,
                    more specifically the Tampa Bay area, to be his home.`,
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
