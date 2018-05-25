import SubmitForm from "../../hoc/SubmitForm"; // HOC

import SigninUI from "./SigninUI";
import { connect } from "react-redux";
import { login, getValues } from "./actions";

const SubmitLogin = SubmitForm(SigninUI); // HOC

const mapPropsToState = state => {
  const signin = state.signin;
  const error = signin.error;
  const status = signin.status;

  const pendingClass = status === "pending" ? "loading" : "fulfilled";
  const errorClass = status === "rejected" ? "error" : "fulfilled";

  return {
    errorClass,
    pendingClass,
    error,
    status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitForm: data => dispatch(login(data)),
    getValue: data => dispatch(getValues(data))
  };
};

const Login = connect(mapPropsToState, mapDispatchToProps)(SubmitLogin);
export default Login;
