import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Col, Button, Input} from "reactstrap";
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
    <div className="CenteredContainerLogin" >
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
        <Button type="submit" color="primary" className="CustomButtonFilled AuthButton">
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
          className="CustomButtonOutline SwitchAuthButton"
        >
          Sign up
        </Button>
      </Col>
    </div>
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
