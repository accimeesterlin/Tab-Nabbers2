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

class Home extends React.Component{


    render(){
        return(
            <div>
                {this.props.children}
            </div>
    )
    }
}

function mapStateToProps(state) {
    return{
        // here
        // Getting data from Redux here
        // and set pass it as props
    }
}

export default connect(mapStateToProps)(Home);
