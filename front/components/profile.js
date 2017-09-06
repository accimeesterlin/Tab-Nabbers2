import React, { Component } from 'react';
import { Grid, Menu, Segment, Dropdown, Rating } from 'semantic-ui-react';
import InlineEdit from 'react-edit-inline';
import Footer from "./common/Footer";
import Event from "./Event";
import fetch from "../utils/api";

import {Image} from 'cloudinary-react';

import css from "../public/css/profile.scss";



class Profile extends React.Component{
    state = {
        activeItem: 'About',
        message: 'Work' ,
        street:"Enter your street",
        address:"Enter your address",
        title: "Spotify New York",
        job: "Enter your Job Status",
        firstname:"Enter your first name",
        lastname:"Enter your last name",
        addr:'Enter your city and state',
        phoneNumber: "Enter your phone number",

        homeaddress:"Enter your home address",
        email:"Enter your email",
        site:"Enter your portfolio site",
        birthday: "Enter your date of birthday",
        gender: "Enter your gender",
        github:'',
        last_login:'',
        status:'',
        photo:"",
        id:"",
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    dataChanged = (data) => {
        console.log(data);

        this.setState({...data});
        console.log({...data});

        if(!data.activeItem){

            fetch.userUpdate({...data, userID: localStorage.getItem("userID")})
                .then(function(data) {
                    console.log(data);
                })
                .catch(function(err){
                    console.log(err);
                });
        }

    }


    componentDidMount() {
  		fetch.getData()
            .then(function (user) {
                this.setState({...user.data});

                console.log(user);
                console.log(user.data.photo);
            }.bind(this))
            .catch(function (err) {
                console.log(err);
            });



  	}


  	// Do NOT touch this code
  	getIn = (event) => {
        console.log(event.target);

    }


    sendUpload = (event) => {
        console.log("Hello World!!");
        fetch.uploadImage()

    }



    render(){

        const { activeItem } = this.state;

        const options = [
          { key: 'angular', text: 'Angular', value: 'angular' },
          { key: 'css', text: 'CSS', value: 'css' },
          { key: 'html', text: 'HTML', value: 'html' },
          { key: 'javascript', text: 'Javascript', value: 'javascript' },
          { key: 'meteor', text: 'Meteor', value: 'meteor' },
          { key: 'node', text: 'NodeJS', value: 'node' },
          { key: 'python', text: 'Python', value: 'python' },
          { key: 'rails', text: 'Rails', value: 'rails' },
          { key: 'react', text: 'React', value: 'react' },
          { key: 'ruby', text: 'Ruby', value: 'ruby' },
          { key: 'ui', text: 'UI Design', value: 'ui' },
          { key: 'ux', text: 'User Experience', value: 'ux' },
        ];

        return(
            <section className="profile">

                <div className="profile__about">

                    <div className="ui fluid image">
                        <div className="img">
                            <Image cloudName="profile-images" publicId={this.state.photo}/>
                        </div>
                    </div>
                    <form method='post' action='/upload' encType="multipart/form-data">
                        <div className="file-field">
                            <div className="btn btn-elegant btn-md">
                                <span>Upload your profile photo</span>
                                <label htmlFor="fileUploaded"></label>
                                <input type='file' name='fileUploaded'/>

                                <label htmlFor={localStorage.getItem("userID")}></label>
                                <input type="hidden" name={localStorage.getItem("userID")}/>
                                <input id="imageSubmit" type='submit' className="ui primary button"/>
                            </div>
                        </div>
                    </form>
                    <div className="profile__about--status">
                        <h3>Work</h3>
                        <hr/>
                    </div>


                    <div className="profile__about--address">
                        <h4> <InlineEdit
                            activeClassName="title"
                            text={this.state.title}
                            paramName="title"
                            change={this.dataChanged}/></h4>
                        {/*<button className="ui button" id="address">Edit</button>*/}

                        <p> <InlineEdit
                            activeClassName="street"
                            text={this.state.street}
                            paramName="street"
                            change={this.dataChanged}/></p>

                        <p> <InlineEdit
                            activeClassName="address"
                            text={this.state.address}
                            paramName="address"
                            change={this.dataChanged}/></p>
                    </div>


                    <h3>Skills</h3>
                    <hr/>

                    <div className="profile__about--skills">
                      <Dropdown placeholder='Skills' fluid multiple selection options={options} onChange={this.getIn} />
                    </div>

                </div>




                <div className="profile__content">

                    <div className="profile__content--about">
                       <div className="header">
                           <h4 className="left"> <InlineEdit
                               activeClassName="firstname"
                               text={this.state.firstname}
                               paramName="firstname"
                               change={this.dataChanged}/></h4>


                           <h4 className=""> <InlineEdit
                                activeClassName="lastname"
                               text={this.state.lastname}
                               paramName="lastname"
                               change={this.dataChanged}/></h4>

                       </div>

                        <div className="bookmarksection">
                            <p className="left"> <InlineEdit
                                activeClassName="job"
                                text={this.state.job}
                                paramName="job"
                                change={this.dataChanged}/></p>

                            <p className="left"> <i className="marker icon"> </i> <InlineEdit
                                activeClassName="addr"
                                text={this.state.addr}
                                paramName="addr"
                                change={this.dataChanged}/></p>

                            <p className="right bookmark"><i className="bookmark icon"> </i>Bookmark</p>

                        </div>
                    </div>

                    <div className="profile__content--ranking">
                        <h3>Rankings</h3>
                       <div>
                           <Rating maxRating={5} clearable />
                      </div>
                    </div>

                    <div className="profile__content--contact">
                        <p> <i className="mail outline icon"> </i>Send a message</p>
                        <p> <i className="checkmark icon"> </i> Contacts</p>
                        <p>Report a User</p>
                    </div>


                    <div className="profile__content--timeline">
                        {/*<p><i className="unhide icon"> </i> Timeline</p>*/}
                        {/*<p> <i className="user icon"> </i>About</p>*/}

                        <Menu pointing secondary>
                            <Menu.Item name='Meetup Events' active={activeItem === 'Timeline'} onClick={this.handleItemClick}/>
                            <Menu.Item name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />

                        </Menu>

                        <div>
                            {(this.state.activeItem === 'About') ? <About
                                phoneNumber = {this.state.phoneNumber }
                              homeaddress = {this.state.homeaddress}
                              email = {this.state.email}
                              site = {this.state.site}
                              birthday = {this.state.birthday}
                              gender = {this.state.gender}
                              dataChanged = {this.dataChanged}

                            /> :  <Event />}
                        </div>

                        {/*<About />*/}


                    </div>

                </div>

            </section>


        )
    }
}

class About extends React.Component {



