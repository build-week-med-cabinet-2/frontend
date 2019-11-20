import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withFormik, Form, Field, Formik } from "formik";
import * as Yup from "yup";

import { addAilment } from "../../store/actions";

const AilmentForm = ({ values, errors, touched, status, handleChange }) => {
  const dispatch = useDispatch();
  const initialSelect = "pain";
  const [selectedValue, setSelectedValue] = useState(initialSelect);

  const setInitialSelect = () => {
    setSelectedValue(initialSelect);
  };
  const handleSelectChange = e => {
    setSelectedValue(e.target.value);
    console.log(selectedValue);
  };

  useEffect(() => {
    status && dispatch(addAilment(status));
  }, [status]);

  return (
    <>
      <div className="formWrapper" style={{ margin: "40px" }}>
        <Form>
          <br />
          <h3>Enter information of an ailment you would like help with:</h3>
          <label htmlFor="ailment">Ailment</label>
          <br />
          <select
            name="ailmentName"
            value={values.ailmentName}
            onChange={handleChange}
          >
            <option disabled value="select">
              Select Ailment
            </option>
            <option value="pain">Pain</option>
            <option value="stress">Stress</option>
            <option value="insomnia">Insomnia</option>
            <option value="other">Other (please describe below)</option>
            {errors.color && touched.color && (
              <div className="input-feedback">{errors.color}</div>
            )}
          </select>
          {/* <Field
            as="select"
            name="ailment"
            value={values.ailment}
            onChange={Formik.handleSelectChange}
          >
            <option disabled value="select">
              Select Ailment
            </option>
            <option value="pain">Pain</option>
            <option value="stress">Stress</option>
            <option value="insomnia">Insomnia</option>
            <option value="other">Other (please describe below)</option>
          </Field> */}
          {/* {touched.yearsUse && errors.yearsUse && <p>{errors.yearsUse}</p>} */}

          <br />
          <br />
          <label htmlFor="severity">Severity</label>
          <br />
          <Field as="select" name="severity" value={values.severity}>
            <option disabled value="select">
              Select Severity
            </option>
            <option value="low">Mild</option>
            <option value="medium">Moderate</option>
            <option value="high">Severe</option>
          </Field>
          {/* {touched.yearsUse && errors.yearsUse && <p>{errors.yearsUse}</p>} */}
          <br />
          <br />

          <label htmlFor="pharmaUse">Years of Pharma Use</label>
          <br />
          <Field
            type="number"
            min="0"
            max="100"
            name="pharmaUse"
            placeholder="0"
            value={values.pharmaUse}
          />
          {/* {touched.yearsUse && errors.yearsUse && <p>{errors.yearsUse}</p>} */}
          <br />
          <br />

          <label htmlFor="description">Description (optional)</label>
          <br />
          <Field
            component="textarea"
            name="description"
            placeholder="Description..."
            value={values.description}
            style={{ minWidth: "30rem", minHeight: "5rem" }}
          />
          {/* {touched.ailmentName && errors.ailmentName && <p>{errors.ailmentName}</p>} */}
          <br />
          <br />

          <button type="submit">Submit</button>
          <hr />
        </Form>
      </div>
    </>
  );
};

export default withFormik({
  mapPropsToValues({ ailmentName, severity, pharmaUse, description }) {
    return {
      ailmentName: ailmentName || "select",
      severity: severity || "select",
      pharmaUse: pharmaUse || 0,
      description: description || ""
    };
  },
  validationSchema: Yup.object().shape({
    ailmentName: Yup.string().required("Ailment required"),
    severity: Yup.string().required("Severity required"),
    pharmaUse: Yup.number().required("Years of Pharma Use required"),
    description: Yup.string()
  }),
  handleSubmit(values, { setStatus }) {
    console.log(values);
    const ailmentString = `${values.severity} ${values.ailment} with ${values.pharmaUse} years of pharma use : ${values.description}`;
    console.log(ailmentString);
    setStatus(values);
  }
})(AilmentForm);
