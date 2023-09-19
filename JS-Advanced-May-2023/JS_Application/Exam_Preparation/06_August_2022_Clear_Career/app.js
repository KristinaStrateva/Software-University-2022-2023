import { render } from "./node_modules/lit-html/lit-html.js";
import page from "./node_modules/page/page.mjs";
import { getUserData } from "./src/api/session.js";
import { layoutTemplate } from "./src/layout.js";
import { homePage } from "./src/views/home.js";
import { loginPage } from "./src/views/login.js";
import { registerPage } from "./src/views/register.js";
import { logout } from "./src/api/userAuth.js";
import { catalogPage } from "./src/views/catalog.js";
import { detailsPage } from "./src/views/details.js";
import { createPage } from "./src/views/create.js";
import { editPage } from "./src/views/update.js";


export const rootElement = document.getElementById('wrapper');

page(decorateContext);
page('/index.html', '/');
page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', onLogout);
page('/catalog/:id', detailsPage);
page('/create', createPage);
page('/details/:id/edit/:id', editPage);

page.start();

function decorateContext(ctx, next) {
    ctx.render = renderView;

    next();
}

//ToDo: Inject dependencies
function renderView(content) {
    const userData = getUserData();

    render(layoutTemplate(userData, content), rootElement);
}

function onLogout(ctx) {
    logout();

    ctx.page.redirect('/catalog');
}