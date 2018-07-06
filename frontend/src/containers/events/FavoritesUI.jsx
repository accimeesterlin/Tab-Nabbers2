import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import EventBox from '../../common/EventBox';

class Favorites extends Component {

    componentDidMount = () => {
        this.props.fetchProfile();
    };

    displayFavoriteEvents = (events) => {
        if (events.length >= 1) {
            return events.map((event, index) => (
                <div className='event_box'>
                <img src={event.logo} alt="" />
                <h4>{event.title}</h4>
                <p>{moment(event.date).format("llll")}</p>
    
                <div className="icons">
                    <i className="share alternate icon"></i>
                    <i className="calendar alternate icon"></i>
                </div>
    
                <div className="info">
                    <p> <b>Description</b>: {this.props.limitDescription(event.description)}</p>
                </div>
    
            </div>
                
            ));
        }
        return <p>No Favorite Event Found!</p>
    };

    render() {
        const events = this.props.favoriteEvents;
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