import axios from "axios";

export const getServiceToken = (service, code) => {
    return {
        type:"SERVICE_TOKEN",
        payload: axios({
            url:"/secure/token",
            method:"POST",
            data:{
                code,
                service
            }
        })
    };
};