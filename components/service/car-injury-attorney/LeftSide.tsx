import React from "react";
import Image from "next/image";
import CarInjury from "./CarInjury";
import UninsuredClaimSection from "./UninsuredClaimSection";
import HelpAfterCrash from "./HelpAfterCrash";
import MedicalFinancialSection from "./MedicalFinancialSection";
import FindingRightLawyerSection from "./FindingRightLawyerSection";
import AutomobileAttorneySection from "./AutomobileAttorneySection";
import FatalAccidentSection from "./FatalAccidentSection";
import ExperiencedLawyersSection from "./ExperiencedLawyersSection";
import ProtectsRightsSection from "./ProtectsRightsSection";
import DavidCarterSection from "./DavidCarterSection";
import VehicleAccidentGuidanceSection from "./VehicleAccidentGuidanceSection";
import ChoosingTopLawyerSection from "./ChoosingTopLawyerSection";
import ContactSection from "./ContactSection";

export default function LeftSide() {
  return (
    <div className="max-w-[1080px]">
      <CarInjury />
      <UninsuredClaimSection />
      <HelpAfterCrash />
      <MedicalFinancialSection />
      <FindingRightLawyerSection />
      <AutomobileAttorneySection />
      <FatalAccidentSection />
      <ExperiencedLawyersSection />
      <ProtectsRightsSection />
      <DavidCarterSection />
      <VehicleAccidentGuidanceSection />
      <ChoosingTopLawyerSection />
    </div>
  );
}
