import React, { Component } from 'react';
import "./resetpassword.css";

import {
    connect
} from "react-redux";
import {
    resetPassword,
    getValues
} from "./actions";

class ResetPassword extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }


    getValues = ({
        target: {
            name,
        value
        }
    }) => this.props.dispatch(getValues({ [name]: value }));


    submit = (event) => {
        event.preventDefault();
        const url = "/secure/resetpassword";
        const data = {
            email: this.props.reset_password.email
        };

        this.props.dispatch(resetPassword(url, data));
    };

    componentWillReceiveProps = (nextProps) => {

        if (nextProps.reset_password.status)
            this.props.history.push("/confirmation");
    };

    render() {
        const error = this.props.reset_password.error;
        const errorMessage = error ? <div className="ui message error">
            <p>{error}</p>
        </div> : null;


        const pendingClass = this.props.reset_password.pending ? " loading" : "";
        return (
            <section className="ui flex main-center center column password">
                <div className = "resetpassword">
                    {errorMessage}

                    <form className={"ui form" + pendingClass} onSubmit={this.submit}>
                        <h4>Enter your email to reset your password</h4>
                        <div>
                            <label htmlFor="email"></label>
                            <input type="email" name="email" required placeholder="Enter your email" onChange={this.getValues} />
                        </div>
                        <button className="ui basic primary button" >Reset Password </button>
                    </form>
                </div>


            </section>
        );
    }
}



export const Confirmation = () => {
    return (
        <div>
            <h2>We have successfully sent a reset link to your Email</h2>
            <p>Please follow the instructions in order to be able to reset your password</p>
            <p>Close this browser tab and check your email</p>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        reset_password: state.reset_password
    };
};

export default connect(mapStateToProps)(ResetPassword);