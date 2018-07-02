import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventBox from '../../common/EventBox';

class Favorites extends Component {

    displayFavoriteEvents = (events) => {
        if (events.length >= 1) {
            return events.map((event, index) => (
                <EventBox event={event} key={index} limitDescription = {this.props.limitDescription}/>
            ));
        }
        return <p>No Favorite Event Found!</p>
    };

    render() {
        const events = this.props.events;
        return (
            <div className='events_container_display'>
                {this.displayFavoriteEvents(events)}
            </div>
        )
    }
}

Favorites.propTypes = {
    events: PropTypes.array.isRequired
};
export default Favorites