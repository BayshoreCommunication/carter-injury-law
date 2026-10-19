import DisclaimersTermsOfUse from "@/components/disclaimers-and-terms-of-use/privacy-policy/DisclaimersTermsOfUse";
// import HeroSection from "@/components/disclaimers-and-terms-of-use/privacy-policy/HeroSection";

export const metadata = {
  title: "",
  description: "",
  alternates: {
    canonical: "/disclaimers-and-terms-of-use",
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
      {/* <HeroSection /> */}
      <DisclaimersTermsOfUse />
    </>
  );
};

export default page;
