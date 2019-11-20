import React from "react";
import { useSelector } from "react-redux";
import Strain from "./Strain";

const SavedStrainsList = () => {
  const savedStrains = useSelector(state => state.strains.savedStrains);

  return (
    <>
      <h2>Saved Strains</h2>
      {savedStrains.map((item, index) => (
        <Strain strain={item} key={index} />
      ))}
    </>
  );
};

export default SavedStrainsList;
