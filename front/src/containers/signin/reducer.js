const initialState = {
    error: undefined,
    authenticated: false,
    pending: false
};


const signin = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNIN_IN_FULFILLED":
            return {
                ...state,
                pending: false,
                error: undefined
            };
        case "SIGNIN_IN_REJECTED":
            return {
                ...state,
                error:  action.payload.response.data.error,
                pending: false
            };
        case "SIGNIN_IN_PENDING":
            return {
                ...state,
                error: undefined,
                pending: true
            };
         
        default:
            return state;
    }
};

export default signin;