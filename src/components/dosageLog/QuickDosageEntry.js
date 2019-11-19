import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const QuickDosageEntry = props => {
  return (
    <>
      <Form>
        <label htmlFor="dosage date">Date:</label>
        <Field
          type="date"
          name="date"
        />
        {props.touched.date && props.errors.date && (<p className="error">{props.errors.date}</p>)}
        
        <label htmlFor="strain">Strain:</label>
        <Field
          type="text"
          name="strain"
        />
        {props.touched.strain && props.errors.strain && (<p className="error">{props.errors.strain}</p>)}
        
        <label htmlFor="Dosage Amount">Dosage Amount:</label>
        <Field
          type="number"
          name="dosageAmount"
        />
        {props.touched.dosageAmount && props.errors.dosageAmount && (<p className="error">{props.errors.dosageAmount}</p>)}

        <label htmlFor="intake method">Intake Method:</label>
        <Field
          type="text"
          name="intakeMethod"
        />
        {props.touched.intakeMethod && props.errors.intakeMethod && (<p className="error">{props.errors.intakeMethod}</p>)}

        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
}

export default withFormik({
  mapPropsToValues({ date, strain, dosageAmount, intakeMethod }) {
    return {
      date: date || "",
      strain: strain || "",
      dosageAmount: dosageAmount || "",
      intakeMethod: intakeMethod || ""
    };
  },
  validationSchema: Yup.object().shape({
    date: Yup.date()
      .required("Date is required."),
    strain: Yup.string()
      .min(2, "Strain must be at least 2 characters.")
      .required("Strain is required."),
    dosageAmount: Yup.number()
      .required("Dosage amount is required."),
    intakeMethod: Yup.string()
      .min(2, "Intake method must be at least 2 characters.")
      .required("Intake method is required.")
  }),
  handleSubmit(values, { setStatus, props }) {
    console.log("formik submitted with values:");
    console.log(values);
  }
})(QuickDosageEntry);