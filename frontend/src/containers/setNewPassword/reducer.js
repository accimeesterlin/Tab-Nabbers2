const initialState = {
    status: null,
    pending: false,
    error: null
};


const newPassword = (state = initialState, action) => {

    switch (action.type) {
        case "GET_VALUES_NEW_PASSWORD":
            return {
                ...state,
                ...action.data,
                error:null
            };
        case "NEW_PASSWORD_FULFILLED":
            return {
                ...state,
                pending: false,
                status: true,
                error:null

            };
        case "NEW_PASSWORD_REJECTED":
            return {
                ...state,
                pending:false,
                error: action.payload.response.data.error

            };
        case "NEW_PASSWORD_PENDING":
            return {
                ...state,
                pending: true,
                error:null

            };
        default:
            return state;
    }
};


export default newPassword;