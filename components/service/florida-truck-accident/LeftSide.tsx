import FloridaTruckAccidentPage from "./FloridaTruckAccidentPage";
import TruckAccidentDamagesSection from "./TruckAccidentDamagesSection";
import TruckAccidentSupportSection from "./TruckAccidentSupportSection";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <FloridaTruckAccidentPage />
      <TruckAccidentSupportSection />
      <TruckAccidentDamagesSection />
    </div>
  );
}
