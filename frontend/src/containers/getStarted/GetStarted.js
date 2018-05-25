import React, { Component } from "react";
import { Route } from "react-router-dom";
import BasicInfo from "./Basic";
import "./getstarted.css";

class GetStarted extends Component {
  render() {
    const match = this.props.match.path;
    return (
      <div>
        <Route exact path={`${match}/basic`} component={BasicInfo} />
      </div>
    );
  }
}

export default GetStarted;
