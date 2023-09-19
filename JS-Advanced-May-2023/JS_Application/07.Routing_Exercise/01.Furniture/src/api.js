async function request(url, options) {
    try {
        const res = await fetch(url, options);

        let result;

        if (res.status != 204) {
            result = await res.json();
        }

        if (!res.ok) {
            if (res.status == 403) {
                localStorage.removeItem('userData');
            }

            throw result;
        }

        return result;

    } catch (err) {
        const errMessage = err.message;
        alert(errMessage);

        throw err;
    }
}

export async function get(url) {
    return await request(url, createOptions());
}

export async function getById(url) {
    return await request(url, createOptions());
}

export async function post(url, data) {
    return await request(url, createOptions('post', data));
}

export async function put(url, data) {
    return await request(url, createOptions('put', data));
}

export async function delById(url) {
    return await request(url, createOptions('delete'));
}

export async function logout(url) {
    const options = {
        method: 'get',
        headers: {
            'X-Authorization': localStorage.token
        }
    }

    return await fetch(url, options);
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

    if (localStorage.token) {
        options.headers['X-Authorization'] = localStorage.token;
    }

    return options;
}