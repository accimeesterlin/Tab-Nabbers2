import React from 'react';
import {
    applyMiddleware,
    createStore
} from 'redux';
import {
    BrowserRouter as Router
} from "react-router-dom";
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import App from "./App";

const middleware = applyMiddleware(promise(), logger);
const store = createStore(reducers, middleware);


ReactDOM.render(<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, document.getElementById('root'));
