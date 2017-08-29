import React from 'react';
import {connect} from "react-redux";


class About extends React.Component{


    render(){

        return(
            // JSX go below
            <div>
                <h1>I am the About Page</h1>
            </div>
        );
    }
};


function mapStateToProps(state) {
    // here
    // Getting data from Redux here
    // and set pass it as props

}


export default connect(mapStateToProps)(About);