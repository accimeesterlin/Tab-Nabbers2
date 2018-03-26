
import HasLogin from "../../hoc/HasLogin"; // HOC

import Join from "../../common/HasJoin";

import {
    connect
} from "react-redux";
import {
    signup,
    getValues
} from "./actions";

const methods = {
    joinOrLogin: signup,
    getValues
};

const url = "/secure/signup";

const SignUp = HasLogin(methods, "join", url)(Join); // HOC


const mapPropsToState = (state) => {
    return {
        signup: state.signup,
        user: state.user
    }
};
export default connect(mapPropsToState)(SignUp);