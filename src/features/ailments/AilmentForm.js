import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withFormik, Form, Field } from "formik";
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
import { addAilment } from "../../redux/actions";

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
      <div className="FormWrapper">
        <Form>
          <h3>
            Please enter information of an ailment you would like help with.
          </h3>
          <FormGroup row>
            <Label for="ailmentName" sm={2}>
              Ailment
            </Label>
            <Col sm={10}>
              <Input
                tag={Field}
                component="select"
                name="ailmentName"
                id="ailmentName"
                invalid={touched.ailmentName && errors.ailmentName}
              >
                <option disabled value="select">
                  Select Ailment
                </option>
                <option value="pain">Pain</option>
                <option value="stress">Stress</option>
                <option value="insomnia">Insomnia</option>
                <option value="other">Other (please describe below)</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="severity" sm={2}>
              Severity
            </Label>
            <Col sm={10}>
              <Input
                tag={Field}
                component="select"
                name="severity"
                id="severity"
              >
                <option disabled value="select">
                  Select Severity
                </option>
                <option value="mild">Mild</option>
                <option value="moderate">Moderate</option>
                <option value="severe">Severe</option>
              </Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label for="description" sm={2}>
              Description (optional)
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="Description..."
              />
            </Col>
          </FormGroup>

          <Button type="submit" className="CustomButtonOutline">
            Submit
          </Button>
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
