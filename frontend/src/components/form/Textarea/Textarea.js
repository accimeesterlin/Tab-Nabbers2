import React from "react";

const Textarea = props => (
  <div className="field">
    {props.label ? <label> {props.name} </label> : ""}
    <textarea cols="30" rows="10" {...props} />
  </div>
);

export default Textarea;
