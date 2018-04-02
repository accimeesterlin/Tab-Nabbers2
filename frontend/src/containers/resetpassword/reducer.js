const initialState = {
    pending: false,
    status: null,
    error: null
};


const resetPassword = (state = initialState, action) => {

    switch (action.type) {
        case "RESET_PASSWORD_FULFILLED":
            return {
                ...state,
                pending: false,
                error: undefined,
                status: true

            };


        case "RESET_PASSWORD_PENDING":
            return {
                ...state,
                pending: true,
                error: undefined,
                status: null,

            };


        case "RESET_PASSWORD_REJECTED":
            return {
                ...state,
                pending: false,
                error: action.payload.response.data.error,
                status: false
            };

        case "GET_VALUES_RESET_PASSWORD":
            return {
                ...state,
                ...action.data,
                error: undefined
            };    

        default:
            return state;
    }
};

export default resetPassword;