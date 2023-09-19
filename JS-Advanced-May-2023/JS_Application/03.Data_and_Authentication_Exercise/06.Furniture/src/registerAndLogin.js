import page from "../node_modules/page/page.mjs";
import { html } from "../node_modules/lit-html/lit-html.js";
import { createSubmitHandler } from "./utils.js";
import { login, register } from "./user.js";



const registerAndLoginTemplate = (onSubmit) => html`
<div class="wrapper">
    <div class="card-wrapper">
        <div class="row">
            <div class="col-md-12">
                <h2>Register</h2>
                <form action="/register" method="post" @submit=${onSubmit}>
                    <label>E-mail: <input type="text" name="email"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <label>Repeat: <input type="password" name="rePass"></label>
                    <button>Register</button>
                </form>
                <hr>
                <h2>Login</h2>
                <form action="/login" method="post" @submit=${onSubmit}>
                    <label>E-mail: <input type="text" name="email"></label>
                    <label>Password: <input type="password" name="password"></label>
                    <button>Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
`;

async function onSubmit(ctx, data, event) {
    
    if (event.target.querySelector('button').textContent === 'Login') {
        await login(data.email, data.password);

    } else {
        await register(data.email, data.password);
    }

    page.redirect('/catalog');
}

export async function registerAndLoginPage(ctx) {
    ctx.render(registerAndLoginTemplate(createSubmitHandler(ctx, onSubmit)));
}

// async function onRegister(event) {
//     event.preventDefault();

//     const currUrl = new URL(event.target.action);
//     const formData = new FormData(event.target);

//     const email = formData.get("email");
//     const password = formData.get("password");
//     const rePass = formData.get("rePass");

//     if (
//         email == '' ||
//         password == '' ||
//         rePass == ''
//     ) {
//         return alert("All fields are required!");
//     }

//     if (password !== rePass) {
//         return alert('Passwords don\'t match!');
//     }

//     const options = {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password })
//     };

//     try {
//         const res = await fetch('http://localhost:3030/users' + currUrl.pathname, options);

//         let data = null;

//         if (res.status != 204) {
//             data = await res.json();
//         }

//         if (!res.ok) {
//             if (res.status == 403) {
//                 localStorage.removeItem('userData');
//                 throw new Error()
//             }

//             throw (await res.json()).message;
//         }

//         localStorage.setItem('userData', JSON.stringify(data));

//     } catch (err) {
//         const errorMessage = err.message;

//         alert(errorMessage);

//         throw err;
//     }

//     window.location = "homeLogged.html";
// }

// async function onLogin(event) {
//     event.preventDefault();

//     const currUrl = new URL(event.target.action);
//     const formData = new FormData(event.target);

//     const email = formData.get("email");
//     const password = formData.get("password");

//     if (
//         email == '' ||
//         password == ''
//     ) {
//         return alert("All fields are required!");
//     }

//     const options = {
//         method: 'post',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password })
//     };

//     try {
//         const res = await fetch('http://localhost:3030/users' + currUrl.pathname, options);

//         let data = null;

//         if (res.status != 204) {
//             data = await res.json();
//         }

//         if (!res.ok) {
//             if (res.status == 403) {
//                 localStorage.removeItem('userData');
//                 throw new Error()
//             }

//             throw (await res.json()).message;
//         }

//         localStorage.setItem('userData', JSON.stringify(data));

//     } catch (err) {
//         const errorMessage = err.message;

//         alert(errorMessage);

//         throw err;
//     }

//     window.location = "homeLogged.html";
// }