import React from "react";
import { useDispatch } from "react-redux";
import { addStrainToSaved, removeStrainFromSaved } from "../../store/actions";

const Strain = props => {
  const dispatch = useDispatch();
  const strain = props.strain;
  const { name, benefit, type, description, dosageRec } = strain;

  const addToSaved = e => {
    e.preventDefault();
    dispatch(addStrainToSaved(strain));
  };

  const removedFromSaved = e => {
    e.preventDefault();
    dispatch(removeStrainFromSaved(strain));
  };

  return (
    <div style={{ border: "1px solid lightgrey", width: "30rem" }}>
      <h4>{name}</h4>
      <p>{benefit}</p>
      <p>{type}</p>
      <p>{description}</p>
      <p>dosage: {dosageRec}</p>
      {/* <p>rating: {props.data.rating}</p> */}
      {/* <p>
        comments:
        {
          props.data.comments.map((comment, index) => (
            ` --- ${comment}`
          ))
        }
      </p> */}
      <button onClick={addToSaved}>Add to saved List</button>
      <button onClick={removedFromSaved}>Remove from saved List</button>
    </div>
  );
};

export default Strain;
