import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";
import { createSubmitHandler } from "../utils.js";


const loginTemplate = (onSubmit) => html`
<section id="login">
    <article>
        <h2>Login</h2>
        <form id="loginForm" @submit=${onSubmit}>
            <label>E-mail: <input type="text" name="email"></label>
            <label>Password: <input type="password" name="password"></label>
            <input type="submit" value="Login">
        </form>
    </article>
</section>
`;

async function onSubmit(ctx, data, event) {
    await login(data.email, data.password);

    ctx.page.redirect('/catalog');
}

export async function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(ctx, onSubmit)));
}