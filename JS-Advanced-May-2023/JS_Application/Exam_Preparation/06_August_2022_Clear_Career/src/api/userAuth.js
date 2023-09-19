import page from "../../node_modules/page/page.mjs";
import { get, post } from "./api.js";
import { clearUserData, setUserData } from "./session.js";


const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

// ToDo: Change user object according to project requirements

export async function login(email, password) {
    const userData = await post(endpoints.login, {email, password});
    setUserData(userData);
    page.redirect('/catalog');
}

export async function register(email, password) {
    const userData = await post(endpoints.register, {email, password});
    setUserData(userData);
    page.redirect('/catalog');
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
    page.redirect('catalog');
}