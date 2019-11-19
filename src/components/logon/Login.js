import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button, Form, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const Login = props => {
  const initialValues = {
    username: "",
    password: ""
  };

  const [credentials, setCredentials] = useState(initialValues);
  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const submitLogin = e => {
    e.preventDefault();
    const URL = "https://ourheroku.database/";
    const fakeToken = "this is a fake token this is a bad";
    // axios
    //   .post(`${URL}login`, credentials)
    //   .then(res => {
    //     localStorage.setItem("token", fakeToken);
    //     props.history.push("/helloworld");
    //   })
    //   .catch(err => console.log(err.response));
    localStorage.setItem("token", fakeToken);
    props.history.push("/helloworld");
    setCredentials(initialValues);
  };

  const routeChange = () => {
    let path = "/signup";
    props.history.push(path);
  };

  return (
    <Container>
      <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
        <header className="AuthHeader">
          <h1>Med Cabinet</h1>
        </header>
        <Form onSubmit={submitLogin}>
          <div>
            <label htmlFor="username"></label>
            <Input
              type="text"
              name="username"
              onChange={handleChange}
              value={credentials.username}
              placeholder="username..."
              className="FormTextInput"
            />
          </div>
          <div>
            <label htmlFor="password"></label>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={credentials.password}
              placeholder="password..."
              className="FormTextInput"
            />
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

export default Login;
