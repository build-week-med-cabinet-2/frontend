import React from "react";
import { Route } from "react-router";
import PrivateRoute from "./PrivateRoute";
import Login from "../../features/logon/Login";
import Register from "../../features/logon/Register";
import HelloWorld from "../../common/components/HelloWorld";
import StrainForm from "../../features/StrainForm";
import { Ailments } from "../../features/ailments/Ailments";
import Strains from "../../features/strains/Strains";
import Display from "../../common/components/dashboard/Display";
import Recommendations from "../../features/strainRecommender/Recommendations";
import Log from "../../features/dosageLog/Log";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Register} />
      <PrivateRoute path="/helloworld" exact component={HelloWorld} />
      <PrivateRoute path="/strainform" exact component={StrainForm} />
      <PrivateRoute path="/intake/ailments" exact component={Ailments} />
      <PrivateRoute
        path="/intake/recommendations"
        exact
        component={Recommendations}
      />
      <PrivateRoute path="/dashboard" exact component={Display} />
      <PrivateRoute path="/logs" exact component={Log} />
      <PrivateRoute path="/strains" exact component={Strains} />
    </>
  );
};

export default Routes;
