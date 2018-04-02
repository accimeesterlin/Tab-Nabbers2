

const initialState = {
    status: "pending"
};


const integrations = (state = initialState, action) => {
    switch (action.type) {
        case "SERVICE_TOKEN_FULFILLED":
            return {
                ...state,
                status: "success"

            };

        case "SERVICE_TOKEN_REJECTED":
            return {
                ...state,
                status: "rejected"
            };

        case "SERVICE_TOKEN_PENDING":
            return {
                ...state,
                status: "pending"
            };

        default:
            return state;
    }
};


module.exports = integrations;