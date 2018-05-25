import React from "react";

const Text = props => (
  <div className="field">
    <label {...props}> {props.title} </label>
  </div>
);

export default Text;
