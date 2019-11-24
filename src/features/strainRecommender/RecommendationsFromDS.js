import React, { useState } from "react";

const RecommendationsFromDs = () => {
  const [strainIds, setStrainIds] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0 });

  return (
    <>
      <h4 style={{ margin: "1rem 0" }}>Recommended strain ids</h4>
      <h4>{`${strainIds["0"]}, ${strainIds["1"]}, ${strainIds["2"]}, ${strainIds["3"]}, ${strainIds["4"]}`}</h4>
      <h4 style={{ margin: "1rem 0" }}>
        {`... can be looked up `}
        <a href="https://www.kaggle.com/nvisagan/cannabis-strains-features">
          HERE
        </a>
      </h4>
    </>
  );
};

export default RecommendationsFromDs;
