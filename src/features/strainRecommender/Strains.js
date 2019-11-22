import React from "react";
import { useSelector } from "react-redux";
import Strain from "./Strain";

export default function Strains(props) {
  const strains = useSelector(state => state.strains.strains);
  return (
    <div>
      {strains.map((item, index) => (
        <Strain strain={item} key={index} allowSave/>
      ))}
    </div>
  );
}
