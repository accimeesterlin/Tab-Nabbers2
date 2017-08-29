/**
 * Created by ea375w on 7/19/2017.
 */
import React from "react";
import {connect} from "react-redux";
import "../public/css/login.scss";

class StudentCredentials extends React.Component {

    constructor(){
        super();

    };


    render(){
        return(

            // JSX go here
            <div>
                <h1>I am the Student Page</h1>
            </div>
        );

    }


}

function mapStateToProps(state) {
    // here
    // Getting data from Redux here
    // and set pass it as props

}


export default connect(mapStateToProps)(StudentCredentials);