import reducer from '../reducer';


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

describe('', () => {
    it('Should returned the initial State', () => {
        expect(reducer(undefined, {})).toEqual(initialState);;
    });
});