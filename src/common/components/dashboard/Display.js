import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
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
    <Row>
      <Col xs={6}>
        <QuickDosageEntry />
        <Log />
      </Col >
      <Col>
      <SavedStrainsList allowSearch />
      <Button
        type="submit"
        className="CustomButtonFilled"
        onClick={routeChange}
      >
        Find New Strains
      </Button>
      </Col>
    </Row>
  );
};

export default Display;
