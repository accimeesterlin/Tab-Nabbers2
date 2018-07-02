import {
    eventBriteSearch
} from '../actions';
import reducer from '../reducer';
import events from '../__mock__/events.json';
import configureStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';


const middlewares = [promise()];
const mockStore = configureStore(middlewares);

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

    it('Should update redux store with events', () => {
        const store = mockStore(initialState);

        return store.dispatch(eventBriteSearch('javascript', {}))
            .then(() => {
                const actions = store.getActions();
                const expectedEvents = actions[1].payload.data;
                // console.log('Actions: ', actions[1].payload.data);
                expect(events).toEqual(expectedEvents);
            });
    });

});