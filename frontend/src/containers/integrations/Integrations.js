import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import {
    connect
} from "react-redux";

import {
    getServiceToken
} from "./actions";

class Github extends Component {


    componentDidMount(){
        const code = this.props.location.search.split("=")[1];
        console.log("Code: ", code);
        const service = localStorage.getItem("service");

        this.props.dispatch(getServiceToken(service, code));
        
    }

    render() {
        
 
        if(this.props.integrations.status === "success"){
            console.log("Checking");
            return <Redirect to="/profile" />;
        }
        return (
            <div>
                <p>We're processing your request</p>

                <p>You'll be sent to another page shortly</p>  
            </div>
        );
    }
}


const mapPropsToState = (state) => {
    return{
        profile: state.profile,
        integrations: state.integrations
    };
};
export default connect(mapPropsToState)(Github);