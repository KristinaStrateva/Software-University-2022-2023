import page from '../node_modules/page/page.mjs';
import { logout } from './api/user.js';
import { updateNav } from './middlewares/navBar.js';
import { decorateContext } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';

page(addSession);
page(updateNav);
page(decorateContext);

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createPage);

document.getElementById('logoutBtn').addEventListener('click', logout);

page.start();