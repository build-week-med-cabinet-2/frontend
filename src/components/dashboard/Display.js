import React from "react";
import {Container, Col, Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

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
      <SavedStrainsList allowSearch/>
      <Button type="submit" className="CustomButtonFilled" onClick={routeChange}>Redo Intake</Button>
    </div>
  );
};

export default Display;
