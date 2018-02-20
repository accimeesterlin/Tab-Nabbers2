import React from 'react';
import { Route } from "react-router-dom";
// import { connect } from 'react-redux';
import Header from './components/header/Header'


import {
  Events,
  Profile,
  Dashboard,
  Signin,
  Join

} from "./pages";
import "./App.css";

// const mapStateToProps = (state) => {
//   return {

//   };
// }

const Routes = (props) => (
  <div className="main">
  <Header/>
    <Route exact path="/" component={Signin} />
    <Route exact path="/join" component={Join} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/events" component={Events} />
  </div>
);
export default Routes;