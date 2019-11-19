import React, { useState } from "react";
import axios from "axios";
import {Container, Col, Button} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import LogoAnimated from '.././LogoAnimated';

const Register = props => {
  const routeChange = () => {
    let path = "/";
    props.history.push(path);
  };

  return (
    <Container className="Register-Form-Wrapper">
      <Col xs={{ size: 10, offset: 1 }} md={{size: 8, offset: 2}} style={{border:'1px solid lightgrey', marginTop:'80px', padding:'20px 50px'}}>
        <header className='AuthHeader'>
          <LogoAnimated />
          <h1>Med Cabinet</h1>
        </header>
        <Form>
          <label htmlFor="username" />
          <Field
            type="text"
            name="username"
            placeholder="username..."
            className="FormTextInput"
          />
          <label htmlFor="password" />
          <Field
            type="password"
            name="password"
            placeholder="password..."
            className="FormTextInput"
          />
          <label htmlFor="repeat password" />
          <Field
            type="password"
            name="repeatPassword"
            placeholder="repeat password..."
            className="FormTextInput"
          />
          <Button type="submit" color="primary" className="AuthButton">
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
            className="SwitchAuthButton"
          >
            Login
          </Button>
        </Col>
      </Col>
    </Container>
  );
};

export default withFormik({
  mapPropsToValues({username, password, repeatPassword}){
    return{
      username: username || '',
      password: password || '',
      repeatPassword: repeatPassword || '',
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().min(4,'Username must be at least 4 characters.').required('Name is required.'),
    password: Yup.string().min(6, 'Password must be at least 6 characters.').required('Password is required.'),
    password: Yup.string().min(6, 'Password must be at least 6 characters.').required('Password is required.'),
  }),
  handleSubmit(values, {setStatus, props}){
    const URL = "https://medicalcabinet.herokuapp.com/api/auth/register";
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
})(Register)
