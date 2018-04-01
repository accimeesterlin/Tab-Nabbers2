
import axios from "axios";

export const getValues = (data) => {
    return{
        type:"GET_VALUES_SIGNUP",
        data
    };
};


export const signup = (url, data) => {
    return{
        type:"SIGN_UP",
        payload: axios({
            url,
            method:"POST",
            data
        })
    }
};