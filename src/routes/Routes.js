import React from "react";
import { Route } from "react-router";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Login";
import Register from "../components/Register";
import HelloWorld from "../components/HelloWorld";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Register} />
      <PrivateRoute path="/helloworld" exact component={HelloWorld} />
    </>
  );
};

export default Routes;
