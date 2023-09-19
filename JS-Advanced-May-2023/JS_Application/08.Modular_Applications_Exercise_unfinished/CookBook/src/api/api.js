import { clearUserdata, getAccessToken } from "../utils.js";

const host = 'http://localhost:3030';

async function request(url, options) {
    try {
        const response = await fetch(host + url, options);
    
        if (!response.ok) {
            if (response.status === 403) {
                clearUserdata();
            }
    
            const errMessage = (await response.json()).message;
    
            throw new Error(errMessage);
        }

        if (response.status == 204) {
            return response;
        }

        return response.json();

    } catch (err) {
        const errMessage = err.message;

        alert(errMessage);

        throw err;
    }
}

export async function get(url) {
    return await request(url, createOptions());
}

export async function getById(url, id) {
    return await request(url + id);
}

export async function post(url, data) {
    return await request(url, createOptions('post', data));
}

export async function put(url, data) {
    return await request(url, createOptions('put', data));
}

export async function del(url, id) {
    return await request(url + id, createOptions('delete'));
}

function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    }

    if (data) {
        options.headers['Content-Type'] = 'application/json',
        options.body = JSON.stringify(data)
    }

    const token = getAccessToken();

    if (token) {
        options.headers['X-Authorization'] = token;
    }

    return options;
}