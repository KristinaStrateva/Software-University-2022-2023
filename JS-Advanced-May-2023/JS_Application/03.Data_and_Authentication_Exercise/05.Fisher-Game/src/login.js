window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(aTag => aTag.classList.remove('active'));
    const loginButtonElement = document.querySelector('a#login');
    loginButtonElement.classList = 'active';
    
    const logoutDivElement = document.getElementById('user');
    logoutDivElement.style.display = 'none';
    
    const formElement = document.querySelector('form');

    formElement.addEventListener('submit', onSubmit);
});

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const currEmail = formData.get('email').trim();
    const currPassword = formData.get('password').trim();

    const bodyData = {
        email: currEmail,
        password: currPassword
    };

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
    }

    try {
        const response = await fetch('http://localhost:3030/users/login', options)

        if (response.ok !== true) {
            const errorMessage = (await response.json()).message;

            throw new Error(errorMessage);
        }

        const data = await response.json();
        const currUserData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        }

        sessionStorage.setItem('currUserData', JSON.stringify(currUserData));

        window.location = 'index.html';

    } catch (err) {
        const notificationPElement = document.querySelector('.notification');

        notificationPElement.textContent = err.message;

        document.querySelectorAll('form input').forEach(input => input.value = '');
    }
}