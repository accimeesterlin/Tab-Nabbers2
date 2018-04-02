import React, { Component } from 'react';
import {
    connect
} from 'react-redux';

import {
    Header,
    Footer
} from "../../components";
import "./event.css";

import {
    eventBriteSearch,
    getValues,
    getLocation,
    savedEvent,
    getSavedEvents
} from "./actions";
import {
    DisplayEvents,
    Search,
    Sidebar
} from "./EventUI";




const Week = (props) => (true ? (<div className="flex wrap center"> No next Week Events</div>) : "");

const Allevents = (props) => (true ? <DisplayEvents {...props} status="allevents" /> : "");

const Saved = (props) => (true ? <DisplayEvents {...props} status="saved" /> : "");




class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: 'Search',
            current_button: {
                search: "current"
            }
        };
    }

    componentWillMount = () => {
        this.props.getSavedEvents()
            .then(() => {
                this.props.getLocation()
                    .then((response) => {
                        if (this.props.eventbrites.events.length === 0)
                            this.fetchEventLocation(response.value.data, "tech");
                    })
                    .catch((err) => console.log("Error: ", err));
            });
    };

    change_view = (view, event) => {
        const lower_view = view.toLowerCase();
        this.setState({ view, current_button: { [lower_view]: "current" } })
    };

    /**
     * Get current user locations
     * @param data
     * @param value
     */
    fetchEventLocation = (data, value) => {
        const {
            longitude,
            latitude
            } = data;

        const coordinations = { longitude, latitude };
        this.props.eventBriteSearch(value, coordinations);
    };


    getSearchInput = ({
        target: {
            name,
        value
        }
    }) => this.props.getValues({ [name]: value });

    onSubmit = (event) => {
        const {
            search,
            location
        } = this.props.user;
        event.preventDefault();
        this.fetchEventLocation(location, search);
        this.props.getValues({ search: "" }); // resetting the value
    };

    saved = (obj) => {
        this.props.savedEvent(obj.id)
            .then((data) => {
                this.props.getSavedEvents();  // # Bad for Perfomance   
            });

    };


    render() {
        return (
            <div>
                <Header />
                <Content
                    change_view={this.change_view}
                    getSearchInput={this.getSearchInput}
                    onSubmit={this.onSubmit}
                    saved={this.saved}
                    {...this.state} {...this.props} />
                <Footer />
            </div>
        );
    }
}



const switch_component = {
    Allevents,
    Search,
    Week,
    Saved
};

const Content = (props) => {
    const { view } = props;
    return (
        <div className="search_events flex between">
            <Sidebar {...props} />
            {switch_component[view](props)}
        </div>
    );
};




const mapStateToProps = (state) => {
    return {
        eventbrites: state.eventbrites,
        user: state.user
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        eventBriteSearch: (name, obj) => dispatch(eventBriteSearch(name, obj)),
        getValues: (data) => dispatch(getValues(data)),
        getLocation: () => dispatch(getLocation()),
        savedEvent: (id) => dispatch(savedEvent(id)),
        getSavedEvents: () => dispatch(getSavedEvents())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);

