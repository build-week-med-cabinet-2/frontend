import React from "react";

export default function Strain(props) {
  return (
    <div style={{ border: "1px solid lightgrey", width: "30rem" }}>
      <h4>{props.data.name}</h4>
      <p>{props.data.benefit}</p>
      <p>{props.data.type}</p>
      <p>{props.data.description}</p>
      <p>dosage: {props.data.dosageRec}</p>
      {/* <p>rating: {props.data.rating}</p> */}
      {/* <p>
        comments:
        {
          props.data.comments.map((comment, index) => (
            ` --- ${comment}`
          ))
        }
      </p> */}
    </div>
  );
}
