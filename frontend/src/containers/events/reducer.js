const initialState = {
    events: [],
    saved: [],
    pending: false
}; 


const eventBrites = (state = initialState, action) => {
    switch (action.type) {
        case "EVENTBRITE_SEARCH_FULFILLED":
            return {
                ...state,
                events: [...action.payload.data.events],
                pending: false
            };

        case "EVENTBRITE_SEARCH_PENDING":
            return {
                ...state,
                pending: true
            };

        case "EVENTBRITE_SEARCH_REJECTED":
            return {
                ...state,
                events: [...action.payload],
                pending: false
            };
         case "GET_SAVED_EVENTS_FULFILLED":
            return {
                ...state,
                saved: [...action.payload.data.favorite],
                ids:[...action.payload.data.id]
            };
        default:
            return state;
    }
};



export default eventBrites;