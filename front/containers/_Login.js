// This component is page related
// We should not do any heavy HTML here
// All of HTML Mocks up, needs to go to components folder
// and be imported below into JSX
// This component is mainly to get data from Redux Store
// and pass it to the dumb components in the components folder
// Every functions related to that page, need to be built in here
// and pass via props as well to the presentation components in the components folders



import React from "react";
import {connect} from "react-redux";
import "../public/css/signup.scss";
import {Signup} from "../components/signup/index.js"

class StudentCredentials extends React.Component {

    render(){
        return(

            // JSX go here
            <div>
                <Signup/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // here
    // Getting data from Redux here
    // and set pass it as props
    return {};
}


export default connect(mapStateToProps)(StudentCredentials);