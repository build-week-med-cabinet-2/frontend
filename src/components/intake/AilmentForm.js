import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import { addAilment } from "../../store/actions";

const AilmentForm = ({values, errors, touched, status}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    status && dispatch(addAilment(status));
  }, [status])

  return (
    <>
      <div className="formWrapper">
        <Form>
          <label htmlFor="ailmentName">Ailment</label>
          <Field
            type="text"
            name="ailmentName"
            placeholder="Ailement Name"
            value={values.ailmentName}
          />
          {touched.ailmentName && errors.ailmentName && <p>{errors.ailmentName}</p>}
          <label htmlFor="yearsUse">Years of Pharma Use</label>
          <Field
            type="number"
            min="0"
            max="100"
            name="yearsUse"
            placeholder="0"
            value={values.yearsUse}
          />
          {touched.yearsUse && errors.yearsUse && <p>{errors.yearsUse}</p>}
          <label htmlFor="painLevel">Pain Level</label>
          <Field
            type="number"
            min="0"
            max="10"
            name="painLevel"
            placeholder="0"
            value={values.painLevel}
          />
          {touched.painLevel && errors.painLevel && <p>{errors.painLevel}</p>}
          <button type="submit">Add Ailment</button>
        </Form>
      </div>
    </>
  );
};

export default withFormik({
  mapPropsToValues({ailmentName, yearsUse, painLevel}){
    return{
      ailmentName: ailmentName || '',
      yearsUse: yearsUse || 0,
      painLevel: painLevel || 0
    }
  },
  validationSchema: Yup.object().shape({
    ailmentName: Yup.string().min(4, "Ailment Name must be at least 4 characters").required('Ailment Name required'),
    yearsUse: Yup.number().min(1, 'Pharma Use of 1 year minimum required').required('Years of Use required'),
    painLevel: Yup.number().min(1, 'Pain Level of 1 or higher required').required('Pain Level required')
  }),
  handleSubmit(values, {setStatus}){
    console.log(values);
    setStatus(values);
  }
})(AilmentForm)