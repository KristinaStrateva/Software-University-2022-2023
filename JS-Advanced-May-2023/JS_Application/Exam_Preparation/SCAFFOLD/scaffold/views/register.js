import { rootElement } from "../app.js";
import { setUserData } from "../src/api/session.js";
import { login } from "../src/api/userAuth.js";
import { createSubmitHandler } from "../src/utils.js";
import { html } from "./node_modules/lit-html/lit-html.js";


//ToDo: Replace with actual view
const registerTemplate = (onSubmit) => html`
<h1>Register Page</h1>
<form @submit=${onSubmit}>
    <label>Email: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <label>Repeat password: <input type="password" name="rePass"></label>
    <button>Register</button>
</form>
`;

//ToDo: Change user object based on requirements
async function onSubmit(data, form) {
    if (data.email === '' || data.password === '') {
        return alert('All fields are required!');
    } else if (data.password !== data.rePass) {
        return alert('Passwords don\'t match!');
    }

    await register(data.email, data.password);
    form.reset();
    setUserData(data);

//ToDo: Use redirect location from the project
    ctx.page.redirect = '/';
}

export async function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onSubmit)), rootElement);
}