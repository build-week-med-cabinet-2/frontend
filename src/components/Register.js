import React, { useState } from "react";
import axios from "axios";

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
    props.history.push("/helloworld");
    setCredentials(initialValues);
  };
  return (
    <div className="Register-Form-Wrapper">
      <form onSubmit={submitRegister}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={credentials.username}
          placeholder="username..."
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={credentials.password}
          placeholder="password..."
        />
        <label htmlFor="repeat password">repeat password</label>
        <input
          type="password"
          name="repeatPassword"
          onChange={handleChange}
          value={credentials.repeatPassword}
          placeholder="repeat password..."
        />
        <button type="submit">
          Register!{" "}
          <span role="img" aria-label="PalmTree">
            🌴
          </span>
        </button>
      </form>
    </div>
  );
};

export default Register;
