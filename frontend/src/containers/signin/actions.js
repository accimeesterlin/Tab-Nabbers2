
import axios from "axios";


export const login = (url, data) => {
    return {
        type:"SIGNIN_IN",
        payload: axios({
            url, 
            method:"POST",
            data
        })
    }
};


/**
 * Get values
 * @param {*} data 
 */
export const getValues = (data) => {
    return{
        type:"GET_VALUES_SIGNIN",
        data
    };
};


