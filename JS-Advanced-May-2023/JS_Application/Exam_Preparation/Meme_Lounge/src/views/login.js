import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";
import { createEventHandler } from "../utils.js";



const loginTemplate = (onSubmit) => html`
<section id="login">
    <form id="login-form" @submit=${onSubmit}>
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>
`;

export async function loginPage(ctx) {
    ctx.render(loginTemplate(createEventHandler(onSubmit)));

    async function onSubmit({email, password}, form, event) {
        if (email == '' || password == '') {
            form.reset();
            return alert('All fields are required!');
        }

        await login(email, password);

        form.reset();
        ctx.page.redirect('/catalog');
        ctx.updateNav();
    }
}