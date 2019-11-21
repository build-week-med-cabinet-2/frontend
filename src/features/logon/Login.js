import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Col, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import LogoAnimated from "../../common/components/LogoAnimated";

const Login = props => {
  const routeChange = () => {
    let path = "/signup";
    props.history.push(path);
  };

  return (
    <Container>
      <Col
        xs={{ size: 10, offset: 1 }}
        md={{ size: 8, offset: 2 }}
        style={{
          border: "1px solid lightgrey",
          marginTop: "80px",
          padding: "20px 50px"
        }}
      >
        <header className="AuthHeader">
          <LogoAnimated />
          <h1>Med Cabinet</h1>
        </header>
        <Form>
          <div>
            <Field
              type="text"
              name="username"
              placeholder="username..."
              className="FormTextInput"
            />
            {props.touched.username && props.errors.username && (
              <p className="error">{props.errors.username}</p>
            )}
          </div>
          <div>
            <Field
              type="password"
              name="password"
              placeholder="password..."
              className="FormTextInput"
            />
            {props.touched.password && props.errors.password && (
              <p className="error">{props.errors.password}</p>
            )}
          </div>
          <Button type="submit" color="primary" className="AuthButton">
            Login!{" "}
            <span role="img" aria-label="PalmTree">
              🌴
            </span>
          </Button>
        </Form>
        <Col xs={{ size: 11, offset: 0.5 }} className="SwitchAuthPageWrapper">
          <span>Don't have an account?</span>
          <Button
            onClick={routeChange}
            outline
            color="primary"
            className="SwitchAuthButton"
          >
            Sign up
          </Button>
        </Col>
      </Col>
    </Container>
  );
};

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, "Username must be at least 4 characters.")
      .required("Name is required."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters.")
      .required("Password is required.")
  }),
  handleSubmit(values, { setStatus, props }) {
    const URL = "https://medicalcabinet.herokuapp.com/api/auth/login";
    // const fakeToken = "this is a fake token this is a bad";

    console.log("formik submitted with values:");
    console.log(values);

    axios
      .post(`${URL}`, values)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        props.history.push("/intake/ailments");
      })
      .catch(err => console.log(err.response));
  }
})(Login);
