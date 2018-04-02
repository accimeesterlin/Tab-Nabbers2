import axios from "axios";

/**
 * Reset User password
 * @param {*} url 
 * @param {*} data 
 */
export const resetPassword = (url, data) => {
    return {
        type:"RESET_PASSWORD",
        payload:axios({
            url,
            method:"POST",
            data
        })
    };
};


export const getValues = (data) => {
    return {
        type:"GET_VALUES_RESET_PASSWORD",
        data
    };
};