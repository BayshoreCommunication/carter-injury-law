import FloridaMotorcycleAccidentPage from "./FloridaMotorcycleAccidentPage";
import FloridaMotorcycleAccidentPage1 from "./FloridaMotorcycleAccidentPage1";
import MotorcycleAccidentAdvancedSection from "./MotorcycleAccidentAdvancedSection";
import MotorcycleAccidentCredibilitySection from "./MotorcycleAccidentCredibilitySection";
import MotorcycleAccidentFinalSection from "./MotorcycleAccidentFinalSection";
import MotorcycleConsultationSection from "./MotorcycleConsultationSection";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <FloridaMotorcycleAccidentPage />
      <FloridaMotorcycleAccidentPage1 />
      <MotorcycleConsultationSection />
      <MotorcycleAccidentCredibilitySection />
      <MotorcycleAccidentAdvancedSection />
      <MotorcycleAccidentFinalSection />
    </div>
  );
}
