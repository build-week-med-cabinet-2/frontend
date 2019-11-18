import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = props => {
  const intialValues = {
    username: "",
    password: ""
  };

  const [credentials, setCredentials] = useState(intialValues);
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
    setCredentials(intialValues);
  };

  const routeChange = () => {
    let path = "/signup";
    props.history.push(path);
  };

  return (
    <>
      <div className="Login-Form-Wrapper">
        <form onSubmit={submitLogin}>
          <label htmlFor="username"></label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={credentials.username}
            placeholder="username..."
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={credentials.password}
            placeholder="password..."
          />
          <button type="submit">
            Login!{" "}
            <span role="img" aria-label="PalmTree">
              🌴
            </span>
          </button>
        </form>
      </div>
      <div className="DontHaveAccountWrapper">
        <h2>Don't have an account? Click here to register</h2>
        <button onClick={routeChange}>Signup</button>
      </div>
    </>
  );
};

export default Login;
