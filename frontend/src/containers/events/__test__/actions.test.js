import {
    eventBriteSearch,
    getValues,
    getLocation
} from '../actions';

import configureStore from 'redux-mock-store';
import promise from 'redux-promise-middleware';
import mockLocation from '../__mock__/location.json';


const middlewares = [promise()];
const mockStore = configureStore(middlewares);

describe('Action creators', () => {
    it('should add value in redux store', () => {
        const data = 'I am happy to be here';
        const expectedAction = {
            type: 'GET_VALUE',
            data
        };
        expect(getValues(data)).toEqual(expectedAction);
    });

    it('should get user location', () => {
        const store = mockStore({});

        return store.dispatch(getLocation())
            .then(() => {
                const actions = store.getActions();
                const expectedAction = {
                    type: "GET_LOCATION_PENDING"
                };
                expect(actions[0]).toEqual(expectedAction);
                expect(actions[1].payload.data).toEqual(mockLocation);
            });
    });

    it('Should return EVENTBRITE_SEARCH_FULFILLED action type ', () => {
        const store = mockStore({});

        return store.dispatch(eventBriteSearch('javascript', {}))
            .then(() => {
                const actions = store.getActions();
                const type = actions[1].type;
                expect(type).toEqual('EVENTBRITE_SEARCH_FULFILLED');
            });
    });
});