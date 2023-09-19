import { render } from "./node_modules/lit-html/lit-html.js";
import page from "../node_modules/page/page.mjs";
import { getUserData } from "./src/api/session.js";
import { layoutTemplate } from "./src/layout.js";
import { homePage } from "./views/home.js";
import { loginPage } from "./views/login.js";
import { registerPage } from "./views/register.js";
import { logout } from "./src/api/userAuth.js";


// ToDo: Change rendered mainRootElement depending on project HTML structure
export const rootElement = document.body;

page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);

//ToDo: Properly select the Logout button according to the HTML structure
document.getElementById('logoutBtn').addEventListener('click', onLogout);

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

function onLogout() {
    logout();

    page.redirect('/');
}