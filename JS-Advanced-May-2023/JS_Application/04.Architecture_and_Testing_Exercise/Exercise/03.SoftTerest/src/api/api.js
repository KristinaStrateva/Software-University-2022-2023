const host = 'http://localhost:3030';

async function request(url, options) {
    try {
        const res = await fetch(host + url, options);

        if (!res.ok) {
            if (res.status == 403) {
                sessionStorage.removeItem('userData');
            }

            const errorMessage = (await res.json()).message;

            throw new Error(errorMessage);
        }

        if (res.status == 204) {
            return res;

        } else {
            return res.json();
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

function createOptions(method = 'get', data) {
    let options = {
        method,
        headers: {}
    };

    if (data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = JSON.parse(sessionStorage.getItem('userData'));

    if (userData) {
        options.headers['X-Authorization'] = userData.token;
    }

    return options;
}

export async function get(url) {
    return request(url, createOptions());
}

export async function post(url, data) {
    return request(url, createOptions('post', data));
}

export async function put(url, data) {
    return request(url, createOptions('put', data));
}

export async function del(url) {
    return request(url, createOptions('delete'));
}

export async function login(email, password) {
    const result = await post('/users/login', {email, password});

    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    }

    sessionStorage.setItem('userData', JSON.stringify(userData));
}

export async function logout() {
    await get('/users/logout');
    sessionStorage.removeItem('userData');
}

export async function register(email, password) {
    const result = await post('/users/register', {email, password});

    const userData = {
        email: result.email,
        id: result._id,
        token: result.accessToken
    }

    sessionStorage.setItem('userData', JSON.stringify(userData));
}

window.api = {
    request,
    get,
    post,
    put,
    del,
    login,
    logout
}