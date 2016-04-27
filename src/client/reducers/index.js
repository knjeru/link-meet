import { combineReducers } from 'redux';
import MeetUpReducers from './reducer_server_meetup';

const rootReducer = combineReducers({
    meetUp: MeetUpReducers
});

export default rootReducer;
