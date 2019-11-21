import React from "react";
import AilmentForm from "./AilmentForm";
import { AilmentList } from "./AilmentList";
import { Container, Col, Button} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export const Ailments = props => {
  const routeChange = e => {
    e.preventDefault();
    let path = "/intake/recommendations";
    props.history.push(path);
  };
  return (
    <>
      <AilmentForm />
      <hr/>
      <AilmentList />
      <hr/>
      <div>
        <Button onClick={routeChange} className="CustomButtonFilled">Continue</Button>
      </div>
    </>
  );
};
