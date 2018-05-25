import React, { Component } from "react";
import { connect } from "react-redux";
import "./profile.css";
import { Header, Footer } from "../../components";

import {
  authorize, // @params url, service,
  getListIntegrations
} from "./actions";

const Integrations = props => {
  return (
    <section className="integrations flex around wrap">
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
          sed in. Incidunt quae quod deserunt tempore accusantium sapiente
          doloribus, dignissimos asperiores temporibus nulla, a reiciendis
          nesciunt placeat laboriosam dolores autem!
        </p>
        <p
          className={props.profile.github ? "integrated" : ""}
          onClick={() => props.authorizeService("github")}
        >
          Github
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
          sed in. Incidunt quae quod deserunt tempore accusantium sapiente
          doloribus, dignissimos asperiores temporibus nulla, a reiciendis
          nesciunt placeat laboriosam dolores autem!
        </p>
        <p
          className={props.profile.eventbrite ? "integrated" : ""}
          onClick={() => props.authorizeService("eventbrite")}
        >
          EventBrite
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
          sed in. Incidunt quae quod deserunt tempore accusantium sapiente
          doloribus, dignissimos asperiores temporibus nulla, a reiciendis
          nesciunt placeat laboriosam dolores autem!
        </p>
        <p
          className={props.profile.google ? "integrated" : ""}
          onClick={() => props.authorizeService("google")}
        >
          Google Calendar
        </p>
      </div>
    </section>
  );
};
const Settings = () => (
  <div className="settings flex around wrap">
    <form action="" className="ui form">
      <div className="field">
        <label>Name</label>
        <input type="text" name="name" placeholder="name..." />
      </div>
      <div className="field">
        <label>Github</label>
        <input type="text" name="github" placeholder="Github url..." />
      </div>
      <div className="field">
        <label>Bio</label>
        <textarea name="bio" cols="30" rows="10" />
      </div>
      <div className="field">
        <label>Portfolio</label>
        <input type="text" name="portfolio" placeholder="Portfolio url.." />
      </div>
      <div className="field">
        <label>Position</label>
        <input type="text" name="position" placeholder="position" />
      </div>
    </form>
  </div>
);

const Info = () => (
  <div className="main_info flex main-center around wrap ">
    <form action="" className="ui form">
      <div className="field">
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" />
      </div>

      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Name (Firstname and Lastname)"
        />
      </div>

      <div className="field">
        <label>Summary</label>
        <textarea name="summary" cols="30" rows="10" />
      </div>

      <div className="field">
        <label>Interest</label>
        <input type="text" name="interest" placeholder="interest" />
      </div>

      <div className="field">
        <label>Address</label>
        <input type="text" name="address" placeholder="address" />
      </div>

      <div className="field">
        <label>City</label>
        <input type="text" name="city" placeholder="city" />
      </div>

      <div className="field">
        <label>Zipcode</label>
        <input type="text" name="zipcode" placeholder="zipcode" />
      </div>

      <div className="field">
        <label>State</label>
        <input type="text" name="state" placeholder="state" />
      </div>
    </form>
  </div>
);

const Credentials = () => (
  <div className="profile-credentials">
    <div>
      <h3>Warning</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum maxime
        iusto vitae autem ad est corrupti! Optio consectetur quas dolores ipsam
        laudantium ecessitatibus maiores eligendi atque. Perferendis impedit
        beatae deserunt?
      </p>
    </div>
    <form className="ui form">
      <div className="field">
        <label> Password</label>
        <input type="password" name="password" placeholder="password" />
      </div>

      <div className="field">
        <label> Email</label>
        <input type="text" name="email" placeholder="email" />
      </div>

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

  componentWillMount = () => {
    this.props.dispatch(getListIntegrations());
  };

  authorizeService = (url, service) => {
    this.props.dispatch(authorize(url, service));
  };

  componentWillReceiveProps = nextProps => {
    localStorage.setItem("service", nextProps.profile.service);
    if (nextProps.profile.authorize_url !== this.props.profile.authorize_url) {
      window.location.href = nextProps.profile.authorize_url;
    }
  };

  change_view = view => this.setState({ view, current: { [view]: "current" } });
  render() {
    console.log("Props: ", this.props.profile.github);
    return (
      <div>
        <Header />
        <Content
          {...this.props}
          {...this.state}
          change_view={this.change_view}
          authorizeService={this.authorizeService}
        />
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

const Content = props => {
  return (
    <div className="content profile flex between">
      <Sidebar {...props} />
      <div className="profile-content">{sub_components[props.view](props)}</div>
    </div>
  );
};

const Sidebar = props => (
  <div className="profile-sidebar">
    <ul className="flex center column">
      <li
        onClick={() => props.change_view("Info")}
        className={props.current["Info"]}
      >
        Info
      </li>
      <li
        onClick={() => props.change_view("Settings")}
        className={props.current["Settings"]}
      >
        Settings
      </li>
      <li
        onClick={() => props.change_view("Credentials")}
        className={props.current["Credentials"]}
      >
        Credentials
      </li>
      <li
        onClick={() => props.change_view("Integrations")}
        className={props.current["Integrations"]}
      >
        Integrations
      </li>
    </ul>
  </div>
);

const mapPropsToState = state => {
  return {
    profile: state.profile
  };
};

export default connect(mapPropsToState)(Profile);
