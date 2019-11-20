import React from "react";
import Strains from "./Strains";
import SavedStrainsList from "./SavedStrainsList";

import styled from "styled-components";

const QuickFlexWrap = styled.div`
  display: flex;
`;

const Recommendations = () => {
  return (
    <QuickFlexWrap>
      <Strains />
      <SavedStrainsList />
    </QuickFlexWrap>
  );
};
export default Recommendations;
