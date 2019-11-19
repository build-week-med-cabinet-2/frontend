import React from "react";
import { useSelector } from "react-redux";
import Strain from "./Strain";

const Strains = () => {
  const strains = useSelector(state => state.strains.strains);
  console.log(strains);
  return <div></div>;
};

export default Strains;
