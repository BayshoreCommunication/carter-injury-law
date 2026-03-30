import PedestrianAccidentSection from "./PedestrianAccidentSection";
import PedestrianAccidentSectionFive from "./PedestrianAccidentSectionFive";
import PedestrianAccidentSectionFour from "./PedestrianAccidentSectionFour";
import PedestrianAccidentSectionSeven from "./PedestrianAccidentSectionSeven";
import PedestrianAccidentSectionSix from "./PedestrianAccidentSectionSix";
import PedestrianAccidentSectionThree from "./PedestrianAccidentSectionThree";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <PedestrianAccidentSection />
      <PedestrianAccidentSectionThree />
      <PedestrianAccidentSectionFour />
      <PedestrianAccidentSectionFive />
      <PedestrianAccidentSectionSix />
      <PedestrianAccidentSectionSeven />
    </div>
  );
}
