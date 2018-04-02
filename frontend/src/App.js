import React from 'react';
import { Route } from "react-router-dom";
import "./App.css";

import {
  Events,
  Profile,
  Dashboard,
  Signin,
  Join,
  ResetPassword,
  NewPassword,
  Confirmation,
  Integrations
} from "./containers";


const Routes = (props) => (
  <div className="main">
    <Route exact path="/" component={Signin} />
    <Route exact path="/join" component={Join} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/events" component={Events} />
    <Route exact path="/resetpassword" component={ResetPassword} />
    <Route exact path="/confirmation" component={Confirmation} />
    <Route exact path="/authorize" component={Integrations} />
    <Route exact path="/secure/reset/:token" component={NewPassword} />
  </div>
);
export default Routes;