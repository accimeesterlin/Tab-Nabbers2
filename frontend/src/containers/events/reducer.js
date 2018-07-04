const initialState = {
    events: [],
    saved: [],
    pending: 'fulfilled', // fulfilled, rejected, pending
    error: false,
    errorMessage: ''
};


const eventBrites = (state = initialState, action) => {
    switch (action.type) {
        case "EVENTBRITE_SEARCH_FULFILLED":
            return {
                ...state,
                events: [...action.payload.data.events],
                pending: 'fulfilled',
                error: false,
            };

        case "EVENTBRITE_SEARCH_PENDING":
            return {
                ...state,
                pending: 'pending',
                error: false
            };

        case "EVENTBRITE_SEARCH_REJECTED":
            return {
                ...state,
                events: [],
                pending: 'rejected',
                error: true,
                errorMessage: action.payload.response.data.errorMessage
            };

        default:
            return state;
    }
};



export default eventBrites;