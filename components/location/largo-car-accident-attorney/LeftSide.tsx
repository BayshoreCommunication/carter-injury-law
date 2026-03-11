import LargoCarAccidentAdditionalSections from "./LargoCarAccidentAdditionalSections";
import LargoCarAccidentAttorneySection from "./LargoCarAccidentAttorneySection";
import LargoCarAccidentExtraContent from "./LargoCarAccidentExtraContent";
import LargoCarAccidentInjuryContent from "./LargoCarAccidentInjuryContent";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <LargoCarAccidentAttorneySection />
      <LargoCarAccidentAdditionalSections />
      <LargoCarAccidentExtraContent />
      <LargoCarAccidentInjuryContent />
    </div>
  );
}
