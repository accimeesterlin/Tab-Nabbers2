export const getError = (action) => {
    const payload = action.payload;
    return payload.response && payload.response.data ?
        payload.response.data.errorMessage : 'Error occurs, please try again';
};


export const getEvents =  (action) => {
    const payload = action.payload;
    return payload.data ? payload.data.events : [];
};

export const getEventId = (action) => {
    const payload = action.payload;
    return payload.data ? payload.data.eventId : 'no event id'
};