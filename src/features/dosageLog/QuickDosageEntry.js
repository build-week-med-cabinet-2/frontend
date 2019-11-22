import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addEntryToLog } from "../../redux/actions";
import { withFormik, Form, Field } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Col,
  Button,
  Form as StrapForm,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const QuickDosageEntry = props => {
  const dispatch = useDispatch();

  // const formik = useFormik({
  //   initialValues: {
  //     dosageDate: "",
  //     strain: "",
  //     dosageAmount: 0,
  //     intakeMethod: ""
  //   },
  //   onSubmit: values => {
  //     dispatch(addEntryToLog(values));
  //   }
  // });

  useEffect(() => {
    if(props.status){
      dispatch(addEntryToLog(props.values));
    } 
  },[props.status])

  return (
      <Form>
      <h2>Log Dosage</h2>
        <FormGroup row>
          <Label for="dosageDate" sm={2}>
            Date
          </Label>
          <Col sm={10}>
            <Input
              tag={Field}
              type="date"
              name="date"
              id="date"
              // invalid={props.touched.date && props.errors.date}
              // onChange={formik.handleChange}
              value={props.values.date}
            />
            {props.touched.date && props.errors.date && (
              <p className="error">{props.errors.date}</p>
            )}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="strain" sm={2}>
            Strain
          </Label>
          <Col sm={10}>
            <Input
              tag={Field}
              type="text"
              name="strain"
              id="strain"
              // invalid={props.touched.strain && props.errors.strain}
              // onChange={formik.handleChange}
              value={props.values.strain}
            />
            {props.touched.strain && props.errors.strain && (
              <p className="error">{props.errors.strain}</p>
            )}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="dosageAmount" sm={2}>
            Dosage
          </Label>
          <Col sm={10}>
            <Input
              tag={Field}
              type="number"
              name="dosageAmount"
              id="dosageAmount"
              // invalid={props.touched.dosageAmount && props.errors.dosageAmount}
              // onChange={formik.handleChange}
              value={props.values.dosageAmount}
            />
            {props.touched.dosageAmount && props.errors.dosageAmount && (
              <p className="error">{props.errors.dosageAmount}</p>
            )}
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="intakeMethod" sm={2}>
            Intake Method
          </Label>
          <Col sm={10}>
            <Input
              tag={Field}
              type="text"
              name="intakeMethod"
              id="intakeMethod"
              // invalid={props.touched.intakeMethod && props.errors.intakeMethod}
              // onChange={formik.handleChange}
              value={props.values.intakeMethod}
            />
            {props.touched.intakeMethod && props.errors.intakeMethod && (
              <p className="error">{props.errors.intakeMethod}</p>
            )}
          </Col>
        </FormGroup>

        <Button type="submit" className="CustomButtonOutline">
          Submit
        </Button>
        </Form>

  );
};

export default withFormik({
  mapPropsToValues({ date, strain, dosageAmount, intakeMethod }) {
    return {
      date: date || Date.now(),
      strain: strain || "",
      dosageAmount: dosageAmount || "",
      intakeMethod: intakeMethod || ""
    };
  },
  validationSchema: Yup.object().shape({
    date: Yup.date().required("Date is required."),
    strain: Yup.string()
      .min(2, "Strain must be at least 2 characters.")
      .required("Strain is required."),
    dosageAmount: Yup.number().required("Dosage amount is required."),
    intakeMethod: Yup.string()
      .min(2, "Intake method must be at least 2 characters.")
      .required("Intake method is required.")
  }),
  handleSubmit(values, { setStatus, props }) {
    setStatus(values);
  }
})(QuickDosageEntry);