    render(){
        return (
            <div className="about">

                <div className="info">
                    <h3>Contact Information</h3>
                    <div>
                        <h4 className="">Phone: </h4>
                        <p className=""><InlineEdit
                            activeClassName="phoneNumber"
                            text={this.props.phoneNumber}
                            paramName="phoneNumber"
                            change={this.props.dataChanged}/></p>
                    </div>

                    <div>
                        <h4 className="">Address:</h4>
                        <p className=""> <InlineEdit
                            activeClassName="homeaddress"
                            text={this.props.homeaddress}
                            paramName="homeaddress"
                            change={this.props.dataChanged}/></p>

                    </div>

                    <div>
                        <h4 className="">Email:</h4>
                        <p className=""> <InlineEdit
                            activeClassName="email"
                            text={this.props.email}
                            paramName="email"
                            change={this.props.dataChanged}/></p>
                    </div>

                    <div>
                        <h4 className="left">Site: </h4>
                        <p className="right"> <InlineEdit
                            activeClassName="site"
                            text={this.props.site}
                            paramName="site"
                            change={this.props.dataChanged}/><a href="http:www.google.com/" target="_blank"></a></p>
                    </div>

                </div>


                <div className="basic">
                    <h3>Basic Information</h3>

                    <div>
                        <h4 className="left">Birthday: </h4>
                        <p className="right"> <InlineEdit
                            activeClassName="birthday"
                            text={this.props.birthday}
                            paramName="birthday"
                            change={this.props.dataChanged}/></p>
                    </div>

                    <div>
                        <h4 className="left">Gender:</h4>
                        <p className="right"> <InlineEdit
                            activeClassName="gender"
                            text={this.props.gender}
                            paramName="gender"
                            change={this.props.dataChanged}/></p>
                    </div>
                </div>
            </div>
        )
    }

};



export default Profile;
