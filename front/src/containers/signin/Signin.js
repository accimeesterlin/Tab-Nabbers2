
import HasLogin from "../../hoc/HasLogin"; // HOC

import Join from "../../common/HasJoin";
import {
    connect
} from "react-redux";
import {
    login,
    getValues
} from "./actions";

const methods = {
    joinOrLogin: login,
    getValues
};


const url = "/secure/signin";

const Login = HasLogin(methods, "login", url)(Join); // HOC


const mapPropsToState = (state) => {
    return {
        signin: state.signin,
        user: state.user
    }
};
export default connect(mapPropsToState)(Login);