import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";
import { createEventHandler } from "../utils.js";



const registerTemplate = (onSubmit) => html`
<section id="register">
    <div class="form">
    <h2>Register</h2>
    <form class="register-form" @submit=${onSubmit}>
        <input type="text" name="email" id="register-email" placeholder="email"/>
        <input type="password" name="password" id="register-password" placeholder="password"/>
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password"/>
        <button type="submit">register</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
    </div>
</section>
`;

export async function registerPage(ctx) {
    ctx.render(registerTemplate(createEventHandler(onSubmit)));

    async function onSubmit(data, form) {
        if ([data.email, data.password, data['re-password']].some(value => value == '')) {
            return alert('All fields are required!');
        }

        if (data.password != data['re-password']) {
            return alert('Passwords don\'t match!');
        }

        await register(data.email, data.password);

        form.reset();

        ctx.page.redirect('/');
    }
}