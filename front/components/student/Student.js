/**
 * Created by esterlingaccime on 6/27/17.
 */
import React from "react";

import { Button, Checkbox, Form } from "semantic-ui-react";

import css from "../../public/css/login.scss";

import fetch from "../../utils/api";

import axios from "axios";

class Signin extends React.Component {

    state = {
        active: true
    };

    signinView = () => {
        this.setState({ active: true });
    };

    signupView = () => {
        this.setState({ active: false });

    };


    render() {
        return (
            <div className="sicontainer ui one column center aligned grid">
                <div className="signin column six wide form-holder">

                    <div className="button-container">
                        <div className={ this.state.active ? "field active": "field" } onClick={this.signinView}>
                            <input type="submit" value="Sign in" className="ui button" />
                        </div>

                        <div className={this.state.active ? "field right": "field active right" } onClick={this.signupView}>
                            <input type="submit" value="Sign up" className="ui button"/>
                        </div>
                    </div>

                    <h2 className="center aligned header form-head">{this.state.active ? "Student - Sign in" : "Student - Sign up"}</h2>

                    {this.state.active ? <SignInView /> : <SignUpView/> }
                </div>
            </div>
        );
    }
}


//Sign In User
class SignInView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value.trim()
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value.trim()
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var user = {
            email: this.state.email,
            password: this.state.password
        };
        var nullFields = 0;
        for (var prop in user) {
            if (user[prop] === null) {
                nullFields++;
                console.log("%s field is null", prop);
            }
        }
        if (nullFields === 0) {
            fetch.signin(user)
                .then(function(data) {
                    location.href = '/profile'
                    localStorage.setItem("userID", data.data.id);
                    localStorage.setItem("token", data.data.token);
                    if (data.data.token) {
                        location.href = '/profile'
                    }
                })
                .catch(function(err) {
                    console.log(err);
                });
        } else {
            console.log("All fields required");
        }
    }

    render() {
        return (
            <div className="ui form">
                <div className="field">
                    <input type="text" placeholder="Email..." onChange={this.handleEmailChange} id="username" required/>
                </div>

                <div className="field">
                    <input type="password" placeholder="Password..." onChange={this.handlePasswordChange} id="password" required/>
                </div>

                <div className="field">
                    <input type="submit" value="Sign In" className="ui button large fluid" onClick={this.handleSubmit}/>
                </div>

                <div className="inline field">
                    <div className="ui checkbox">
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>

                </div>
            </div>
        );
    }
}

//User Sign Up Component
class SignUpView extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: null,
            lastname: null,
            email: null,
            password: null,
            bootcamp: null,
            cohort: null,
            bootcamps: [],
            cohorts: []
        };

        this.getBootcamps = this.getBootcamps.bind(this);
        this.getCohorts = this.getCohorts.bind(this);
        this.setBootcampOptions = this.setBootcampOptions.bind(this);
        this.setCohortOptions = this.setCohortOptions.bind(this);

        //On-Change Event Handlers
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleBootcampChange = this.handleBootcampChange.bind(this);
        this.handleCohortChange = this.handleCohortChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    //On-Change Event Handlers
    handleFirstNameChange(event) {
        this.setState({
            firstname: event.target.value.trim()
        });
    }

    handleLastNameChange(event) {
        this.setState({
            lastname: event.target.value.trim()
        });
    }

    handleEmailChange(event) {
        this.setState({
            email: event.target.value.trim()
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value.trim()
        });
    }

    handleBootcampChange(event) {
        this.setState({
            bootcamp: event.target.value
        }, this.getCohorts);
    }

    handleCohortChange(event) {
        this.setState({
            cohort: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        var nullFields = 0;
        var user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            bootcampId: this.state.bootcamp,
            cohortId: this.state.cohort
        };
        for (var prop in user) {
            if (user[prop] === null) {
                nullFields++;
                console.log("%s field is null", prop);
            }
        }
        if (nullFields === 0) {
            fetch.signup(user).then(function(data) {
                localStorage.setItem("userID", data.data.id);
                localStorage.setItem("token", data.data.token);
                location.href = "/profile";
            }).catch(function(err) {
                console.log(err);
            })
        } else {
            console.log("All fields required");
        }
    }

    //Axios Calls for retrieveing Bootcamp and Cohort information to populate dropdowns
    getBootcamps() {
        axios.get("/bootcamps").then((bcamps) => {
            this.setState({
                bootcamps: bcamps.data,
                bootcamp: bcamps.data[0].id
            }, this.getCohorts);
        }).catch(function(err) {
            console.log(err)
        });
    }

    getCohorts() {
        axios.post("/cohorts", {
            bootcampId: this.state.bootcamp
        }).then((cohorts) => {
            this.setState({
                cohorts: cohorts.data,
                cohort: cohorts.data[0].id
            });
        }).catch(function(err) {
            console.log(err);
        })
    }

    //Functions to populate dropdown menus for bootcamp and cohort
    setBootcampOptions() {
        var bootcampOptions = this.state.bootcamps.map(function(b) {
            return (
                <option key={b.id} value={b.id}>{b.institution}</option>
            )
        });
        return bootcampOptions;
    }

    setCohortOptions() {
        var cohortOptions = this.state.cohorts.map(function(c) {
            return (
                <option key={c.id} value={c.id}>{c.cohort}</option>
            )
        });
        return cohortOptions;
    }

    //Lifecycle Methods
    componentDidMount() {
        this.getBootcamps();
    }

    render() {

        var bootcampOptions = this.setBootcampOptions();
        var cohortOptions = this.setCohortOptions();

        return (
            <div className="ui form">
                <div className="field">
                    <input type="text" placeholder="Firstname..." onChange={this.handleFirstNameChange} id="firstname" required/>
                </div>

                <div className="field">
                    <input type="text" placeholder="Lastname..." onChange={this.handleLastNameChange} id="lastname" required/>
                </div>

                <div className="field">
                    <input type="text" placeholder="Email..." onChange={this.handleEmailChange} id="email" required/>
                </div>

                <div className="field">
                    <input type="password" placeholder="Password..." onChange={this.handlePasswordChange} id="password" required/>
                </div>

                <div className="field">
                    <select className="ui dropdown" onChange={this.handleBootcampChange}>
                        {bootcampOptions}
                    </select>
                </div>

                <div className="field">
                    <select className="ui dropdown" onChange={this.handleCohortChange}>
                        {cohortOptions}
                    </select>
                </div>
                <br/>

                <div className="field">
                    <input type="submit" value="Sign Up" className="ui button large fluid" onClick={this.handleSubmit}/>
                </div>
            </div>
        );
    }
};



export default Signin;
