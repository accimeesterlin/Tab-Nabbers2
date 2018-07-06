import React from 'react';
import {
    connect
} from 'react-redux';

import {
    eventBriteSearch,
    getValues,
    saveEvent,
    getLocation,
    fetchProfile
} from "./actions";
import Events from "./MainEventUI";




const mapStateToProps = (state) => {
    const search = state.user.search;
    const pending = state.eventbrites.pending;
    const error = state.eventbrites.error;
    const errorMessage = state.eventbrites.errorMessage;
    const favoriteEvents = state.user.favoriteEvents;
    const events = state.eventbrites.events;


    return {
        events,
        search,
        pending,
        error,
        errorMessage,
        favoriteEvents
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        eventBriteSearch: (name, obj) => dispatch(eventBriteSearch(name, obj)),
        getValues: (data) => dispatch(getValues(data)),
        getLocation: () => dispatch(getLocation()),
        saveEvent: (event) => dispatch(saveEvent(event)),
        fetchProfile: () => dispatch(fetchProfile())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);