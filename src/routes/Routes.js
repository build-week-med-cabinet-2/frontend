import React from "react";
import { Route } from "react-router";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/logon/Login";
import Register from "../components/logon/Register";
import HelloWorld from "../components/HelloWorld";
import StrainForm from "../components/StrainForm";
import { Ailments } from "../components/intake/Ailments";
import Strains from "../components/strainRecommender/Strains";
import Display from "../components/dashboard/Display";
import Recommendations from "../components/strainRecommender/Recommendations";
import Log from "../components/dosageLog/Log";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Register} />
      <PrivateRoute path="/helloworld" exact component={HelloWorld} />
      <PrivateRoute path="/strainform" exact component={StrainForm} />
      <PrivateRoute path="/intake/ailments" exact component={Ailments} />
      <PrivateRoute
        path="/strainrecommendations"
        exact
        component={Recommendations}
      />
      <PrivateRoute path="/dashboard" exact component={Display} />
      <PrivateRoute path="/logs" exact component={Log} />
    </>
  );
};

export default Routes;
