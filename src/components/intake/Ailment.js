import React from "react";
import { useDispatch } from "react-redux";
import { removeAilment } from "../../store/actions";
import { TiDelete, TiEdit } from "react-icons/ti";

export const Ailment = props => {
  const { ailment } = props;
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
      <h4>Ailment: {ailment.ailmentName}</h4>
      <h4>Years use: {ailment.yearsUse}</h4>
      <h4>Pain Level: {ailment.painLevel}</h4>
    </>
  );
};
