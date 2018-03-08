import React, { Component } from 'react';
import moment from "moment";
import "./dashboard.css";
import {
    Header,
    Footer
} from "../../components";

import hackathon from "../../images/hackathon-alex-kotliarskyi.jpg";
import portfolio from "../../images/portfolio-water-journal.jpg";

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
            <div>
                <Header logout={this.signout} />
                <Content {...this.state} filter_num={filter_num}  {...this.props} />
                <Footer />
            </div>
        );
    }
}

const Content = (props) => {
    return (
        <div className="content main-events">
            <Events {...props} />
            <Recommendations />
            <Tips />
        </div>
    );
};



/**
 * Events layout
 * Layout 5 blocks
 */
const Events = (props) => {

    const {
        filter_num,
        eventbrites: {
            events,
            pending
        }

    } = props;


    const pendingClass = pending ? " ui loading form" : "";


    return (
        <div className="events flex column wrap ">
            <div>
                <h3>Events: </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
                    odit accusantium incidunt minus, eaque et tempora vitae expedita cupiditate
                    nobis quam fugiat illum molestiae illo excepturi esse iure. Officiis, accusantium.
                </p>
            </div>

            <div className={"top_event center flex  wrap " + pendingClass}>
                {filter_num(events, 5).map((event, index) => (
                    <div key={index} >
                        <img src={event.logo ? event.logo.url : ''} alt="" />
                        <h4>{event.name.text}</h4>
                        <p>{moment(event.start.local).format("llll")}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};



/**
 * Tips layout
 * Layout 2 blocks
 */
const Tips = () => (
    <div className="tips flex around column">
        <div>
            <h3>Recommendations: </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
                odit accusantium incidunt minus, eaque et tempora vitae expedita cupiditate
                nobis quam fugiat illum molestiae illo excepturi esse iure. Officiis, accusantium.
            </p>
        </div>
        <div className="top_tip center flex  wrap">
            <div>
                <p>Portfolio</p>
            </div>
            <div>
                <p>Connect with folks</p>
            </div>
            <div>
                <p>Start looking</p>
            </div>
        </div>
    </div>
);



/**
 * Recommendations layout 
 * Layout 3 blocks
 */
const Recommendations = () => (
    <div className="resources flex between  column">
        <div>
            <h3>Tips and hackathons: </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
                odit accusantium incidunt minus, eaque et tempora vitae expedita cupiditate
                nobis quam fugiat illum molestiae illo excepturi esse iure. Officiis, accusantium.
            </p>
        </div>
        <div className="interview_tip center flex  wrap">
            <div>
                <p>Tips about Interviews</p>
            </div>
            <div>
                <p>Participate in Hackathons</p>
            </div>
        </div>
    </div>
);
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