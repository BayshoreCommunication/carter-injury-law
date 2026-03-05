import TampaPedestrianAccidentLawyerPage from "./TampaPedestrianAccidentLawyerPage";
import TampaPedestrianAccidentLawyerPage1 from "./TampaPedestrianAccidentLawyerPage1";
import TampaPedestrianAccidentLawyerPage2 from "./TampaPedestrianAccidentLawyerPage2";
import TampaPedestrianAccidentLawyerPage3 from "./TampaPedestrianAccidentLawyerPage3";

export default function LeftSide() {
  return (
    <div className="max-w-[780px]">
      <TampaPedestrianAccidentLawyerPage />
      <TampaPedestrianAccidentLawyerPage1 />
      <TampaPedestrianAccidentLawyerPage2 />
      <TampaPedestrianAccidentLawyerPage3 />
    </div>
  );
}
