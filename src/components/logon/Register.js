import React, { useState } from "react";
import axios from "axios";
import {Container, Row, Col, Button, Form, Input, Card} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";

import LogoAnimated from '.././LogoAnimated';

const Register = props => {
  const initialValues = {
    username: "",
    password: "",
    repeatPassword: ""
  };

  const [credentials, setCredentials] = useState(initialValues);

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const submitRegister = e => {
    e.preventDefault();
    const URL = "https://ourheroku.database/";
    const fakeToken = "this is a fake token this is bad";
    // axios
    //   .post(`${URL}login`, credentials)
    //   .then(res => {
    //     localStorage.setItem("token", fakeToken);
    //     props.history.push("/helloworld");
    //   })
    //   .catch(err => console.log(err.response));
    localStorage.setItem("token", fakeToken);
    props.history.push("/intake/ailments");
    setCredentials(initialValues);
  };

  const routeChange = () => {
    let path = "/";
    props.history.push(path);
  };

  return (
    <Container className="Register-Form-Wrapper">
      <Card>

      </Card>
      <Col xs={{ size: 10, offset: 1 }} md={{size: 8, offset: 2}} style={{border:'1px solid lightgrey', marginTop:'80px', padding:'20px 50px'}}>
        <header className='AuthHeader'>
          <LogoAnimated />
          <h1>Med Cabinet</h1>
        </header>
        <Form onSubmit={submitRegister}>
          <label htmlFor="username"/>
          <Input
            type="text"
            name="username"
            onChange={handleChange}
            value={credentials.username}
            placeholder="username..."
            className="FormTextInput"
          />
          <label htmlFor="password"/>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
            placeholder="password..."
            className="FormTextInput"
          />
          <label htmlFor="repeat password"/>
          <Input
            type="password"
            name="repeatPassword"
            onChange={handleChange}
            value={credentials.repeatPassword}
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
          <Button outline onClick={routeChange} color="primary" className="SwitchAuthButton">Login</Button>
        </Col>
      </Col>
    </Container>
  );
};

export default Register;
