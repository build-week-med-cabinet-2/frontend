import React from "react";
import { useDispatch } from "react-redux";
import { addStrainToSaved, removeStrainFromSaved } from "../../redux/actions";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col,
  Row
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const Strain = props => {
  const dispatch = useDispatch();
  const strain = props.strain;
  const { name, type, rating, effects, description } = strain;

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
      <p>{type}</p>
      <p>{rating}</p>
      <p>{effects}</p>
      <p>{description}</p>
      {/* <p>
        comments:
        {
          props.data.comments.map((comment, index) => (
            ` --- ${comment}`
          ))
        }
      </p> */}
      {props.allowSave && (
        <button onClick={addToSaved}>Add to saved List</button>
      )}
      {props.allowRemove && (
        <button onClick={removedFromSaved}>Remove from saved List</button>
      )}
    </div>
    // <div style={{ border: "1px solid lightgrey", width: "30rem" }}>
    //   <h4>{name}</h4>
    //   <p>{type}</p>
    //   <p>{rating}</p>
    //   <p>{effects}</p>
    //   <p>{description}</p>
    //   {props.allowSave && <button onClick={addToSaved}>Add to saved List</button>}
    //   {props.allowRemove && <button onClick={removedFromSaved}>Remove from saved List</button>}
    // </div>
  );
};

export default Strain;
