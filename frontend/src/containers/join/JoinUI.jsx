import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
import { Redirect } from "react-router-dom";

class JoinUI extends Component {
  render() {
    const { status, pendingClass, error, errorClass } = this.props;

    if (status === "fulfilled") {
      return <Redirect to = "/welcome/basic"/>;
    } else {
      return (
        <section className="credentials join">
          <div className="join-container">
            <div className="credentials_btn">
              <Link to="/">
                {" "}
                <button>Login</button>{" "}
              </Link>
              <button className="active">Join</button>
            </div>

            {this.props.displayMessage(status, error)}

            <form
              className={"ui form " + pendingClass}
              onSubmit={this.props.submit}
            >
              <div className="field">
                <label>
                  Name <span>(Firstname and Lastname)</span>
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={this.props.handleChange}
                />
              </div>

              <div className={"field " + errorClass}>
                <label>Email </label>
                <input
                  required
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.props.handleChange}
                />
              </div>
              <div className="field">
                <label>
                  Password <span>(min. 6 char)</span>
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.props.handleChange}
                />
              </div>

              <button className="btn"> Join </button>

              <Link to="/resetpassword"> Forgot password </Link>

              <p>By joining, you agree to the Terms and Privacy Policy.</p>
            </form>
          </div>
        </section>
      );
    }
  }
}

export default JoinUI;
