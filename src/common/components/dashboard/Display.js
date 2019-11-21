import React from "react";
import QuickDosageEntry from "../dosageLog/QuickDosageEntry";
import SavedStrainsList from "../strainRecommender/SavedStrainsList";
import Log from "../dosageLog/Log";

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
