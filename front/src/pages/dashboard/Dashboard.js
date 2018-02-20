import React, { Component } from 'react';
import "./dashboard.css";
// import { connect } from 'react-redux';
import {
    Header,
    Footer
} from "../../components";

import {
    filter_num
} from "../../utils/event_feature";

import data from "./data.json";

// const mapStateToProps = (state) => {
//     return {

//     };
// }

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount = () => this.setState({ data });
    render() {
        console.log(filter_num(this.state.data.events, 2));
        return (
            <div>
                <Header />
                <Content {...this.state} filter_num={filter_num} />
                <Footer className="footer" />
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
        data: {
            events
        }
    } = props;

    return (
        <div className="events flex column wrap myjumbotron jumbotron">
            <div>
                <h3>Events: </h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
                    odit accusantium incidunt minus, eaque et tempora vitae expedita cupiditate
                    nobis quam fugiat illum molestiae illo excepturi esse iure. Officiis, accusantium.
                </p>
            </div>

            <div className="top_event center flex  wrap">
                {filter_num(events, 5).map((el, index) => (
                    <div key={index} >
                        <img src={el.logo ? el.logo.url : ''} alt="" />
                        <h4>{el.name.text}</h4>
                        <p>Time: {el.start.local}</p>
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
    <div className="tips flex around column myjumbotron jumbotron">
        <div className="">
            <h3>Recommendations: </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
                odit accusantium incidunt minus, eaque et tempora vitae expedita cupiditate
                nobis quam fugiat illum molestiae illo excepturi esse iure. Officiis, accusantium.
            </p>
        </div>
        <div className="top_tip center flex  wrap">
            <div><p>Portfolio</p></div>
            <div><p>Connect with recruiters on Linkedin</p></div>
            <div><p>Start looking</p></div>
        </div>
    </div>
);



/**
 * Recommendations layout 
 * Layout 3 blocks
 */
const Recommendations = () => (
    <div className="resources flex  myjumbotron jumbotron ">
        <div className="column main-events ">
            <h3>Tips: </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
                odit accusantium incidunt minus, eaque et tempora vitae expedita cupiditate
                nobis quam fugiat illum molestiae illo excepturi esse iure. Officiis, accusantium.
            </p>
        </div>
        <div className="interview_tip center flex  wrap">
            <div><p>Tips about Interviews</p></div>
            <div><p>Hackerthons</p></div>
        </div>
    </div>
);


export default Dashboard;