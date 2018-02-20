import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {
    Header,
    Footer,
    Input
} from "../../components";
import "./event.css";
import data from "./data.json";

// const mapStateToProps = (state) => {
//     return {

//     };
// }



const Search = (props) => (
        <div className="row">
            <div className="col-md-4">
                <div className="thumbnail">
           
                <Input  placeholder="Search events..." />
                <button className="btn">Search</button>
           
                </div>

        {true ? <DisplayEvents {...props}/> : ""}
            </div>
        </div>

);


const Week = (props) => ( true ? <DisplayEvents {...props}/> : "" );

const Allevents = (props) => ( true ? <DisplayEvents {...props}/> : "" );

const Saved = (props) => ( true ? <DisplayEvents {...props}/> : '' );



const DisplayEvents = (props) => (
    <div className="flex wrap center">
        {(props.data.events || []).map((el, index) => (
            <div className="week search" key={index}>
                <img src={el.logo ? el.logo.url : ''} alt="" />
                <h4>Name: {el.name.text}</h4>
                <p>Time: {el.start.local}</p>
                {
                    // Feature
                        // Add to calendar
                        // Share on Social Media
                }
                <div className="info">
                    <p>Description: {el.description.text}</p>
                </div>

            </div>
        ))}
    </div>
);



class Events extends Component {
    constructor(props) {
        super(props);
        // TODO
        // Send to Redux
        this.state = {
            view: 'Allevents',
            current_button:{
                allevents:"current"
            }
        };
    }

    componentWillMount = () => this.setState({ data });

    change_view = (view, event) => {

        const lower_view = view.toLowerCase();

        console.log("Lower: ", lower_view);
        console.log("Values: ", view);
        console.log("Event: ", event.target);
        this.setState({ view, current_button: {[lower_view]: "current"} })
    };

    render() {
        console.log("State: ", this.state);
        return (
            <div>
                <Header />
                <Content
                    change_view={this.change_view}
                    {...this.state} />
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
        <div className="content search_events ">
            <Sidebar {...props} />
            {switch_component[view](props)}
        </div>
    );
};



const Sidebar = (props) => (
    <div >
        <ul className="sidebar">
            <li onClick={(event) => props.change_view("Search", event)} className = {props.current_button["search"]}>Search</li>
            <li onClick={(event) => props.change_view("Allevents", event)} className = {props.current_button["allevents"]}>Events</li>
            <li onClick={(event) => props.change_view("Saved", event)} className = {props.current_button["saved"]}>Saved</li>
            <li onClick={(event) => props.change_view("Week", event)} className = {props.current_button["week"]}>Next week</li>
        </ul>
    </div>
);
export default Events;

