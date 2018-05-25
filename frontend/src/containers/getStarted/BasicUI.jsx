import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

class BasicInfo extends Component {
  componentDidMount = () => {
    const email = this.props.user.email || "";

    console.log("Email: ", email);
    const getUsername = this.props.fetchGithubUsername(email);

    getUsername
      .then(response => {
        const username = response.value.data.items[0].login;
        this.props.fetchGithubProfile(username);
      })
      .catch(err => {
        // TODO

      });
  };

  profilePicture = url => {
    let componentToRender;
    url
      ? (componentToRender = <img src={url} alt="" />)
      : (componentToRender = <Loader active inline="centered" />); // TODO issue keep hanging

    return componentToRender;
  };

  isLoading = spin => {
    let componentToRender;
    spin === "pending"
      ? (componentToRender = <Loader active inline="centered" />)
      : (componentToRender = "");
    return componentToRender;
  };

  submitBasicInfo = event => {
    event.preventDefault();

    const { bio, location, username } = this.props;

    this.props.submitForm({
      bio,
      location,
      username
    });
  };

  render() {
    const {
      avatar_url,
      username,
      bio,
      location,
      status,
      isGithubActive
    } = this.props;

    if (isGithubActive || status === "fulfilled") {
      return <Redirect to="/dashboard" />;
    } 
    else {
      return (
        <div className="basic-info-container">
          <form
            action=""
            className="ui form basic"
            onSubmit={this.submitBasicInfo}
          >
            {this.profilePicture(avatar_url)}

            <div className="field">
              <label>Location: </label>
              <input
                type="text"
                name="location"
                value={location}
                onChange={this.props.handleChange}
                placeholder="Add your github username..."
              />

              {this.isLoading(status)}
            </div>

            <div className="field">
              <label>Username: </label>
              <input
                type="text"
                name="login"
                value={username}
                onChange={this.props.handleChange}
                placeholder="Add your github username..."
              />

              {this.isLoading(status)}
            </div>

            <div className="field">
              <label>Bio: </label>
              <textarea
                name="bio"
                cols="30"
                rows="10"
                onChange={this.props.handleChange}
                value={bio}
              />
              {this.isLoading(status)}
            </div>

            <button className="ui basic button">Save & Continue</button>
          </form>
        </div>
      );
    }
  }
}

export default BasicInfo;
