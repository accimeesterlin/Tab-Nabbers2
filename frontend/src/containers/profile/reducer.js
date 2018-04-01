

const initialState = {
    authorize_url:"",
    service:""

};

 const profile = (state = initialState, action) => {

    switch (action.type) {
        case "AUTHORIZE_SERVICE_FULFILLED":
            return{
                ...state,
                authorize_url: action.payload.data.url,
                service:action.payload.data.service
            };


        case "INTEGRATIONS_LIST_FULFILLED":
            return{
                ...state,
                ...action.payload.data
            };    
    
        default:
            return state;
    }
};

export default profile;