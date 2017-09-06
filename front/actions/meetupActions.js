/**
 * Created by esterlingaccime on 8/30/17.
 */
import * as types from "./actionTypes";
import axios from "axios";


export const fecthEventsSuccess = (events)  => {
    return{ type: types.GET_EVENT, events }
};


export const fetchEvents = () => {
    const api  = '/meetup/api'; 
    
    return (dispatch) => {
        return axios.get(api)
            .then((response) => {
                console.log(response.data);
                dispatch(fecthEventsSuccess(response.data.data));
            })
            .catch((err) => {
                throw err;
            })
    }
};