const initialState = {
    error: undefined,
    authenticated: false, // global
    pending: false,
};


const signup = (state = initialState, action) => {

    switch (action.type) {
        case "SIGN_UP_FULFILLED":
            return {
                ...state,
                pending: false
            };
        case "SIGN_UP_REJECTED":
            return {
                ...state,
                error: action.payload.response.data.error,
                pending: false
            };

        case "SIGN_UP_PENDING":
            return {
                ...state,
                pending: true
            };

        default:
            return state;
    }
};


export default signup;