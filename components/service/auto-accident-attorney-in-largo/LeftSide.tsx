import AutoAccidentSectionExtra from "./AutoAccidentSectionExtra";
import AutoAccidentSectionFinal from "./AutoAccidentSectionFinal";
import AutoAccidentSectionOne from "./AutoAccidentSectionOne";
import AutoAccidentSectionTwo from "./AutoAccidentSectionTwo";
import LargoAutoAccidentFinalSection from "./LargoAutoAccidentFinalSection";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <AutoAccidentSectionOne />
      <AutoAccidentSectionTwo />
      <AutoAccidentSectionFinal />
      <AutoAccidentSectionExtra />
      <LargoAutoAccidentFinalSection />
    </div>
  );
}
