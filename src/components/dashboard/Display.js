import React from "react";
import QuickDosageEntry from "../dosageLog/QuickDosageEntry";
import SavedStrainsList from "../strainRecommender/SavedStrainsList";

export default function Display() {
  return (
    <div>
      <QuickDosageEntry />
      <SavedStrainsList />
    </div>
  );
}
