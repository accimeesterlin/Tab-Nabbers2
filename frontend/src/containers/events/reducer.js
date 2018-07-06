import {
    getError,
    getEvents,
    getEventId
} from '../../common/selectors/events/reducerSelectors';
const initialState = {
    events: [],
    saved: {
        error: false,
        pending: false,
        errorMessage: null

    },
    pending: 'fulfilled', // fulfilled, rejected, pending
    error: false,
    errorMessage: null
};


const eventBrites = (state = initialState, action) => {
    switch (action.type) {
        case "EVENTBRITE_SEARCH_FULFILLED":
            return {
                ...state,
                events: [...getEvents(action)],
                pending: 'fulfilled',
                error: false,
            };

        case "EVENTBRITE_SEARCH_PENDING":
            return {
                ...state,
                pending: 'pending',
                error: false
            };

        case 'SAVE_EVENT_FULFILLED':
            const editedEvents = state.events.map((event, index) => {
                if (event.id === getEventId(action)) {
                    event.is_favorite = true;
                }
                return event;
            });
            return {
                ...state,
                events: [...editedEvents],
                saved: {
                    error: false,
                    errorMessage: ''
                },

            };

        case 'SAVE_EVENT_REJECTED':
            return {
                ...state,
                saved: {
                    error: true,
                    errorMessage: getError(action)
                }

            };

        case "EVENTBRITE_SEARCH_REJECTED":
            return {
                ...state,
                events: [],
                pending: 'rejected',
                error: true,
                errorMessage: getError(action)
            };

        default:
            return state;
    }
};



export default eventBrites;