import React from "react";
import { useDispatch } from "react-redux";
import { removeAilment } from "../../redux/actions";
import { TiDelete, TiEdit } from "react-icons/ti";

export const Ailment = props => {
  const { ailment } = props;
  const { ailmentName, severity, pharmaUse, description } = ailment;
  const dispatch = useDispatch();

  const handleRemoveAilment = e => {
    e.preventDefault();
    dispatch(removeAilment(ailment));
  };

  return (
    <>
      <button onClick={handleRemoveAilment}>
        <TiDelete />
      </button>
      <button>
        <TiEdit />
      </button>
      <h4>Ailment: {ailmentName}</h4>
      <h4>Years use: {pharmaUse}</h4>
      <h4>Pain Level: {severity}</h4>
      <p>Description: {description}</p>
    </>
  );
};
