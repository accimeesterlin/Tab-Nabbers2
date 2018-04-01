import React, { Component } from 'react';
import "./dashboard.css";
import {
    Header,
    Footer
} from "../../components";



import {
    Content
} from "./DashboardUI";

// import hackathon from "../../images/hackathon-alex-kotliarskyi.jpg";
// import portfolio from "../../images/portfolio-water-journal.jpg";

import {
    connect
} from "react-redux";

import {
    filter_num
} from "../../utils/event_feature";

import {
    logout
} from "../../actions";

import {
    eventBriteSearch,
    getLocation
} from "../events/actions";


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    signout = () => this.props.logout();

    componentWillMount = () => {
        this.props.getLocation()
            .then((response) => this.fetchEventLocation(response))
            .catch((err) => console.log("Error: ", err))
    };


    fetchEventLocation = (response) => {
        const {
            longitude,
            latitude
            } = response.value.data;

        const coordinations = { longitude, latitude };

        if (this.props.eventbrites.events.length === 0)
            this.props.eventBriteSearch("tech", coordinations);
    };
    render() {
        return (
            <div className = "dashboard">
                <Header logout={this.signout} />
                <Content 
                    {...this.state} 
                    filter_num={filter_num}  
                    {...this.props} />
                <Footer />
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        eventbrites: state.eventbrites
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        eventBriteSearch: (name, address) => dispatch(eventBriteSearch(name, address)),
        getLocation: () => dispatch(getLocation()),
        logout: () => dispatch(logout()),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



