import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_GROUPS = 'FETCH_GROUPS';
export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_PEOPLE = 'FETCH_PEOPLE';
export const CREATE_USER = 'CREATE_USER';
export const AUTH_USER = 'AUTH_USER';
export const DEAUTH_USER = 'UNAUTH_USER';

export const USER_ADDPERSON = 'USER_ADDPERSON';

const URL_MEETUP = 'https://link-meet-server.herokuapp.com/api/meetup';
const URL_AUTH = 'https://link-meet-server.herokuapp.com/auth';
const URL_USER = 'https://link-meet-server.herokuapp.com/user';
const token = localStorage.getItem('token');

// MEETUP API ACTIONS

export function fetchCategories() {
    const request = axios.get(`${URL_MEETUP}`, {
        headers: {authorization: token}
    });
    return {
        type: FETCH_CATEGORIES,
        payload: request
    }
}

export function fetchGroups(id) {
    const request = axios.get(`${URL_MEETUP}/${id}/groups`, {
        headers: {authorization: token}
    });

    return {
        type: FETCH_GROUPS,
        payload: request
    }
}

export function fetchEvents(name) {
    const request = axios.get(`${URL_MEETUP}/groups/${name}`, {
        headers: {authorization: token}
    });

    return {
        type: FETCH_EVENTS,
        payload: request
    }
}

export function fetchPeople(name, event_id) {
    const request = axios.get(`${URL_MEETUP}/groups/${name}/events/${event_id}`, {
        headers: {authorization: token}
    });

    return {
        type: FETCH_PEOPLE,
        payload: request
    }
}


// USER MEETUP DATA ACTIONS

export function savePerson(person) {
    const request = axios(`${URL_USER}`, person, {
        headers: {authorization: token}
    });

    return {
        type: USER_ADDPERSON,
        payload: request
    }
}


// USER AUTHORIZATION ACTIONS

export function createUser(newUser) {
    const request = axios.post(`${URL_AUTH}/register`, newUser);

    return {
        type: CREATE_USER,
        payload: request
    }
}

export function loginUser(user) {
    const request = axios.post(`${URL_AUTH}/login`, user);

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