import React from "react";
import {combineReducers} from "redux";
import events from "./meetupReducers";


const allReducers = combineReducers({
    events
});


export default allReducers;