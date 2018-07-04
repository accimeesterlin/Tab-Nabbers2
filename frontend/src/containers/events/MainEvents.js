import React from 'react';
import {
    connect
} from 'react-redux';

import {
    eventBriteSearch,
    getValues,
    saveEvent,
    getLocation
} from "./actions";
import Events from "./MainEventUI";



const mapStateToProps = (state) => {
    const events = state.eventbrites.events;
    const search = state.user.search;
    const pending = state.eventbrites.pending;
    const error = state.eventbrites.error;
    const errorMessage = state.eventbrites.errorMessage;

    return {
        events,
        search,
        pending,
        error,
        errorMessage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        eventBriteSearch: (name, obj) => dispatch(eventBriteSearch(name, obj)),
        getValues: (data) => dispatch(getValues(data)),
        getLocation: () => dispatch(getLocation()),
        saveEvent: (event) => dispatch(saveEvent(event))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);