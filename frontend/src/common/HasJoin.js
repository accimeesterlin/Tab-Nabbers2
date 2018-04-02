import React from "react";
import {
    Link
} from "react-router-dom";
import "./hasJoin.css";

const Join = (props) => {
    const {
        name
    } = props;


    const pending = name === "login"
        ? props.signin.pending
        :
        props.signup.pending;

    const error = name === "login"
        ?
        props.signin.error
        :
        props.signup.error;

    const errorClass = error ? "error" : null;
    const pendingClass = pending ? "loading" : null;
    const actionButton = name === "login" ? "Login" : "Join";

    console.log("Props: ", props);


    return (
        <section>

            <div>
                <Buttons {...props} />

                <ErrorMessage {...props} error={error} />

                <form className={"ui form " + pendingClass} onSubmit={props.submit}>
                    <NameField {...props} />

                    <div className={"field " + errorClass}>
                        <label>Email </label>
                        <input required type="text" name="email" placeholder="Email" onChange={props.getValues} />
                    </div>
                    <div className="field">
                        <label>Password <span>(min. 6 char)</span></label>
                        <input required type="password" name="password" placeholder="Password" onChange={props.getValues} />
                    </div>

                    <button className="btn"> { actionButton } </button>

                    <Link to="/resetpassword"> Forgot password </ Link>
                    

                    <p>By joining, you agree to the Terms and Privacy Policy.</p>

                </form>
            </div>

        </section>
    )
};



const NameField = (props) => props.name === "join"
    ? <div className="field">
        <label>Name <span>(Firstname and Lastname)</span></label>
        <input required type="text" name="name" placeholder="Name" onChange={props.getValues} />
    </div> : "";



const Buttons = (props) => props.name === "login"
    ? <div className="credentials_btn">
        <button className="active">Login</button>
        <Link to="/join"> <button >Join</button> </ Link>
    </div>
    :
    <div className="credentials_btn">
        <Link to="/"> <button >Login</button> </ Link>
        <button className="active">Join</button>
    </div>;



const ErrorMessage = (props) => props.error ? <div className="ui message error">
    <p>{props.error}</p>
</div> : null;

export default Join;