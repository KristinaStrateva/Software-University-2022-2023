import { clearUserData, getUserData } from "./sessions.js";

const host = 'http://localhost:3030';

async function request(url, method = 'get', data) {
    const options = {
        method,
        headers: {}
    }

    if (data) {
        options.headers['Content-Type'] ='application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.status == 204) {
            return response;
        }

        if (!response.ok) {
            if (response.status == 403) {
                clearUserData();
            }

            const errMessage = (await response.json()).message;

            throw new Error(errMessage);
        }

        return await response.json();

    } catch (err) {
        alert(err.message);

        throw err;
    }
}

export async function get(url) {
    return request(url);
}

export async function getById(url, id) {
    return request(url + id);
}

export async function post(url, data) {
    return request(url, 'post', data);
}

export async function putById(url, data) {
    return request(url, 'put', data);
}

export async function deleteById(url) {
    return request(url, 'delete');
}