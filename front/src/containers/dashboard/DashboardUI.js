import React from "react";
import moment from "moment";


/**
 * Events layout
 * Layout 5 blocks
 */
export const Events = (props) => {

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
            <h3>Events: </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
                odit accusantium incidunt minus, eaque et tempora vitae expedita cupiditate
                nobis quam fugiat illum molestiae illo excepturi esse iure. Officiis, accusantium.
            </p>

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
export const Tips = () => <div className="tips flex around column">
    <div>
        <h3>Recommendations: </h3>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
            odit accusantium incidunt minus, eaque et tempora vitae expedita cupiditate
            nobis quam fugiat illum molestiae illo excepturi esse iure. Officiis, accusantium.
        </p>
    </div>
    <div className="top_tip">
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



/**
 * Recommendations layout 
 * Layout 3 blocks
 */
export const Recommendations = () => <div className="resources">
    <h3>Tips and hackathons: </h3>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
        odit accusantium incidunt minus, eaque et tempora vitae expedita cupiditate
        nobis quam fugiat illum molestiae illo excepturi esse iure. Officiis, accusantium.
    </p>

    <div className="interview_tip">
        <div>
            <p>Tips about Interviews</p>
        </div>
        <div>
            <p>Participate in Hackathons</p>
        </div>
    </div>
</div>


export const Content = (props) => {
    return (
        <div className="main-events">
            <Events {...props} />
            <Recommendations />
            <Tips />
        </div>
    );
};