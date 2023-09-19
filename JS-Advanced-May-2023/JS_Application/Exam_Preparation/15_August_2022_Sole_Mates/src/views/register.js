import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../utils.js";


const registerTemplate = (onSumbit) => html`
<section id="register">
    <div class="form">
    <h2>Register</h2>
    <form class="login-form" @submit=${onSumbit}>
        <input type="text" name="email" id="register-email" placeholder="email"/>
        <input type="password" name="password" id="register-password" placeholder="password"/>
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password"/>
        <button type="submit">login</button>
        <p class="message">Already registered? <a href="/login">Login</a></p>
    </form>
    </div>
</section>
`;


export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onSubmit)));
    
    async function onSubmit(data, form, event) {
        if (data.email === '' || data.password === '') {
            form.reset();

            return alert('All fields are required!');
        }

        if (data.password !== data['re-password']) {
            form.reset();

            return alert('Passwords don\'t match!');
        }

        await register(data.email, data.password);

        ctx.page.redirect('/catalog');
    }
}