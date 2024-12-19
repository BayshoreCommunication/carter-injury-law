import Image from "next/image";
import HeaderForm from "../shared/HeaderForm";
import SectionLayout from "../shared/SectionLayout";

const BlogHeroSection = () => {
  return (
    <div>
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[650px] xl:h-[750px]">
        <Image
          src="/assets/shared/practice-area-bg.png"
          alt="testimonials Bg"
          // layout="fill"
          // objectFit="center"
          height={650}
          width={2400}
          className="z-0 object-cover w-full h-full object-bottom"
        />

        <div className="absolute inset-0 flex justify-center items-center z-10 lg:h-[650px]">
          <h1 className="text-white font-semibold text-3xl md:text-5xl lg:text-[80px] text-center uppercase drop-shadow-[1px_0_10px_#000000]">
            blog
          </h1>
        </div>
        {/* <div className="absolute -bottom-52 right-[15%] hidden lg:block">
          <HeaderForm className="bg-white" />
        </div> */}
        <div className="absolute scale-90 xl:scale-100 -bottom-60 xl:-bottom-52 right-[12%] hidden lg:block ">
          <HeaderForm className="bg-white" />
        </div>
      </div>
      <div className="block lg:hidden relative z-30">
        <SectionLayout>
          <HeaderForm className="bg-white" />
        </SectionLayout>
      </div>
    </div>
  );
};

export default BlogHeroSection;
