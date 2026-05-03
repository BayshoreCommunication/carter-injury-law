import BoatAccidentSectionFour from "./BoatAccidentSectionFour";
import BoatAccidentSectionOne from "./BoatAccidentSectionOne";
import BoatAccidentSectionTwo from "./BoatAccidentSectionTwo";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <BoatAccidentSectionOne />
      <BoatAccidentSectionTwo />
      <BoatAccidentSectionFour />
    </div>
  );
}
