import React from 'react';
import "./footer.css";


const Footer = () => (
    <footer className="flex between">
        <div>
            <ul className="flex center">
                <li>Github</li>
                <li>About</li>
                <li>Integrations</li>
            </ul>
        </div>


        <div>
            <ul className = "flex center">
                <li className = "fa fa-github"></li>
            </ul>
        </div>
    </footer>
);

export default Footer;