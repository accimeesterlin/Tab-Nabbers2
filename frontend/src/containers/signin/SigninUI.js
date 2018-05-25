import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import { Redirect } from "react-router-dom";
export default class Join extends Component {
  render() {
    const { pendingClass, errorClass, error, status } = this.props;

    if (status === "fulfilled") {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <section className="credentials login">
          <div className="signin-container">
            <div className="credentials_btn">
              <button className="active">Login</button>
              <Link to="/join">
                <button className="">Join</button>
              </Link>
            </div>

            {this.props.displayMessage(status, error)}

            <form
              className={`ui form  ${pendingClass}`}
              onSubmit={this.props.submit}
            >
              <div className={"field " + errorClass}>
                <label>Email </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.props.handleChange}
                  required
                />
              </div>

              <div className={"field " + errorClass}>
                <label>
                  Password <span>(min. 6 char)</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.props.handleChange}
                  required
                />
              </div>

              <button className="btn disabled"> Login </button>

              <Link to="/resetpassword"> Forgot password</Link>
              <p>By joining, you agree to the Terms and Privacy Policy.</p>
            </form>
          </div>
        </section>
      );
    }
  }
}
