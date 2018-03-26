import React from "react";

import { Link } from "react-router-dom";


export const Join = (props) => {
    const error = props.signin.error;
    const pending = props.signin.pending;

    const errorMessage = error ? <div className="ui message error">
        <p>{error}</p>
    </div> : null;

    const errorClass = error ? "error" : null;
    const pendingClass = pending ? "loading" : null;

    return (
        <section >
            <div className="credentials_btn">
                <button className="active">Login</button>
                <Link to="/join"><button className="">Join</button></ Link>
            </div>

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

                <Link to="/resetpassword"> Forgot password</Link>
                <p>By joining, you agree to the Terms and Privacy Policy.</p>

            </form>

        </section>
    )
}
