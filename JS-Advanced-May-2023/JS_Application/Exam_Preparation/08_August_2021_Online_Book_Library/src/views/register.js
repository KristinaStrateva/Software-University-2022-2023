import { html } from "../../node_modules/lit-html/lit-html.js";
import { register } from "../api/user.js";
import { createSubmitHandler } from "../utils.js";



const registerTemplate = (onSubmit) => html`
<section id="register-page" class="register">
    <form id="register-form" action="" method="" @submit=${onSubmit}>
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>
`;

async function onSubmit(data, form, event) {
    const email = data.email;
    const password = data.password;
    const rePass = data['confirm-pass'];

    if (email === '' || password === '') {
        return alert('All fields are required!');
    }

    if (password !== rePass) {
        return alert('Passwords don\'t match!');
    }

    form.reset();

    register(email, password);
}

export async function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onSubmit)));
}