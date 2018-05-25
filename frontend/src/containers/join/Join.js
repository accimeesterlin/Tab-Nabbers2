import SubmitForm from "../../hoc/SubmitForm"; // HOC

import JoinUI from "./JoinUI";

import { connect } from "react-redux";
import { signup, getValues } from "./actions";

const SubmitSignUp = SubmitForm(JoinUI, getValues, signup); // HOC

const mapPropsToState = state => {
  const signup = state.signup;

  const status = signup.status;
  const pendingClass = status === "pending" ? "loading" : "fulfilled";
  const errorClass = status === "rejected" ? "error" : "";
  const error = state.signup.error;

  return {
    pendingClass,
    errorClass,
    status,
    error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getValue: data => dispatch(getValues(data)),
    submit: data => dispatch(signup(data))
  };
};

const SignupComponent = connect(mapPropsToState, mapDispatchToProps)(
  SubmitSignUp
);
export default SignupComponent;
