import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const CREATE_USER = 'CREATE_USER';

const URL_BASE = 'https://link-meet-server.herokuapp.com/api/meetup';
const AUTH_URL_BASE = 'https://link-meet-server.herokuapp.com/auth'

export function fetchCategories() {
    const request = axios.get(`${URL_BASE}`);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}

export function fetchGroups(id) {
    const request = axios.get(`${URL_BASE}/${id}/groups`);

    return {
        type: FETCH_GROUPS,
        payload: request
    }
}

export function fetchEvents(name) {
    const request = axios.get(`${URL_BASE}/groups/${name}`);

    return {
        type: FETCH_EVENTS,
        payload: request
    }
}

export function fetchPeople(name, event_id) {
    const request = axios.get(`${URL_BASE}/groups/${name}/events/${event_id}`);

    return {
        type: FETCH_PEOPLE,
        payload: request
    }
}

export function createUser(newUser) {
    const request = axios.post(`${AUTH_URL_BASE}/register`, newUser);

    return {
        type: CREATE_USER,
        payload: request
    }
}