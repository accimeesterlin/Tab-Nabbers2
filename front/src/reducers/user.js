const initial_state = {
    authenticated: false,
    pending: false,
    search: ""
};


const user = (state = initial_state, action) => {

    switch (action.type) {
        case "LOGOUT":
            return {
                ...state,
                authenticated: false
            };

        case "GET_VALUE":
        case "GET_VALUES_SIGNUP":
        case "GET_VALUES_SIGNIN":
            return {
                ...state,
                ...action.data
            };


        case "SIGNIN_IN_FULFILLED":
        case "SIGN_UP_FULFILLED":
            return {
                ...state,
                authenticated: true
            };

        case "GET_LOCATION_FULFILLED":
            return {
                ...state,
                location: { ...action.payload.data }
            };


        default:
            return state;
    }
}

export default user;