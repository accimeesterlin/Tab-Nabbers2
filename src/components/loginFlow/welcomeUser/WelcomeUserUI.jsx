import React, { Component } from 'react';
import { Input, Button, TextArea, Form } from 'semantic-ui-react';
import './WelcomeUser.css';

/*
    photo,
    bio,
    hireable,
    name,
    publicRepo,
    portfolioWebsite,
    userLocation
*/

export default class WelcomeUser extends Component {

    componentDidMount = () => {
        const { email, fetchGithubProfile } = this.props;
        fetchGithubProfile(email)
    };

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.props.getValue({ [name]: value });
    };

    onSubmit = (event) => {
        event.preventDefault();

        // TODO
        // Submit Profile
    };


    render() {
        const { portfolioWebsite, bio, photo, userLocation, username } = this.props;
        return (
            <Form className="welcome-user" onSubmit={this.onSubmit}>
                <img src={photo} alt="" />

                <Form.Field>
                    <label>Username</label>
                    <Input
                        placeholder='accimeesterlin'
                        value={username}
                        onChange={this.handleChange}
                        name="githubUsername" />
                </Form.Field>


                <Form.Field>
                    <label>Location</label>
                    <Input
                        placeholder='http://www.google.com'
                        value={userLocation}
                        onChange={this.handleChange}
                        name="location" />
                </Form.Field>


                <Form.Field>
                    <label>Portfolio</label>
                    <Input
                        placeholder='Atlanta, GA'
                        value={portfolioWebsite}
                        onChange={this.handleChange}
                        name="website" />
                </Form.Field>

                <div>
                    <label htmlFor="bio">Bio</label>
                    <TextArea
                        placeholder='Tell us more'
                        value={bio}
                        onChange={this.handleChange}
                        name="bio" />
                </div>

                <Button>Review and Confirm</Button>
            </Form>
        );
    }
}