import React from 'react';
import {
    Link,
    NavLink
} from "react-router-dom";
import "./header.css";

const Header = (props) => (
    <header className="header">
        <section className = "flex between main-center">
            <div></div>
            <ul className="flex around">
                <li><NavLink to="/dashboard" >Dashboard</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li onClick={props.logout}><Link to="/">Signout</Link></li>

            </ul>
        </section>
    </header>
);

export default Header;