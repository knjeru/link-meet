import {FETCH_USER} from '../actions/index';

const INITIAL_STATE = {user: []};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_USER:
            return{...state, user: action.payload.data.data};
        default:
            return state;
    }
}