import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ClimbingBoxLoader } from "react-spinners";
import { getStrains } from "./strainsSlice";
import Strain from "./Strain";

export default function Strains(props) {
  const strains = useSelector(state => state.strains.strains);
  const isFetching = useSelector(state => state.strains.isFetching);
  const error = useSelector(state => state.strains.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStrains());
  }, []);

  console.log(strains);

  return (
    <>
      {isFetching ? (
        <ClimbingBoxLoader />
      ) : (
        <>
          {error.length ? error && <p>{error}</p> : <></>}
          {strains.map((item, index) => (
            <Strain strain={item} key={index} allowSave />
          ))}
        </>
      )}
    </>
  );
}
