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
    <Card className="Temp">
      <Row noGutters>
        <Col md={4}>
          <CardImg top height="100%" src="https://www.cannabisreports.com/images/strains/9/full_94ac38e7dbb3e8c7bcad9e7b83f56075a812350b.jpg" alt="Card image cap" />
        </Col>
        <Col md={8}>
          <CardBody>
            <CardTitle style={{fontSize:'1.6rem'}}>{name}<span style={{fontSize:'1.4rem'}}> - {type} - {rating}</span></CardTitle>
            <CardSubtitle>{effects}</CardSubtitle>
            <CardText>{description}</CardText>
            {props.allowSave && <Button onClick={addToSaved} className="CustomButtonOutline">Save</Button>}
            {props.allowRemove && <Button onClick={removedFromSaved} className="CustomButtonOutline">Delete</Button>}
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
};

export default Strain;
