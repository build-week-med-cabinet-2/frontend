import React from "react";
import QuickDosageEntry from "../dosageLog/QuickDosageEntry";
import SavedStrainsList from "../strainRecommender/SavedStrainsList";
import Log from "../dosageLog/Log";
export default function Display() {
  return (
    <div>
      <QuickDosageEntry />
      <Log />
      <SavedStrainsList />
    </div>
  );
}
