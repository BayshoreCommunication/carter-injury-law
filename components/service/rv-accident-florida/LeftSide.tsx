import RVAccidentFloridaContent from "./RVAccidentFloridaContent";
import RVAccidentFloridaSection from "./RVAccidentFloridaSection";
import RVAccidentFloridaGuide from "./RVAccidentGuideSection";
import RVAccidentFloridaPage from "./RVAccidentPage";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <RVAccidentFloridaPage />
      <RVAccidentFloridaGuide />
      <RVAccidentFloridaContent />
      <RVAccidentFloridaSection />
    </div>
  );
}
