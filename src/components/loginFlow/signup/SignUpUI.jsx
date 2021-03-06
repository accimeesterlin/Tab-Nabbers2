import React, { Component } from 'react';
import { Form, Button, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Signup.css';
import { Redirect } from 'react-router-dom';

export default class SignUpUI extends Component {
    constructor() {
        super();

        this.state = {};
    }

    handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
        this.props.getValue({ [name]: value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        const { password } = this.state;
        const { email, name } = this.props;
        this.props.onSignUp(email, name, password);
    };


    displayErrors = () => {
        const { isSignUpError, errorMessage } = this.props;
        if (isSignUpError) {
            return <Message color='red'> {errorMessage}  </Message>;
        }
    };

    render() {
        const { isSignUpCompleted } = this.props;
        if (isSignUpCompleted) {
            return <Redirect to='/welcome' />
        }
        return (
            <Form className="signup" onSubmit={this.onSubmit}>
                {this.displayErrors()}
                <div className="signup-tabs">
                    <Link to="/login/existeduser" >Login</Link>
                    <Link to="/login/newuser">Join</Link>
                </div>
                <Form.Field>
                    <label htmlFor="">Name - (Firstname and Lastname)</label>
                    <input
                        placeholder="Doe John"
                        name="name"
                        onChange={this.handleOnChange} />
                </Form.Field>

                <Form.Field>
                    <label htmlFor="">Email</label>
                    <input
                        placeholder="johndoe@hotmail.com"
                        type="email"
                        name="email"
                        required
                        onBlur={this.emailValidation}
                        onChange={this.handleOnChange} />
                </Form.Field>

                <Form.Field>
                    <label htmlFor="">Password (min. 6 char)</label>
                    <input
                        placeholder="password"
                        name="password"
                        type="password"
                        required
                        onBlur={this.passwordValidation}
                        onChange={this.handleOnChange} />
                </Form.Field>

                <Button> Submit </Button>
            </Form>
        );
    }
};