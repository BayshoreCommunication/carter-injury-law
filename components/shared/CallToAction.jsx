import Link from "next/link";
import SectionLayout from "./SectionLayout";
import { PiPhoneCallFill } from "react-icons/pi";

const CallToAction = () => {
  return (
    <section
      className=" w-full"
      style={{
        backgroundImage: "url('/assets/shared/cta-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "auto", // Adjust height as needed
      }}
    >
      <SectionLayout bg="">
        <div className="flex flex-col  items-center justify-center lg:flex-row md:justify-between gap-4">
          <h2
            className={`text-white font-semibold text-3xl md:text-4xl text-center lg:text-start  uppercase `}
          >
            FREE CONFIDENTIAL CASE EVALUATION
          </h2>
          <div className="w-fit">
            <a
              href="tel:+18139220228"
              target="_blank"
              className="flex  items-center gap-3 px-3 lg:px-8 py-2 lg:py-4 rounded-xl lg:rounded-[20px] border-2 md:border-3 lg:border-5 border-[#000000] bg-white text-xl lg:text-2xl xl:text-3xl "
            >
              <PiPhoneCallFill color="#ED1B24" size="30" />
              <span className="font-semibold">(813)9220228</span>
            </a>
          </div>
        </div>
      </SectionLayout>
    </section>
  );
};

export default CallToAction;
