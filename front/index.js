/**
 * Created by esterlingaccime on 6/24/17.
 */

import "./public/css/_global.scss";

import "babel-polyfill";

import React from "react";

import ReactDOM from "react-dom";

import Routes from "./routes/routes";

import thunk from "redux-thunk";

import {createStore, applyMiddleware} from "redux";

import {fetchEvents} from "./actions/meetupActions";


import reducers from "./reducers/index";



const store = createStore(reducers, applyMiddleware(thunk));

      // store.dispatch(fetchEvents());



ReactDOM.render(<Routes store={store} />,

    document.getElementById("app"));


if(module.hot){
    module.hot.accept();
}