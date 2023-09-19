import page from '../node_modules/page/page.mjs';
import { post, get } from './api.js';
import { clearUserdata, setUserData } from './utils.js';
// import * as api from './api.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
};

export async function login(email, password) {
    const user = await post(endpoints.login, {email, password});

    setUserData(user);

    return user;
}

export async function register(email, password) {
    const user = await post(endpoints.register, {email, password});

    setUserData(user);

    return user;
}

export function logout() {
    get(endpoints.logout);
    clearUserdata();

    page.redirect('/catalog');
}