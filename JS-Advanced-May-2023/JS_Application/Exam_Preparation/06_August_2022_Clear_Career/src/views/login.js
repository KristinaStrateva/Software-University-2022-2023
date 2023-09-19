import { rootElement } from "../../app.js";
import { setUserData } from "../api/session.js";
import { login } from "../api/userAuth.js";
import { createSubmitHandler } from "../utils.js";
import { html } from "../../node_modules/lit-html/lit-html.js";


const loginTemplate = (onSubmit) => html`
<section id="login">
    <div class="form">
    <h2>Login</h2>
    <form class="login-form" @submit=${onSubmit}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password"/>
        <button type="submit">login</button>
        <p class="message"> Not registered? <a href="/register">Create an account</a></p>
    </form>
    </div>
</section>
`;

async function onSubmit({email, password}, form) {
    if (email === '' || password === '') {
        return alert('All fields are required!');
    }

    await login(email, password);
    form.reset();
    // ctx.page.redirect = '/catalog';
}

export async function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onSubmit)));
}