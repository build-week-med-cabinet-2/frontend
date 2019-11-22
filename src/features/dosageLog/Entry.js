import React from "react";
import {Col, Button, Row, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

const Entry = props => {
  const { date, strain, dosageAmount, intakeMethod } = props.entry;

  return (
    <Card style={{margin: '1rem 0'}}>
      <CardBody>
            <CardTitle style={{fontSize:'1.6rem'}}>{date}</CardTitle>
            <CardSubtitle style={{fontSize:'2rem'}}>{strain}</CardSubtitle>
            <CardText style={{fontSize:'1.4rem'}}>{dosageAmount} mg - {intakeMethod}</CardText>
        </CardBody>
    </Card>
  );
};

export default Entry;
