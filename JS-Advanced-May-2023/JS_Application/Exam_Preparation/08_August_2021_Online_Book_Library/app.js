import { render } from "./node_modules/lit-html/lit-html.js";
import page from "./node_modules/page/page.mjs";
import { getUserData } from "./src/api/sessions.js";
import { logout } from "./src/api/user.js";
import { layoutTemplate } from "./src/layout.js";
import { catalogPage } from "./src/views/catalog.js";
import { createPage } from "./src/views/create.js";
import { detailsPage } from "./src/views/details.js";
import { loginPage } from "./src/views/login.js";
import { registerPage } from "./src/views/register.js";
import { updatePage } from "./src/views/update.js";
import { userBooksPage } from "./src/views/userBooks.js";


const mainDivElement = document.getElementById('container');

page(decorateContext);

page('/index.html', '/');
page('/', catalogPage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/create', createPage);
page('/catalog/:id', detailsPage);
page('/catalog/:id/edit/:id', updatePage);
page('/my-books', userBooksPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;

    next();
}

function renderView(content) {
    const userData = getUserData();

    render(layoutTemplate(content, userData), mainDivElement);
}

async function onLogout() {
    await logout();
}