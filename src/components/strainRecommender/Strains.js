import React from "react";
import { useSelector } from "react-redux";
import Strain from "./Strain";

export default function Strains() {
  const strains = useSelector(state => state.strains.strains);
  console.log(strains);
  return <div></div>;
}
