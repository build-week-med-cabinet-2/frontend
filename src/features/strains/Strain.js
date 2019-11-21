import React from "react";
import { useDispatch } from "react-redux";
import {
  saveRecommendation,
  removeRecommendation
} from "../strainRecommendations/recommendationSlice";
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
  const {
    strain_name,
    strain_type,
    rating,
    effects,
    flavor,
    strain_desc
  } = strain;
  //
  const addToSaved = e => {
    e.preventDefault();
    dispatch(saveRecommendation(strain));
    console.log(strain);
  };

  const removedFromSaved = e => {
    e.preventDefault();
    dispatch(removeRecommendation(strain));
  };

  return (
    <div style={{ border: "1px solid lightgrey", width: "30rem" }}>
      <h4>{strain_name}</h4>
      <p>Strain Type: {strain_type}</p>
      {/* no rating yet */}
      {/* <p>{rating}</p> */}
      <p>Effects: {effects}</p>
      <p>Flavor: {flavor}</p>
      <p> Description: {strain_desc}</p>
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
