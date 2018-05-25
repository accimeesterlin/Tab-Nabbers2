import React from "react";

const Select = props => (
  <div className="field">
    {props.label ? <label> {props.name} </label> : ""}
    <select className={props.className}>{props.children}</select>
  </div>
);

export default Select;
