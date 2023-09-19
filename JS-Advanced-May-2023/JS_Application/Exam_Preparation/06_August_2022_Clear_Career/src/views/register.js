import { rootElement } from "../../app.js";
import { setUserData } from "../api/session.js";
import { register } from "../api/userAuth.js";
import { createSubmitHandler } from "../utils.js";
import { html } from "../../node_modules/lit-html/lit-html.js";


const registerTemplate = (onSubmit) => html`
<section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="login-form" @submit=${onSubmit}>
              <input type="text" name="email" id="register-email" placeholder="email"/>
              <input type="password" name="password" id="register-password" placeholder="password"/>
              <input type="password" name="re-password" id="repeat-password" placeholder="repeat password"/>
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
`;

async function onSubmit({email, password, ['re-password']: rePass}, form) {
    if (email === '' || password === '') {
        return alert('All fields are required!');
    } else if (password !== rePass) {
        return alert('Passwords don\'t match!');
    }

    await register(email, password);
    form.reset();
    // ctx.page.redirect = '/catalog';
}

export async function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onSubmit)));
}