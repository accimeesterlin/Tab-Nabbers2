import axios from "axios";



export const authorize = (service) => {
    return {
        type:"AUTHORIZE_SERVICE",
        payload:axios({
            method:"POST",
            url:"/secure/authorize",
            data:{
                service
            }
        })
    };
};


export const getListIntegrations = () => {
    return {
        type:"INTEGRATIONS_LIST",
        payload: axios("/secure/list/integrations")
    };
};