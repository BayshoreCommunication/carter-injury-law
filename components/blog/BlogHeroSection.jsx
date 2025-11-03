import Image from "next/image";
import HeaderForm from "../shared/HeaderForm";
import SectionLayout from "../shared/SectionLayout";

const BlogHeroSection = () => {
  return (
    <div>
      <div className="relative w-full h-[300px] md:h-[500px] lg:h-[650px] xl:h-[750px]">
        <Image
          src="/assets/shared/practice-area-bg.png"
          alt="Blog page background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
          className="z-0 object-cover w-full h-full object-bottom"
          quality={85}
          fetchPriority="high"
        />

        <div className="absolute inset-0 flex justify-center items-center z-10 lg:h-[450px] xl:h-[550px]">
          <h1 className="text-white font-semibold text-3xl md:text-5xl lg:text-[80px] text-center uppercase drop-shadow-[1px_0_10px_#000000]">
            blog
          </h1>
        </div>
        {/* <div className="absolute -bottom-52 right-[15%] hidden lg:block">
          <HeaderForm className="bg-white" />
        </div> */}
        <div className="absolute scale-100 -bottom-56 lg:-bottom-48 xl:-bottom-48  right-[12%] hidden lg:block ">
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
