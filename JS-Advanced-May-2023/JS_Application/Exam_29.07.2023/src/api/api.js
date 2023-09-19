import { clearUserData, getUserData } from "./session.js";

const host = 'http://localhost:3030';

async function request(url, options) {
    try {
        const res = await fetch(host + url, options);

        if (res.status == 204) {
            return res;
        }

        if (!res.ok) {
            if (res.status == 403) {
                clearUserData();
            }

            const errMessage = (await res.json()).message;

            throw new Error(errMessage);
        }

        return res.json();

    } catch (err) {
        alert(err.message);

        throw err;
    }
}

export async function get(url) {
    return await request(url, createOptions());
}

export async function post(url, data) {
    return await request(url, createOptions('post', data));
}

export async function put(url, data) {
    return await request(url, createOptions('put', data));
}

export async function del(url) {
    return await request(url, createOptions('delete'));
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    return options;
}