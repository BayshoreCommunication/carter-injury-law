import PedestrianAccidentFinalSection from "./PedestrianAccidentFinalSection";
import PedestrianAccidentInjurySection from "./PedestrianAccidentInjurySection";
import PedestrianAccidentLawyerContent from "./PedestrianAccidentLawyerContent";
import PedestrianAccidentSectionTwo from "./PedestrianAccidentSectionTwo";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <PedestrianAccidentLawyerContent />
      <PedestrianAccidentSectionTwo />
      <PedestrianAccidentInjurySection />
      <PedestrianAccidentFinalSection />
    </div>
  );
}
