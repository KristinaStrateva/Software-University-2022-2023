import { containerDivElement, updateNav } from "../../app.js";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { post } from "../api.js";
import page from "../../node_modules/page/page.mjs";


const registerTemplate = () => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Register New User</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${onSubmit}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="email">Email</label>
                    <input class="form-control" id="email" type="text" name="email">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="password">Password</label>
                    <input class="form-control" id="password" type="password" name="password">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="rePass">Repeat</label>
                    <input class="form-control" id="rePass" type="password" name="rePass">
                </div>
                <input type="submit" class="btn btn-primary" value="Register" />
            </div>
        </div>
    </form>
`;

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if (
        email === '' ||
        password === '' ||
        rePass === ''
    ) {
        event.target.reset();

        throw new Error('All fields are required!');
    }

    if (password !== rePass) {
        event.target.reset();

        throw new Error('Passwords don\'t match!');
    }

    const data = await post('http://localhost:3030/users/register', {email, password});

    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('ownerId', data._id);

    updateNav();

    page.redirect('/catalog');
}

export function registerPage(ctx) {
    render(registerTemplate(), containerDivElement);
}