import React from "react";
import Strains from "../strains/Strains";
import SavedStrainsList from "./SavedStrainsList";
import { Col, Row, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import styled from "styled-components";

const RecommendationsLayout = styled.div`
  /* display: flex; */
`;

const Recommendations = props => {
  const routeChange = e => {
    e.preventDefault();
    let path = "/dashboard";
    props.history.push(path);
  };
  return (
    <RecommendationsLayout>
      <Row>
        <Col xs={5}>
          <h2>Recommendations</h2>
          <Strains allowRemove={true} />
        </Col>
        <Col xs={6}>
          <SavedStrainsList />
        </Col>
        <Col xs={1}>
          <Button
            onClick={routeChange}
            className="CustomButtonFilled ContinueButton"
          >
            Continue
          </Button>
        </Col>
      </Row>
    </RecommendationsLayout>
  );
};
export default Recommendations;
