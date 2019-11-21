import React from "react";
import {Col, Button, Row, Card} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

const Entry = props => {
  const { dosageDate, strain, dosageAmount, intakeMethod } = props.entry;

  return (
    <Card>
      <p>Dose info from dose on {dosageDate}</p>
      <p>{strain}</p>
      <p>{dosageAmount}</p>
      <p>{intakeMethod}</p>
    </Card>
  );
};

export default Entry;
