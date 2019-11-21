import React from "react";
import QuickDosageEntry from "../../../features/dosageLog/QuickDosageEntry";
import SavedStrainsList from "../../../features/strainRecommender/SavedStrainsList";
import Log from "../../../features/dosageLog/Log";

const Display = props => {
  const routeChange = e => {
    e.preventDefault();
    let path = "/intake/ailments";
    props.history.push(path);
  };
  return (
    <div>
      <QuickDosageEntry />
      <Log />
      <SavedStrainsList />
      <button onClick={routeChange}>Redo Intake</button>
    </div>
  );
};

export default Display;
