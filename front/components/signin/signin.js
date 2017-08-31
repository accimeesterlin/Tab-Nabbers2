/**
 * Created by esterlingaccime on 8/13/17.
 */
import React from "react";


const Signin = ({handleSubmit}) => {

    return (
        <div className="ui form">
            <div className="field">
                <input type="text" placeholder="Email..." id="username" required/>
            </div>

            <div className="field">
                <input type="password" placeholder="Password..." id="password" required/>
            </div>

            <div className="field">
                <input type="submit" value="Sign In" className="ui button large fluid" onClick={handleSubmit}/>
            </div>

            <div className="inline field">
                <div className="ui checkbox">
                    <input type="checkbox"/>
                    <label>Remember me</label>
                </div>

            </div>
        </div>
    );
};


export default Signin;