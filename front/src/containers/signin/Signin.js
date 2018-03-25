import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import qs from "stringquery";
import "./signin.css";
import {
    login,
    getValues
} from "./actions";


export class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    submit = (event) => {
        event.preventDefault();
        const url = "/secure/signin";
        const {
            email,
            password
        } = this.props.signin;

        this.props.dispatch(login(url, {
            email,
            password
        }));
    };


    getValues = ({
        target: {
        name,
        value
        }
    }) => {
        const data = { [name]: value };
        this.props.dispatch(getValues(data));
    };


    componentWillReceiveProps(props) {
        if (props.signin.authenticated)
            this.props.history.push('/dashboard');

    }

    render() {

        console.log("Singin: ", );

        const params = qs(this.props.location.search);

        console.log("Params: ", params);
        
        

        return (
            <div className="login landing flex center ">

                <div className="credentials_btn">
                    <button className="active">Login</button>
                    <Link to="/join"><button className="">Join</button></ Link>

                </div>


                <div className="landing_sidebar flex center column main-center signin">
                    {
                        // TODO
                        // Display contents into the sidebar
                    }
                </div>

                <Join {...this.props} submit={this.submit} getValues={this.getValues} />


            </div>
        );
    }
}

const Join = (props) => {
    const error = props.signin.error;
    const pending = props.signin.pending;

    const errorMessage = error ? <div className="ui message error">
        <p>{error}</p>
    </div> : null;

    const errorClass = error ? "error" : null;
    const pendingClass = pending ? "loading" : null;

    return (
        <div className="flex center main-center column landing_content">

            {errorMessage}

            <form className={"ui form " + pendingClass} onSubmit={props.submit}>

                <div className={"field " + errorClass}>
                    <label>Email </label>
                    <input type="text" name="email" placeholder="Email" onChange={props.getValues} required />
                </div>

                <div className={"field " + errorClass}>
                    <label>Password <span>(min. 6 char)</span></label>
                    <input type="password" name="password" placeholder="Password" onChange={props.getValues} required />
                </div>

                <button className="btn disabled" > Login </button>

            </form>
            <Link to = "/resetpassword"> Forgot password</Link>
            <p>By joining, you agree to the Terms and Privacy Policy.</p>
        </div>
    )
}


const mapPropsToState = (state) => {
    return {
        signin: state.signin
    }
};

export default connect(mapPropsToState)(Signin);