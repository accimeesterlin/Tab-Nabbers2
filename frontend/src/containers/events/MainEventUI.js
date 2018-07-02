import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Loader, Message } from 'semantic-ui-react';
import {
    Header,
    Footer
} from "../../components";
import "./mainEvent.css";


import Sidebar from '../../common/Sidebar';
import SearchEvent from './SearchEvents';
import EventBox from '../../common/EventBox';
import FavoritesUI from './FavoritesUI';


class Events extends Component {

    limitDescription = (text) => {
        if (typeof text === 'string') {
            const shorten = text.slice(0, 140) + ' ...';
            return shorten;
        }
    };

    displayEvents = (events) => {
        if (events.length > 1) {
            return events.map((event, index) => (
                <EventBox key={index} event={event} index={index} limitDescription={this.limitDescription} />
            ));
        }
        return <p>No event found!</p>
    };

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.props.getValues({ [name]: value });
    };

    onSubmit = (event) => {
        event.preventDefault();
        const { search } = this.props;
        this.props.eventBriteSearch(search, {});
    };

    loading = () => {
        const pending = this.props.pending;
        return pending === 'pending' ? <Loader active inline='centered' /> : '';
    };

    sidebarNavigation = () => {
        const { events, search, match } = this.props;
        const type = match.params.type;

        switch (type) {
            case 'favorites':
                return <FavoritesUI events={events} limitDescription={this.limitDescription} />;

            default:
                return [
                    <SearchEvent
                        handleChange={this.handleChange}
                        onSubmit={this.onSubmit}
                        value={search} />,

                    this.loading(),
                    this.errorHandling(),
                    <div className='events_container_display'>
                        {this.displayEvents(events)}
                    </div>
                ];
        }
    };

    errorHandling = () => {
        const { error, errorMessage } = this.props;
        if (error) {
            return <Message
                error
                header='There was some errors with searching events'
                list={[
                    errorMessage,
                    'You must include both a upper and lower case letters in your password.'
                ]}
            />
        }
    };

    render() {
        return (
            <div className='events'>
                <Header />
                <section className='events_container'>
                    <Sidebar >
                        <Link to='/events/search'><li>Search</li></Link>
                        <Link to='/events/favorites'><li>Favorites</li></Link>
                    </ Sidebar>

                    <div className='events_container_main'>
                        {this.sidebarNavigation()}
                    </div>
                </section>

                <Footer />
            </div>
        );
    }
};


Events.proptTypes = {
    events: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    match: PropTypes.object.isRequired
};

export default Events;