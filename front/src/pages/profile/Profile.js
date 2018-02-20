import React, { Component } from 'react';
// import { connect } from 'react-redux';
import "./profile.css";
import {
    Header,
    Footer,
    Input
} from "../../components";

// const mapStateToProps = (state) => {
//     return {

//     };
// }



const Integrations = () => (
    <section className="integrations jumbotron">
        <div >
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
                sed in. Incidunt quae quod deserunt tempore accusantium sapiente doloribus,
                 dignissimos asperiores temporibus nulla, a reiciendis nesciunt placeat
                 laboriosam dolores autem!
            </p>
            <p>Github</p>
        </div>
        <div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
                sed in. Incidunt quae quod deserunt tempore accusantium sapiente doloribus,
                 dignissimos asperiores temporibus nulla, a reiciendis nesciunt placeat
                 laboriosam dolores autem!
            </p>
            <p>Twitter</p>
        </div>
        <div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
                sed in. Incidunt quae quod deserunt tempore accusantium sapiente doloribus,
                 dignissimos asperiores temporibus nulla, a reiciendis nesciunt placeat
                 laboriosam dolores autem!
            </p>
            <p>EventBrite</p>
        </div>
        <div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
                sed in. Incidunt quae quod deserunt tempore accusantium sapiente doloribus,
                 dignissimos asperiores temporibus nulla, a reiciendis nesciunt placeat
                 laboriosam dolores autem!
            </p>
            <p>Google Calendar</p>
        </div>
    </section>
);

const Settings = () => (
    <div className="settings ">
        <Input name="Username" />
        <Input name="Username" />
        <Input name="Username" />
        <Input name="Username" />
    </div>
);


const Info = () => (
    <div className="main_info jumbotron myjumbotron ">
        <Input name="Username" />
        <Input name="Name" sub_text = "(Firstname and Lastname)"/>
        <Input name="Interest" sub_text = "(Interested events)"/>
        <Input name="Address" />
        <Input name="City" />
        <Input name="Zipcode" />
        <Input name="State" />
        <div className="submit-info">
            <button className="btn btn-primary"> Submit </button>
        </div>
    </div>
);

const Credentials = () => (
    <div className="credentials  ">
        <div>
            <h3>Warning</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maxime iusto
                 vitae autem ad est corrupti! Optio consectetur quas dolores ipsam laudantium
                 ecessitatibus maiores eligendi atque. Perferendis impedit beatae deserunt?
            </p>
        </div>
        <form >
            <Input name="Password" />
            <Input name="email" />
            <button className="btn">Change</button>
        </form>
    </div>
);



class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: "Info",
            current: {
                Info: "current"
            }
        };
    }


    change_view = (view) => this.setState({ view, current: { [view]: "current" } });
    render() {
        return (
            <div className="">
              
                <Content {...this.state} change_view={this.change_view} />
                <Footer />
            </div>
        );
    }
}


const sub_components = {
    Integrations,
    Settings,
    Info,
    Credentials
};

const Content = (props) => {
    return (
        <div className="content profile flex between">
            <Sidebar {...props} />
            <div className="edit">
                {sub_components[props.view](props)}
            </div>
        </div>
    );
};


const Sidebar = (props) => (
    <div className="sidebar">
        <ul className="flex center column">
            <li onClick={() => props.change_view("Info")} className={props.current["Info"]}>Info</li>
            <li onClick={() => props.change_view("Settings")} className={props.current["Settings"]}>Settings</li>
            <li onClick={() => props.change_view("Credentials")} className={props.current["Credentials"]}>Credentials</li>
            <li onClick={() => props.change_view("Integrations")} className={props.current["Integrations"]}>Integrations</li>
        </ul>
    </div>
);




export default Profile;