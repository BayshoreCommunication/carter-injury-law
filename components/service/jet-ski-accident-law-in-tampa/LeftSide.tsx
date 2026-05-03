import JetSkiAccidentSectionOne from "@/components/service/jet-ski-accident-law-in-tampa/JetSkiAccidentSectionOne";
import JetSkiAccidentSectionTwo from "@/components/service/jet-ski-accident-law-in-tampa/JetSkiAccidentSectionTwo";
import JetSkiAccidentSectionThree from "./JetSkiAccidentSectionThree";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <JetSkiAccidentSectionOne />
      <JetSkiAccidentSectionTwo />
      <JetSkiAccidentSectionThree />
    </div>
  );
}
