import React, { useState } from "react";
import axios from "axios";
import { Container, Col, Button, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import LogoAnimated from "../../common/components/LogoAnimated";

const Register = props => {
  const routeChange = () => {
    let path = "/";
    props.history.push(path);
  };

  return (
    <div className="CenteredContainerLogin">
      <header className="AuthHeader">
        <LogoAnimated />
        <h1>Med Cabinet</h1>
      </header>
      <Form>
        <div>
          <Input
            type="text"
            name="username"
            tag={Field}
            placeholder="username..."
            className="FormTextInput"
            invalid={props.touched.username && props.errors.username}
          />
          {props.touched.username && props.errors.username && (
            <p className="error">{props.errors.username}</p>
          )}
        </div>

        <div>
          <Input
            type="password"
            name="password"
            tag={Field}
            placeholder="password..."
            className="FormTextInput"
            invalid={props.touched.password && props.errors.password}
          />
          {props.touched.password && props.errors.password && (
            <p className="error">{props.errors.password}</p>
          )}
        </div>

        <div>
          <Input
            type="password"
            name="repeatPassword"
            tag={Field}
            placeholder="repeat password..."
            className="FormTextInput"
            invalid={
              props.touched.repeatPassword && props.errors.repeatPassword
            }
          />
          {props.touched.repeatPassword && props.errors.repeatPassword && (
            <p className="error">{props.errors.repeatPassword}</p>
          )}
        </div>

        <Button
          type="submit"
          color="primary"
          className="CustomButtonFilled AuthButton"
        >
          Register!{" "}
          <span role="img" aria-label="PalmTree">
            🌴
          </span>
        </Button>
      </Form>
      <Col xs={{ size: 11, offset: 0.5 }} className="SwitchAuthPageWrapper">
        <span>Already have an account?</span>
        <Button
          outline
          onClick={routeChange}
          color="primary"
          className="CustomButtonOutline SwitchAuthButton"
        >
          Login
        </Button>
      </Col>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ username, password, repeatPassword }) {
    return {
      username: username || "",
      password: password || "",
      repeatPassword: repeatPassword || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(4, "Username must be at least 4 characters.")
      .required("Name is required."),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters.")
      .required("Password is required."),
    repeatPassword: Yup.string()
      .min(6, "Repeat Password must be at least 6 characters.")
      .required("Repeat Password is required.")
  }),
  handleSubmit(values, { setStatus, props }) {
    const URL = "https://med-cabinet-backend.herokuapp.com/api/auth/register";
    const newUser = {
      username: values.username,
      password: values.password
    };
    // const fakeToken = "this is a fake token this is bad";
    axios
      .post(`${URL}`, newUser)
      .then(res => {
        console.log(`success`, res);
        props.history.push("/");
      })
      .catch(err => console.log(err.response));
  }
})(Register);
