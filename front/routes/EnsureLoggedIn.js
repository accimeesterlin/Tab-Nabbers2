/**
 * Created by esterlingaccime on 8/28/17.
 */
import React from "react";
import {browserHistory} from "react-router";
import {connect} from "react-redux";

class EnsureLoggedInContainer extends React.Component{

    componentDidMount(){
        const {dispatch, currentURL } = this.props;

        if(!isLoggedin){
            // set the current url/path for the future redirection (we use a Redux action)
            // then redirect (we use a React method)

            dispatch(setRedirectUrl(currentURL));

            browserHistory.replace("/login");

        }
    }

    render(){
        if(isLoggedIn){
            return this.props.children;
        } else{
            return null;
        }
    }

}

function mapStateToProps (state, ownProps){
    return{
        isLoggedIn:state.loggedIn,
        currentURL:ownProps.location.pathname
    }

}


const loggedIn = () => {
    // securing routes
};


const requireAuth = (nextState, replace) => {

    if(!loggedIn()){
        replace({
            pathname:'/login'
        });
    }
};
export default connect(mapStateToProps)(EnsureLoggedInContainer);