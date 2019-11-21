import React from "react";
import Strains from "./Strains";
import SavedStrainsList from "./SavedStrainsList";

import styled from "styled-components";

const QuickFlexWrap = styled.div`
  display: flex;
`;

const Recommendations = props => {
  const routeChange = e => {
    e.preventDefault();
    let path = "/dashboard";
    props.history.push(path);
  };
  return (
    <QuickFlexWrap>
      <Strains allowRemove={true}/>
      <SavedStrainsList />
      <button onClick={routeChange}>Continue</button>
    </QuickFlexWrap>
  );
};
export default Recommendations;
