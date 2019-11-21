import React from "react";
import AilmentForm from "./AilmentForm";
import { AilmentList } from "./AilmentList";

export const Ailments = props => {
  const routeChange = e => {
    e.preventDefault();
    let path = "/intake/recommendations";
    props.history.push(path);
  };
  return (
    <>
      <AilmentForm />
      <AilmentList />
      <div>
        <button onClick={routeChange}>Continue</button>
      </div>
    </>
  );
};
