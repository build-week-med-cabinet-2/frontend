import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../../common/components/nav/NavBar";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <>
          <NavBar />
          <Component {...props} />
        </>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
