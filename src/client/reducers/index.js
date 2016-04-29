import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import MeetUpReducers from './reducer_server_meetup';
import AuthReducer from './reducer_auth';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
    meetUp: MeetUpReducers,
    auth: AuthReducer,
    user: UserReducer,
    form: formReducer
});

export default rootReducer;
