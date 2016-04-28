import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const CREATE_USER = 'CREATE_USER';
export const AUTH_USER = 'AUTH_USER';
export const DEAUTH_USER = 'UNAUTH_USER';

const URL_BASE = 'https://link-meet-server.herokuapp.com/api/meetup';
const AUTH_URL_BASE = 'https://link-meet-server.herokuapp.com/auth';
const token = localStorage.getItem('token');

export function fetchCategories() {
    const request = axios.get(`${URL_BASE}`, {
        headers: {authorization: token}
    });
    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}

export function fetchGroups(id) {
    const request = axios.get(`${URL_BASE}/${id}/groups`, {
        headers: {authorization: token}
    });

    return {
        type: FETCH_GROUPS,
        payload: request
    }
}

export function fetchEvents(name) {
    const request = axios.get(`${URL_BASE}/groups/${name}`, {
        headers: {authorization: token}
    });

    return {
        type: FETCH_EVENTS,
        payload: request
    }
}

export function fetchPeople(name, event_id) {
    const request = axios.get(`${URL_BASE}/groups/${name}/events/${event_id}`, {
        headers: {authorization: token}
    });

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

export function loginUser(user) {
    const request = axios.post(`${AUTH_URL_BASE}/login`, user);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function signOut() {
    localStorage.removeItem('token');

    return {
        type: DEAUTH_USER
    };
}