/**
 * Created by esterlingaccime on 8/30/17.
 */
import * as types from "./actionTypes";
import key from "../../back/config/key";
import axios from "axios";


export const fecthEventsSuccess = (events)  => {
    return{ type: types.GET_EVENT, events }
};


export const fetchEvents = () => {
    const api  = 'https://api.meetup.com/find/events?text=JavaScript&key=' + key.meetup.key;

    return (dispatch) => {
        return axios.get(api)
            .then((response) => {
                console.log(response.data);
                dispatch(fecthEventsSuccess(response.data));
            })
            .catch((err) => {
                throw err;
            })
    }
};