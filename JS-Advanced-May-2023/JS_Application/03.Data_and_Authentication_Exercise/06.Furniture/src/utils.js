export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function getAccessToken() {
    const userData = getUserData();

    if (userData) {
        return userData.accessToken;
    } else {
        return null;
    }
}

export function clearUserdata() {
    localStorage.removeItem('userData');
}

export function setUserData(data) {
    console.log(data)
    localStorage.setItem('userData', JSON.stringify(data));
}

export function createSubmitHandler(ctx, handler) {
    return function (event) {
        event.preventDefault();

        const formData = Object.fromEntries(new FormData(event.target));

        const isInvalid = Object.values(formData).some(value => value === '');

        event.target.reset();

        if (isInvalid) {
            return alert('All fields are required!');
        } else if (formData.rePass && formData.password != formData.rePass) {
            return alert('Passwords don\'t match!');
        }

        handler(ctx, formData, event);
    }
}