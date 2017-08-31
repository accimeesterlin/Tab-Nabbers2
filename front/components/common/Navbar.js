/**
 * Created by esterlingaccime on 6/24/17.
 */
import React from "react";

import "../../public/css/header.scss";

import {Navbar, Icon, NavItem} from "react-materialize";

var Header = () => (

        <Navbar brand='Bootcruit' right>
            <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>
    );

export default Header;