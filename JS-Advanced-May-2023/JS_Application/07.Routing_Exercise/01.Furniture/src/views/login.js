import { containerDivElement, updateNav } from "../../app.js";
import { post } from "../api.js";
import { html, render } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs";


const loginTemplate = () => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Login User</h1>
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
            <input type="submit" class="btn btn-primary" value="Login" />
        </div>
    </div>
</form>
`;

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    if (email === '' || password === '') {
        event.target.reset();

        throw new Error('All fields are required!');
    }

    const data = await post('http://localhost:3030/users/login', {email, password});

    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('ownerId', data._id);

    updateNav();

    page.redirect('/catalog');
}

export function loginPage(ctx) {
    render(loginTemplate(), containerDivElement);
}
