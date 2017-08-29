/**
 * Created by esterlingaccime on 6/27/17.
 */
import React from "react";
import {connect} from "react-redux";
import "../public/css/login.scss";


class Recruiter extends React.Component{


    render(){
        return(
            // JSX go here
           <div>
               <h1>I am the Recruiter Page</h1>
           </div>
        );
    }
}



function mapStateToProps(state) {
    // here
    // Getting data from Redux here
    // and set pass it as props

}


export default connect(mapStateToProps)(Recruiter);