import CarInjuryPage from "./CarInjuryPage";
import CarInjuryPage1 from "./CarInjuryPage1";
import CarInjuryPage2 from "./CarInjuryPage2";
import CarInjuryPage3 from "./CarInjuryPage3";
import CarInjuryPage4 from "./CarInjuryPage4";
import CarInjuryPage5 from "./CarInjuryPage5";

export default function LeftSide() {
  return (
    <div className="max-w-[1080px]">
      <CarInjuryPage />
      <CarInjuryPage1 />
      <CarInjuryPage2 />
      <CarInjuryPage3 />
      <CarInjuryPage4 />
      <CarInjuryPage5 />
    </div>
  );
}
