import React from "react";
import { useDispatch } from "react-redux";
import { addStrainToSaved, removeStrainFromSaved } from "../../store/actions";
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col, Row} from 'reactstrap';
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
    <div>
      <Card className="Temp">
        <Row noGutters>
          <Col md={4}>
            <CardImg top height="100%" src="https://www.cannabisreports.com/images/strains/9/full_94ac38e7dbb3e8c7bcad9e7b83f56075a812350b.jpg" alt="Card image cap" />
          </Col>
          <Col md={8}>
            <CardBody>
              <CardTitle>{name}<span> - {type} - {rating}</span></CardTitle>
              <CardSubtitle>{effects}</CardSubtitle>
              <CardText>{description}</CardText>
              {props.allowSave && <Button onClick={addToSaved} className="CustomButtonOutline">Save</Button>}
              {props.allowRemove && <Button onClick={removedFromSaved} className="CustomButtonOutline">Delete</Button>}
            </CardBody>
          </Col>
        </Row>
      </Card>
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
