/**
 * Created by ea375w on 7/19/2017.
 */

import Signin from "../components/Student";
import Recruiter from "../components/Recruiter";
import Profile from "../components/profile";
import About from "../components/About";
import Features from "../components/Features";
import Contact from "../components/Contact";
import D3Map from "../components/D3Map";
import Event from "../components/Event";

const pages = {
        about:About,
        student:Signin,
        profile:Profile,
        map:D3Map,
        recruiter:Recruiter,
        event:Event,
        features:Features,
        contact:Contact
};


export default pages;
