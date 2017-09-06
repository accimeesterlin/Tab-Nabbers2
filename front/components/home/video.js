import React from "react";
import "../../public/css/home.scss";
import { Link } from 'react-router';

const Video = () => {
    return(
        <div className="video">
            <div className="video__buttons">
                <h5>Single-Click Staffing <br/>Solutions</h5>
                <button className="greenButton"><Link to="/login">Student</Link></button>
                <button className="blueButton"><Link to="/recruiter">Employer</Link></button>
            </div>
            <video autoPlay loop className="fullscreen">
                <source src="videos/Clouds_Fly_By.mp4" type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.

                <source src="videos/Clouds_Fly_By.webm" type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
            </video>
        </div>
    );
};
export default Video;
