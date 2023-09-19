const host = 'http://localhost:3030/jsonstore/collections/books';

export async function request(url, options) {
    try {
        const res = await fetch(host + url, options);

        if (!res.ok) {
            const errMsg = (await res.json()).message;

            throw new Error(errMsg);
        }

        if (res.status === 204) {
            return res;
        } else {

            //have to check if it is more right to be "return res.json()"!!!

            const data = await res.json();
    
            return data;
        }
    } catch (err) {
        const errorMessage = err.message;
        alert(errorMessage);
        throw err;
    }
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

    return options;
}

export async function get(url = '') {
    return request(url, createOptions());
}

export async function post(data, url = '') {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data))
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

window.api = {
    request,
    get,
    post,
    put,
    del
}