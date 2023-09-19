import { register } from "../api/data.js";

const section = document.getElementById('registerPage');
section.remove();

let ctx = null;

export function showRegister(context) {
    ctx = context;
    context.showSection(section);
}

const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePass = formData.get('repeatPassword').trim();

    if (
        email === '' ||
        password === '' ||
        rePass === ''
    ) {
        return alert('All fiellds must be non-empty!');
    }

    if (password !== rePass) {
        return alert('Passwords don\'t match!');
    }

    await register(email, password);

    form.reset();

    ctx.goTo('home');
    ctx.updateNavBar();
}