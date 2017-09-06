/**
 * Created by esterlingaccime on 8/12/17.
 */
import React from "react";
import InlineEdit from "react-edit-inline";
import {Image} from 'cloudinary-react';
import { Grid, Menu, Segment, Dropdown, Rating } from 'semantic-ui-react';

const About = ({title, street, photo, dataChanged, getIn }) => {

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
        <div className="profile__about">

            <div className="ui fluid image">
                <div className="img">
                    <Image cloudName="profile-images" publicId={photo}/>
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
                    text={title}
                    paramName="title"
                    change={dataChanged}/></h4>
                <button className="ui button" id="address">Edit</button>

                <p> <InlineEdit
                    activeClassName="street"
                    text={street}
                    paramName="street"
                    change={dataChanged}/></p>

                <p> <InlineEdit
                    activeClassName="address"
                    text={street}
                    paramName="address"
                    change={dataChanged}/></p>
            </div>


            <h3>Skills</h3>
            <hr/>

            <div className="profile__about--skills">
                <Dropdown placeholder='Skills' fluid multiple selection options={options} onChange={getIn} />
            </div>

        </div>

    );
};

export default About;