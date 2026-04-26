import AviationClientFAQSection from "./AviationClientFAQSection";
import AviationConventionSection from "./AviationConventionSection";
import AviationInjurySection from "./AviationInjurySection";
import TampaAviationAccidentLawyerSection from "./TampaAviationAccidentLawyerSection";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <AviationInjurySection />
      <TampaAviationAccidentLawyerSection />
      <AviationClientFAQSection />
      <AviationConventionSection />
    </div>
  );
}
