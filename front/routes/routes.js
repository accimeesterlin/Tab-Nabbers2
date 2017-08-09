import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";

import {Provider} from "react-redux";

import Main from "../components/Main";
import Home from "../components/Home";


import PropTypes from 'prop-types'
import Pages from "./Pages";




const Routes = ({store}) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>

                {
                    Object.keys(Pages).map((routing, i) => (

                        <Route path={routing} component={Pages[routing]} key={i} > </Route>
                    ))
                }

                <IndexRoute component={Home} />

            </Route>
        </Router>
    </Provider>
);


Routes.propTypes = {store: PropTypes.object.isRequired }

export default Routes;




{/*<Route path="map" component={D3Map}></Route>*/}
{/*<Route path="recruiter" component={Recruiter}></Route>*/}
{/*<Route path="event" component={Event}></Route>*/}