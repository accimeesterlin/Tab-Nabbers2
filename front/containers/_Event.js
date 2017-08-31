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
import {bindActionCreators} from "redux";
import * as meetup from "../actions/meetupActions";
import {Meetup} from "../components/event/index";

class Event extends React.Component{

    componentDidMount(){
        this.props.actions.fetchEvents();

    }

    render(){
        //console.log(this.props.events);
        let events = this.props.events[0];
        console.log(events);

        return(
            <div className="event-container">
                <Meetup events = {events}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {events:state.events}

};


const mapDispatchToProps =  (dispatch) => {
    return{ actions: bindActionCreators(meetup, dispatch) }
};


export default connect(mapStateToProps, mapDispatchToProps)(Event);
