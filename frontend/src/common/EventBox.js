import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment";
import { getLogo } from './selectors/events/eventSelectors';


const EventBox = (props) => {
    const event = props.event;
    const favoriteClass = 'heart outline icon ';

    return (
        <div className='event_box'>
            <img src={getLogo(event)} alt="" />
            <h4>{event.name.text}</h4>
            <p>{moment(event.start.local).format("llll")}</p>

            <div className="icons">
                <i className="share alternate icon"></i>
                <i className='calendar alternate icon'></i>
                <i className={event.is_favorite ? favoriteClass + ' red' : favoriteClass} onClick={() => props.addToFavorite(event)}></i>
            </div>

            <div className="info">
                <p> <b>Description</b>: {props.limitDescription(event.description.text)}</p>
            </div>

        </div>
    )
}

EventBox.propTypes = {
    event: PropTypes.object
};

export default EventBox