window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(aTag => aTag.classList.remove('active'));
    const registerButtonElement = document.querySelector('a#register');
    registerButtonElement.classList = 'active';

    const logoutDivElement = document.getElementById('user');
    logoutDivElement.style.display = 'none';

    document.querySelector('form').addEventListener('submit', onRegister);
});

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // const [email, password, rePass] = [...formData.values()];

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePass = formData.get('rePass').trim();

    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    };

    try {
        if (
            email === '' ||
            password === '' ||
            rePass === ''
        ) {
            throw new Error('All fields must be non-empty!');
        }
    
        if (password !== rePass) {
            throw new Error('Password and Repeated Password must be the same!');
        }
        
        const response = await fetch('http://localhost:3030/users/register', options);

        if (response.ok !== true) {
            const error = (await response.json()).message;

            throw new Error(error);
        }

        const data = await response.json();

        const currUserData = {
            email: data.email,
            id: data._id,
            token: data.accessToken
        };

        sessionStorage.setItem('currUserData', JSON.stringify(currUserData));

        window.location = 'index.html';

    } catch (err) {
        const notificationPElement = document.querySelector('.notification');

        notificationPElement.textContent = err.message;

        setTimeout(() => {
            notificationPElement.textContent = '';
        }, 2000);

        document.querySelectorAll('form input').forEach(input => input.value = '');
    }
}