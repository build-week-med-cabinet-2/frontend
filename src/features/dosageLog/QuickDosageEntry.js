import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntryToLog } from "../../redux/actions";
import { withFormik, Form, Field } from "formik";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const QuickDosageEntry = props => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      dosageDate: "",
      strain: "",
      dosageAmount: 0,
      intakeMethod: ""
    },
    onSubmit: values => {
      dispatch(addEntryToLog(values));
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="dosage date">Date:</label>
        {/* <Field type="date" name="date" />
        {props.touched.date && props.errors.date && (
          <p className="error">{props.errors.date}</p>
        )} */}
        <input
          type="date"
          name="dosageDate"
          id="dosageDate"
          onChange={formik.handleChange}
          value={formik.values.dosageDate}
        />

        <label htmlFor="strain">Strain:</label>
        {/* <Field type="text" name="strain" />
        {props.touched.strain && props.errors.strain && (
          <p className="error">{props.errors.strain}</p>
        )} */}
        <input
          type="text"
          name="strain"
          id="strain"
          onChange={formik.handleChange}
          value={formik.values.strain}
        />

        <label htmlFor="Dosage Amount">Dosage Amount:</label>
        {/* <Field type="number" name="dosageAmount" />
        {props.touched.dosageAmount && props.errors.dosageAmount && (
          <p className="error">{props.errors.dosageAmount}</p>
        )} */}
        <input
          type="number"
          name="dosageAmount"
          id="dosageAmount"
          onChange={formik.handleChange}
          value={formik.values.dosageAmount}
        />

        <label htmlFor="intake method">Intake Method:</label>
        {/* <Field type="text" name="intakeMethod" />
        {props.touched.intakeMethod && props.errors.intakeMethod && (
          <p className="error">{props.errors.intakeMethod}</p>
        )} */}
        <input
          type="text"
          name="intakeMethod"
          id="intakeMethod"
          onChange={formik.handleChange}
          value={formik.values.intakeMethod}
        />

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

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
    date: Yup.date().required("Date is required."),
    strain: Yup.string()
      .min(2, "Strain must be at least 2 characters.")
      .required("Strain is required."),
    dosageAmount: Yup.number().required("Dosage amount is required."),
    intakeMethod: Yup.string()
      .min(2, "Intake method must be at least 2 characters.")
      .required("Intake method is required.")
  }),
  handleSubmit(values, { setStatus, props }) {}
})(QuickDosageEntry);
