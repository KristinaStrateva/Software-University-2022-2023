import { rootElement } from "../app.js";
import { setUserData } from "../src/api/session.js";
import { login } from "../src/api/userAuth.js";
import { createSubmitHandler } from "../src/utils.js";
import { html } from "./node_modules/lit-html/lit-html.js";


//ToDo: Replace with actual view
const loginTemplate = (onSubmit) => html`
<h1>Login Page</h1>
<form @submit=${onSubmit}>
    <label>Email: <input type="text" name="email"></label>
    <label>Password: <input type="password" name="password"></label>
    <button>Login</button>
</form>
`;

//ToDo: Change user object based on requirements
async function onSubmit(data, form) {
    if (data.email === '' || data.password === '') {
        return alert('All fields are required!');
    }

    await login(data.email, data.password);
    form.reset();
    setUserData(data);

    //ToDo: Use redirect location from the project
    ctx.page.redirect = '/';
}

export async function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onSubmit)), rootElement);
}