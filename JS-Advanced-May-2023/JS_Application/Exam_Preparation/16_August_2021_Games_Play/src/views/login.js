import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";
import { createEventHandler } from "../utils.js";



const loginTemplate = (onSubmit) => html`
<section id="login-page" class="auth">
    <form id="login" @submit=${onSubmit}>
        <div class="container">
            <div class="brand-logo"></div>
            <h1>Login</h1>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com">
            <label for="login-pass">Password:</label>
            <input type="password" id="login-password" name="password">
            <input type="submit" class="btn submit" value="Login">
            <p class="field">
                <span>If you don't have profile click <a href="/register">here</a></span>
            </p>
        </div>
    </form>
</section>
`;

export async function loginPage(ctx) {
    
    ctx.render(loginTemplate(createEventHandler(onSubmit)));

    async function onSubmit(data, form, event) {
        if (data.email == '' || data.password == '') {
            return alert('All fields are required!');
        }

        await login(data.email, data.password);

        form.reset();

        ctx.page.redirect('/');
    }
}