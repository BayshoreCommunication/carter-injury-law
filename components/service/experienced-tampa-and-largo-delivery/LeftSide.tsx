import AutoAccidentSectionOne from "./AutoAccidentSectionOne";
import DeliveryTruckCommitmentSection from "./DeliveryTruckCommitmentSection";
import DeliveryTruckPedestrianSection from "./DeliveryTruckPedestrianSection";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <AutoAccidentSectionOne />
      <DeliveryTruckPedestrianSection />
      <DeliveryTruckCommitmentSection />
    </div>
  );
}
