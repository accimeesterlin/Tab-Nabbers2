import reducer from '../reducer';


const initialState = {
    events: [],
    saved: [],
    pending: 'fulfilled', // fulfilled, rejected, pending
    error: false,
    errorMessage: ''
};

describe('', () => {
    it('Should returned the initial State', () => {
        expect(reducer(undefined, {})).toEqual(initialState);;
    });
});