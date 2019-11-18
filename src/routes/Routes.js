import React from "react";
import { Route } from "react-router";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Login";
import HelloWorld from "../components/HelloWorld";
import StrainForm from "../components/StrainForm";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Login} />
      <PrivateRoute path="/helloworld" exact component={HelloWorld} />
      <PrivateRoute path="/strainform" exact component={StrainForm} />

    </>
  );
};

export default Routes;
