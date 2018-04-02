import axios from "axios";



/**
 * Reset User password
 * @param {*} url 
 * @param {*} data 
 */
export const addNewPassword = (url, data) => {
    return {
        type:"NEW_PASSWORD",
        payload:axios({
            url,
            method:"POST",
            data
        })
    };
};


export const getValues = (data) => {
    return {
        type:"GET_VALUES_NEW_PASSWORD",
        data
    };
};