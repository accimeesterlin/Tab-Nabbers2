import React, { Component } from 'react';
import {
    connect
} from "react-redux";
import {
    addNewPassword
} from "./actions";

import "./newpassword.css";


class NewPassword extends Component {

    getValues = ({
        target:{
            name,
            value
        }
    }) => this.setState({ [name]: value});

    submit = (event) => {
        event.preventDefault();


        const url = "/secure/newpassword";
        const data = {
            password: this.state.password,
            token: this.props.match.params.token
        };
        this.props.dispatch(addNewPassword(url, data));
    };


    componentWillReceiveProps = (nextProps) => {
        if(nextProps.new_password.status)  
            this.props.history.push("/");
    };
    render() {

        const error = this.props.new_password.error;
        const errorMessage = error ? <div className="ui message error">
            <p>{error}</p>
        </div> : null;

        
        return (
            <div className = "flex center main-center column newpassword">
                {errorMessage}
                <form className = "ui form">
                <h2>Please enter your new password</h2>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="password" name = "password" placeholder = "Enter your new password" onChange = {this.getValues} />
                    </div>
                    
                    <button className = "ui primary basic button" onClick = {this.submit}>Reset </button>
                </form>
            </div>
        );
    }
}


const mapPropsToState = (state) => {
    return{
        new_password: state.new_password
    };
};
export default connect(mapPropsToState)(NewPassword);