import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import MeetUpReducers from './reducer_server_meetup';
import AuthReducer from './reducer_auth';

const rootReducer = combineReducers({
    meetUp: MeetUpReducers,
    auth: AuthReducer,
    form: formReducer
});

export default rootReducer;
