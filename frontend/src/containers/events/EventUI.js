import React from "react";
import moment from "moment";



export const DisplayEvents = (props) => {
    const {
        eventbrites:{
            pending,
            events,
            ids,
            saved,
        }
    } = props;
    const pendingClass = pending ? " ui loading form" : "";

    let eventAndSaved = props.status === "saved" ? saved : events;


    console.log("Checking: ", moment("Thu, Aug 30, 2018 9:00 AM").add(1, 'weeks').startOf('isoWeek'));

    try {
        eventAndSaved = eventAndSaved.map((el, index) => {
            if (ids.includes(el.id)) {
                el["saved"] = "saved";
                return el;
            } else {
                el["saved"] = "";
                return el;
            }
        });
    } catch (error) {

    }

    const eventsView = (eventAndSaved || []).map((event, index) => (
        <div className={"week search " + pendingClass} key={index}>
            <img src={event.logo ? event.logo.url : ''} alt="" />
            <h4>{event.name.text}</h4>
            <p>{moment(event.start.local).format("llll")}</p>

            <div className="icons">
                <i className="share alternate icon"></i>
                <i className="calendar alternate icon"></i>
                <i className={"heart outline icon " + event.saved} onClick={() => props.saved(event)}></i>
            </div>

            <div className="info">
                <p>Description: {event.description.text}</p>
            </div>

        </div>
    ));

    

    return (
        <div className={"flex wrap center event-content " + pendingClass}>

            {props.eventbrites.events.length === 0 ? <h2 className = "notfound">No Events Found</h2> : eventsView}
        </div>
    );
};




export const Search = (props) => {
    const {
        onSubmit,
        user: {
            search
        },
        getSearchInput
    } = props;

    const NotFound = props.eventbrites.events.length === 0 ? "notFound": "";
    

    return (
        <div  id= {NotFound} className = "event-content">
            <div className="search flex center ">
                <form className="flex main-center ui form column" onSubmit={onSubmit}>
                    <div className="field" >
                        <input
                            type="text"
                            placeholder="Search events..."
                            name="search"
                            required
                            value={search}
                            onChange={getSearchInput} />
                    </div>
                    <button className="btn" >Search</button>
                </form>
            </div>

            {true ? <DisplayEvents {...props} /> : ""}
        </div>
    );
};




export const Sidebar = (props) => {
    const {
        current_button,
        change_view
    } = props;

    return (
        <div className = "sidebar">
            <ul>
                <li onClick={(event) => change_view("Search", event)} className={current_button["search"]}>Search</li>
                <li onClick={(event) => change_view("Allevents", event)} className={current_button["allevents"]}>Events</li>
                <li onClick={(event) => change_view("Saved", event)} className={current_button["saved"]}>Saved</li>
                <li onClick={(event) => change_view("Week", event)} className={current_button["week"]}>Next week</li>
            </ul>
        </div>
    );
};