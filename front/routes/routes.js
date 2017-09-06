import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import {Provider} from "react-redux";
import Home from "../containers/_Home";
import {Video} from "../components/home/index";
import PropTypes from 'prop-types';
import Pages from "./Pages";


const Routes = ({store}) => (

    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                {Object.keys(Pages).map((routing, i) => (<Route path={routing.toLowerCase()} component={Pages[routing]} key={i} />))}
                <IndexRoute component={Video} />
            </Route>
        </Router>
    </Provider>
);


Routes.propTypes = {
    store: PropTypes.object.isRequired
};

export default Routes;
