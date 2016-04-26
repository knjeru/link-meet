import { combineReducers } from 'redux';
import MeetUpReducers from './reducer_server_meetup';
// import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    meetups: MeetUpReducers
    // form: formReducer
});

export default rootReducer;
