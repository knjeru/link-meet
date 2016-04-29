import {FETCH_CATEGORIES, FETCH_GROUPS, FETCH_EVENTS, FETCH_PEOPLE, FETCH_PERSON} from '../actions/index';

const INITIAL_STATE = {categories: [], groups: [], events: [], people: [], person: []};

export default function(state = INITIAL_STATE, action) {
    switch(action.type){
        case FETCH_CATEGORIES:
            return{...state, categories: action.payload.data.data};
        case FETCH_GROUPS:
            return{...state, groups: action.payload.data.data};
        case FETCH_EVENTS:
            return{...state, events: action.payload.data.data};
        case FETCH_PEOPLE:
            return{...state, people: action.payload.data.data};
        case FETCH_PERSON:
            return{...state, person: action.payload.data.data};
        default:
            return state;
    }
}