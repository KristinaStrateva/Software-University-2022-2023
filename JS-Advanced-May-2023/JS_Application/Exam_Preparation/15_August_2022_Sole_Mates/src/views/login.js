import { html } from "../../node_modules/lit-html/lit-html.js";
import { login } from "../api/user.js";
import { createSubmitHandler } from "../utils.js";


const loginTemplate = (onSumbit) => html`
<section id="login">
    <div class="form">
        <h2>Login</h2>
        <form class="login-form" @submit=${onSumbit}>
            <input type="text" name="email" id="email" placeholder="email" />
            <input type="password" name="password" id="password" placeholder="password"/>
            <button type="submit">login</button>
            <p class="message">Not registered? <a href="/register">Create an account</a></p>
        </form>
    </div>
</section>
`;


export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onSubmit)));
    
    async function onSubmit(data, form, event) {
        if (data.email === '' || data.password === '') {
            form.reset();

            return alert('All fields are required!');
        }

        await login(data.email, data.password);

        ctx.page.redirect('/catalog');
    }
}