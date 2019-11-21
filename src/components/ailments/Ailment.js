import React from "react";
import { useDispatch } from "react-redux";
import { removeAilment } from "../../store/actions";
import { TiDelete, TiEdit } from "react-icons/ti";
import {Col, Button, Row, Card} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import { grey } from "ansi-colors";

export const Ailment = props => {
  const { ailment } = props;
  const { ailmentName, severity, pharmaUse, description } = ailment;
  const dispatch = useDispatch();

  const handleRemoveAilment = e => {
    e.preventDefault();
    dispatch(removeAilment(ailment));
  };

  return (
    <Card style={{margin:'1rem 0', padding:'0'}}>
      <Row noGutters>
            <Col xs={1} style={{padding: '5px 1rem'}}>
              <Button onClick={handleRemoveAilment} className="CustomButtonOutline"  style={{fontSize:'2.3rem', border:'1px solid white'}}>
                <TiDelete />
              </Button>
            </Col>
            <Col xs={11} style={{padding: '1rem 1rem'}}>
              <h4>{severity} {ailmentName}</h4>
              <p>Description: {description}</p>
            </Col>
            {/* <Button>
              <TiEdit />
            </Button> */}
      </Row>
    </Card>
    
  );
};
