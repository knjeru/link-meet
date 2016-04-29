import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, hashHistory} from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';
import {AUTH_USER} from './actions/index';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');

if(token) {
    // if there is a token set the application states type to AUTH_USER
    // This will call the action for setting authenticated to true
    
    store.dispatch({type: AUTH_USER})
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes} />
    </Provider>
    , document.querySelector('.application')
);