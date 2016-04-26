import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_PEOPLE = 'FETCH_PEOPLE';

const URL_BASE = '/api/meetup';

export function fetchCategories() {
    const request = axios.get(`${URL_BASE}`);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}

export function fetchGroups(id) {
    const request = axios.get(`${URL_BASE}/:id/groups`);

    return {
        type: FETCH_GROUPS,
        payload: request
    }
}

export function fetchEvents(name) {
    const request = axios.get(`${URL_BASE}/groups/:name`);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}

export function fetchPeople(name, event_id) {
    const request = axios.get(`${URL_BASE}/groups/:name/events/:event_id`);

    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}