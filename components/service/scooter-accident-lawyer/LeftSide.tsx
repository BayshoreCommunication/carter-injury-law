import EScooterAccidentFullSection from "./EScooterAccidentFullSection";
import ScooterAccidentLawyerSection from "./ScooterAccidentLawyerSection";
import ScooterAccidentLegalStrategySection from "./ScooterAccidentLegalStrategySection";
import ScooterAccidentStepsSection from "./ScooterAccidentStepsSection";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <ScooterAccidentLawyerSection />
      <ScooterAccidentStepsSection />
      <ScooterAccidentLegalStrategySection />
      <EScooterAccidentFullSection />
    </div>
  );
}
