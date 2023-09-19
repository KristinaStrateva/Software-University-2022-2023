import page from "./node_modules/page/page.mjs";
import { render } from "./node_modules/lit-html/lit-html.js";
import { getUserData } from "./src/api/sessions.js";
import { welcomePage } from "./src/views/welcome.js";
import { loginPage } from "./src/views/login.js";
import { registerPage } from "./src/views/register.js";
import { logout } from "./src/api/user.js";
import { catalogPage } from "./src/views/catalog.js";
import { createPage } from "./src/views/create.js";

const mainElement = document.querySelector('main');

document.getElementById('logout').addEventListener('click', onLogout);

page(decorateContex);

page('/', welcomePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createPage);

updateNav();
page.start();

function decorateContex(ctx, next) {
    ctx.render = renderView;
    ctx.updateNav = updateNav;

    next();
}

function renderView(resultTemplate) {

    render(resultTemplate, mainElement);
}

function updateNav() {
    const userData = getUserData();

    if (userData) {
        document.querySelector('.user').style.display = 'block';
        document.querySelector('.guest').style.display = 'none';
        document.querySelector('.user span').textContent = `Welcome, ${userData.email}`;    
    } else {
        document.querySelector('.user').style.display = 'none';
        document.querySelector('.guest').style.display = 'block';
    }
}

function onLogout() {
    logout();
    page.redirect('/');
    updateNav();
}