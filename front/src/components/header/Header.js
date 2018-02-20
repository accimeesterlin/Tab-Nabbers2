import React from 'react';
import {
    Link,
    NavLink
} from "react-router-dom";
import "./header.css";

const Header = () => (
    <header className="navbar navbar-default  myheader ">
        <Link to = "/"><h1>Bootcruit </h1></Link>
        <ul className="nav-pils nav-links">
            <li><NavLink to="/dashboard" >Dashboard</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><Link to="/">Signout</Link></li>
            
        </ul>
    </header>
);

export default Header;