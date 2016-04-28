import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import MeetUpReducers from './reducer_server_meetup';

const rootReducer = combineReducers({
    meetUp: MeetUpReducers,
    form: formReducer
});

export default rootReducer;
