import React from "react";
import { Route, Redirect } from "react-router-dom";
import NavBar from "../components/nav/NavBar";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <>
          <NavBar />
          <div className="CenteredContainerApp" >
            <Component {...props} />
          </div>
        </>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default PrivateRoute;
