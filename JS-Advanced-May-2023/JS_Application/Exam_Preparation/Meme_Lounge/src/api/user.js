import { get, post } from "./api.js"
import { clearUserData, setUserData } from "./sessions.js";

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function login(email, password) {
    const userData = await post(endpoints.login, {email, password});
    setUserData(userData);
}

export async function register(username, email, password, gender) {
    const userData = await post(endpoints.register, {username, email, password, gender});
    setUserData(userData);
}

export function logout() {
    get(endpoints.logout);
    clearUserData();
}