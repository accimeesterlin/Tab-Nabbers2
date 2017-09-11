import React from "react";
import {
  Route,
  IndexRoute,
  Router,
  browserHistory,
 } from "react-router";
import { Provider } from "react-redux";
import Home from "../containers/_Home";
import Video from "../components/home/video";
import PropTypes from 'prop-types';
import { Pages, ProfilePage } from "./Pages";
import EnsureLoggedInContainer as ELIC from './EnsureLoggedIn';

const Routes = ({store}) => (

    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}>
                <IndexRoute component={Video} />
                {Object.keys(Pages).map((routing, i) => (<Route path={routing.toLowerCase()} component={Pages[routing]} key={i} />))}
                <Route path="profile" component= {ProfilePage} onEnter= {ELIC.requireAuth()} />
            </Route>
        </Router>
    </Provider>
);


Routes.propTypes = {
    store: PropTypes.object.isRequired
};

export default Routes;
