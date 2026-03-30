import BusAccidentFullContent from "./BusAccidentFullContent";
import BusAccidentSectionFive from "./BusAccidentSectionFive";
import BusAccidentSectionFour from "./BusAccidentSectionFour";
import BusAccidentSectionThree from "./BusAccidentSectionThree";
import BusAccidentSectionTwo from "./BusAccidentSectionTwo";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <BusAccidentFullContent />
      <BusAccidentSectionTwo />
      <BusAccidentSectionThree />
      <BusAccidentSectionFour />
      <BusAccidentSectionFive />
    </div>
  );
}
