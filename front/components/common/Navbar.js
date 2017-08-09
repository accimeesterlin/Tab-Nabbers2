/**
 * Created by esterlingaccime on 6/24/17.
 */
import React from "react";

import css from "../../../public/css/header.scss";

var Header = () =>
    (
        <nav className="navbar">
            {/*<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*<span className="navbar-toggler-icon"></span>*/}
            {/*</button>*/}
            <a className="navbar__link" href="/">
                <strong>BootCruit</strong>
            </a>

            <div className="navbar__menu" >
                <ul className="">
                    <li className="">
                        <a className="">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="">
                        <a className="" href="about">About</a>
                    </li>
                    <li className="">
                        <a className="" href="features">Features</a>
                    </li>
                    <li className="">
                        <a className="" href="contact">Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
    );

export default Header;